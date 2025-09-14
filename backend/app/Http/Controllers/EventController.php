<?php
namespace App\Http\Controllers;
use App\Models\LabSample;
use App\Models\TraceEvent;
use Illuminate\Http\Request;
class EventController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'lab_sample_id' => 'required|exists:lab_samples,id',
            'event_type' => 'required|string',
            'event_data' => 'required|string',
        ]);
        $eventData = json_encode($request->event_data);
        $payloadHash = hash('sha256', $eventData);
        $previousEvent = TraceEvent::where('lab_sample_id', $request->lab_sample_id)
                                ->latest('timestamp')
                                ->first();
        $chainHash = $previousEvent ? hash('sha256', $previousEvent->chain_hash . $payloadHash) : null;
        $event = TraceEvent::create([
            'id' => (string) \Str::uuid(),
            'lab_sample_id' => $request->lab_sample_id,
            'event_type' => $request->event_type,
            'event_data' => $eventData,
            'timestamp' => now(),
            'payload_hash' => $payloadHash,
            'chain_hash' => $chainHash,
        ]);
        return response()->json(['message' => 'Event created successfully', 'data' => $event], 201);
    }
      public function verifyIntegrity($sampleId)
    {
        $events = TraceEvent::where('lab_sample_id', $sampleId)
                            ->orderBy('timestamp')
                            ->get();

        $previousChainHash = null;
        foreach ($events as $event) {
            $calculatedHash = hash('sha256', $event->payload_hash);
            if ($previousChainHash && $event->chain_hash !== hash('sha256', $previousChainHash . $calculatedHash)) {
                return response()->json(['message' => 'Integrity check failed at event index ' . $event->id], 400);
            }
            $previousChainHash = $event->chain_hash;
        }
        return response()->json(['message' => 'Integrity verified successfully'], 200);
    }
}
