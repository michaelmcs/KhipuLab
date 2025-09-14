<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LabSampleController;
use App\Http\Controllers\TraceEventController;
use App\Http\Controllers\QuipuController;

// Usuario autenticado
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Rutas Quipu
Route::get('/quipu/by-code/{code}', [QuipuController::class, 'showByCode']);
Route::post('/quipu/{id}/events', [QuipuController::class, 'storeEvent']);
Route::get('/quipu/{id}/verify', [QuipuController::class, 'verifyChain']);
Route::get('/quipu/{id}', [QuipuController::class, 'show']);

// Laboratorios
Route::post('laboratory',[\App\Http\Controllers\LaboratoryController::class,'store']);
Route::get ('laboratory/{laboratory}',[\App\Http\Controllers\LaboratoryController::class,'show']);
Route::get ('laboratory',[\App\Http\Controllers\LaboratoryController::class,'index']);
Route::put ('laboratory/{laboratory}',[\App\Http\Controllers\LaboratoryController::class,'update']);
Route::delete('laboratory/{laboratory}',[\App\Http\Controllers\LaboratoryController::class,'delete']);

// Clientes
Route::post('customer',[\App\Http\Controllers\CustomerController::class,'store']);
Route::get ('customer/{customer}',[\App\Http\Controllers\CustomerController::class,'show']);
Route::get ('customer',[\App\Http\Controllers\CustomerController::class,'index']);
Route::put ('customer/{customer}',[\App\Http\Controllers\CustomerController::class,'update']);
Route::delete('customer/{customer}',[\App\Http\Controllers\CustomerController::class,'delete']);

// Usuarios laboratorio
Route::post('userlab',[\App\Http\Controllers\UserLabController::class,'store']);
Route::get ('userlab/{userLab}',[\App\Http\Controllers\UserLabController::class,'show']);
Route::get ('userlab',[\App\Http\Controllers\UserLabController::class,'index']);
Route::put ('userlab/{userLab}',[\App\Http\Controllers\UserLabController::class,'update']);
Route::delete('userlab/{userLab}',[\App\Http\Controllers\UserLabController::class,'delete']);

// Reservas
Route::post('booking',[\App\Http\Controllers\BookingController::class,'store']);
Route::get ('booking/{booking}',[\App\Http\Controllers\BookingController::class,'show']);
Route::get ('booking',[\App\Http\Controllers\BookingController::class,'index']);
Route::get ('bookingByDate',[\App\Http\Controllers\BookingController::class,'getByDate']);
Route::put ('booking/{booking}',[\App\Http\Controllers\BookingController::class,'update']);
Route::delete('booking/{booking}',[\App\Http\Controllers\BookingController::class,'delete']);

// Eventos
Route::resource('trace_events', TraceEventController::class);
Route::get('trace_events/{eventId}/verify', [TraceEventController::class, 'verifyIntegrity']);
Route::get('trace-events/sample/{sampleId}', [TraceEventController::class, 'getBySample']);

// Lab Samples
Route::resource('lab_samples', LabSampleController::class);
Route::post('lab_samples/{sampleId}/trace_events', [TraceEventController::class, 'store']);
Route::get('lab_samples/{sampleId}/trace_events', [TraceEventController::class, 'getBySample']);
Route::get('/lab_samples', [LabSampleController::class, 'index']);
Route::post('/lab_samples', [LabSampleController::class, 'store']);
Route::put('/lab_samples/{id}', [LabSampleController::class, 'update']);
Route::delete('/lab_samples/{id}', [LabSampleController::class, 'destroy']);
