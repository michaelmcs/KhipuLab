<?php
namespace App\Http\Controllers;
use App\Models\LabSample;
use App\Models\TraceEvent;
use Illuminate\Http\Request;
class TraceEventController extends Controller
{
    public function store(Request $request, $sampleId)
    {
        $validated = $request->validate([
            'event_type' => 'required|string',
            'state' => 'nullable|string',
            'occurred_at' => 'required|date',
            'quipu_cord' => 'required|integer',
            'quipu_knot' => 'required|integer',
            'payload_hash' => 'required|string',
            'chain_hash' => 'nullable|string',
            'payload' => 'nullable', // <-- aceptar objeto JSON
        ]);
        $labSample = LabSample::findOrFail($sampleId);
        $event = new TraceEvent();
        $event->event_type = $validated['event_type'];
        $event->state = $validated['state'] ?? 'pending';
        $event->occurred_at = $validated['occurred_at'];
        $event->quipu_cord = $validated['quipu_cord'];
        $event->quipu_knot = $validated['quipu_knot'];
        $event->payload_hash = $validated['payload_hash'];
        $event->chain_hash = $validated['chain_hash'] ?? '';
        $event->payload = is_string($validated['payload']) ? $validated['payload'] : json_encode($validated['payload'] ?? []);
        $event->lab_sample_id = $labSample->id;
        $event->save();

        $this->recalculateHashes($event);

        return response()->json($event, 201);
    }
    public function verifyIntegrity($eventId)
    {
        $event = TraceEvent::findOrFail($eventId);

        $payloadData = json_decode($event->payload, true) ?? [];
        $payloadHash = hash('sha256', json_encode($payloadData));

        if ($event->payload_hash !== $payloadHash) {
            return response()->json(['status' => 'integrity_invalid', 'event_id' => $eventId], 400);
        }

        return response()->json(['status' => 'integrity_valid', 'event_id' => $eventId], 200);
    }

    private function recalculateHashes(TraceEvent $event)
    {
        $payloadData = json_decode($event->payload, true) ?? [];
        $payloadHash = hash('sha256', json_encode($payloadData));
        $event->payload_hash = $payloadHash;

        $previousEvent = TraceEvent::where('lab_sample_id', $event->lab_sample_id)
                                   ->orderBy('occurred_at', 'desc')
                                   ->first();

        if ($previousEvent && $previousEvent->id !== $event->id) {
            $event->chain_hash = hash('sha256', $previousEvent->chain_hash . $event->payload_hash . $event->occurred_at);
        } else {
            $event->chain_hash = $payloadHash;
        }

        $event->save();
    }
    public function getBySample($sampleId)
    {
        $events = TraceEvent::where('lab_sample_id', $sampleId)
                            ->orderBy('occurred_at', 'asc')
                            ->get();
        return response()->json($events);
    }
}
