<?php
namespace App\Http\Controllers;
use App\Models\LabSample;
use Illuminate\Http\Request;

class LabSampleController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'code' => 'required|unique:lab_samples',  
            'specimen_type' => 'nullable|string',
            'meta' => 'nullable|json',
        ]);
        $labSample = LabSample::create($validated);
        return response()->json($labSample, 201);  
    }
    public function index()
    {
        $labSamples = LabSample::all();
        return response()->json($labSamples);
    }
    public function show($id)
    {
        try {
            $labSample = LabSample::with('traceEvents')->findOrFail($id);

            return response()->json($labSample);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Muestra no encontrada'], 404);
        }
    }
    public function update(Request $request, $id)
    {
        try {
            $labSample = LabSample::findOrFail($id);

            $validated = $request->validate([
                'code' => 'required|unique:lab_samples,code,' . $id,
                'specimen_type' => 'nullable|string',
                'meta' => 'nullable|json',
            ]);

            $labSample->update($validated);
            return response()->json($labSample);
        } catch (\Exception $e) {
            // En caso de error
            return response()->json(['error' => 'Muestra no encontrada o error al actualizar'], 404);
        }
    }
    public function destroy($id)
    {
        try {
            $labSample = LabSample::findOrFail($id);
            $labSample->delete();
            return response()->json(['message' => 'Muestra eliminada exitosamente']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Muestra no encontrada o error al eliminar'], 404);
        }
    }
}
