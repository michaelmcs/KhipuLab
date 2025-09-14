<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class QuipuController extends Controller
{
   
    public function show(int $id)
    {
        $sample = DB::table('lab_samples')
            ->select('id', 'code')
            ->where('id', $id)
            ->first();

        if (!$sample) {
            return response()->json(['message' => 'Sample not found'], 404);
        }
        $nodes = DB::table('trace_events')
            ->select([
                'id',
                DB::raw('quipu_cord AS cord'),
                DB::raw('quipu_knot AS knot'),
                DB::raw('COALESCE(state, event_type) AS label'),
                DB::raw("DATE_FORMAT(occurred_at, '%Y-%m-%d %H:%i:%s') AS occurred_at"),
            ])
            ->where('lab_sample_id', $id)
            ->orderBy('quipu_cord')
            ->orderBy('quipu_knot')
            ->orderBy('occurred_at')
            ->get();

        return response()->json([
            'sample' => $sample,
            'nodes'  => $nodes,
        ]);
    }
public function storeEvent(Request $req, int $id)
{
    $data = $req->validate([
        'event_type'  => 'required|string|max:255',
        'state'       => 'nullable|string|max:255',
        'occurred_at' => 'required|date',  
        'quipu_cord'  => 'required|integer|min:0',
        'quipu_knot'  => 'required|integer|min:0',
        'quipu_color' => 'nullable|string|max:32',
        'device_id'   => 'nullable|string|max:255',
        'actor_id'    => 'nullable|string|max:255',
        'payload'     => 'nullable|array',
        'attestation' => 'nullable|array',
    ]);
    $sample = \DB::table('lab_samples')->where('id', $id)->first();
    if (!$sample) return response()->json(['message' => 'Sample not found'], 404);
    $payload      = $data['payload'] ?? [];
    $payloadHash  = hash('sha256', json_encode($payload, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES));
    $prevHash     = \DB::table('trace_events')->where('lab_sample_id', $id)->orderByDesc('id')->value('chain_hash') ?? '';
    $chainParts   = $prevHash.'|'.$data['occurred_at'].'|'.$payloadHash.'|'.$data['quipu_cord'].'|'.$data['quipu_knot'];
    $chainHash    = hash('sha256', $chainParts);
    $insert = [
        'lab_sample_id'  => $id,
        'event_type'     => $data['event_type'],
        'state'          => $data['state'] ?? null,
        'occurred_at'    => $data['occurred_at'],
        'quipu_cord'     => $data['quipu_cord'],
        'quipu_knot'     => $data['quipu_knot'],
        'quipu_color'    => $data['quipu_color'] ?? null,
        'device_id'      => $data['device_id'] ?? null,
        'actor_id'       => $data['actor_id'] ?? null,
        'payload_hash'   => $payloadHash,
        'prev_chain_hash'=> $prevHash ?: null,
        'chain_hash'     => $chainHash,
        'payload'        => $payload ? json_encode($payload) : null,
        'attestation'    => isset($data['attestation']) ? json_encode($data['attestation']) : null,
        'created_at'     => now(),
        'updated_at'     => now(),
    ];
    $eventId = \DB::table('trace_events')->insertGetId($insert);
    return response()->json(['id' => $eventId, 'chain_hash' => $chainHash], 201);
}
public function verifyChain(int $id)
{
    $events = \DB::table('trace_events')
        ->where('lab_sample_id', $id)
        ->orderBy('id')->get();
    $prev = '';
    foreach ($events as $e) {
        $payload = $e->payload ? json_decode($e->payload, true) : [];
        $calcPayloadHash = hash('sha256', json_encode($payload, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES));
        $calcChain = hash('sha256', ($prev).'|'.($e->occurred_at).'|'.$calcPayloadHash.'|'.$e->quipu_cord.'|'.$e->quipu_knot);

        if ($e->payload_hash !== $calcPayloadHash || $e->chain_hash !== $calcChain) {
            return response()->json([
                'valid' => false,
                'tampered_event_id' => $e->id
            ], 200);
        }
        $prev = $e->chain_hash;
    }
    return response()->json(['valid' => true, 'count' => $events->count()], 200);
}
    public function showByCode(string $code)
    {
        $sample = DB::table('lab_samples')
            ->select('id', 'code')
            ->where('code', $code)
            ->first();
        if (!$sample) {
            return response()->json(['message' => 'Sample not found'], 404);
        }
        $nodes = DB::table('trace_events')
            ->select([
                'id',
                DB::raw('quipu_cord AS cord'),
                DB::raw('quipu_knot AS knot'),
                DB::raw('COALESCE(state, event_type) AS label'),
                DB::raw("DATE_FORMAT(occurred_at, '%Y-%m-%d %H:%i:%s') AS occurred_at"),
            ])
            ->where('lab_sample_id', $sample->id)
            ->orderBy('quipu_cord')
            ->orderBy('quipu_knot')
            ->orderBy('occurred_at')
            ->get();
        return response()->json([
            'sample' => $sample,
            'nodes'  => $nodes,
        ]);
    }
}
