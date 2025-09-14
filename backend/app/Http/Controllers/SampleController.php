<?php
namespace App\Http\Controllers;
use App\Models\LabSample;
use Illuminate\Http\Request;

class SampleController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'sample_type' => 'required|string|max:255',
            'identifier' => 'required|string|max:255|unique:lab_samples',
            'date_received' => 'nullable|date'
        ]);

        $sample = LabSample::create([
            'id' => (string) \Str::uuid(),
            'sample_type' => $request->sample_type,
            'identifier' => $request->identifier,
            'date_received' => $request->date_received,
        ]);

        return response()->json(['message' => 'Sample created successfully', 'data' => $sample], 201);
    }
    public function show($id)
    {
        $sample = LabSample::find($id);

        if (!$sample) {
            return response()->json(['message' => 'Sample not found'], 404);
        }

        return response()->json(['data' => $sample], 200);
    }
}
