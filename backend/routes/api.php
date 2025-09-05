<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\QuipuController;




/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// routes/api.php
Route::get('/quipu/by-code/{code}', [QuipuController::class, 'showByCode']);
Route::post('/quipu/{id}/events', [QuipuController::class, 'storeEvent']);   // NUEVO
Route::get('/quipu/{id}/verify', [QuipuController::class, 'verifyChain']); 

Route::get('/quipu/{id}', [QuipuController::class, 'show']);
Route::post('laboratory',[\App\Http\Controllers\LaboratoryController::class,'store']);
Route::get ('laboratory/{laboratory}',[\App\Http\Controllers\LaboratoryController::class,'show']);
Route::get ('laboratory',[\App\Http\Controllers\LaboratoryController::class,'index']);
Route::put ('laboratory/{laboratory}',[\App\Http\Controllers\LaboratoryController::class,'update']);
Route::delete('laboratory/{laboratory}',[\App\Http\Controllers\LaboratoryController::class,'delete']);

Route::post('customer',[\App\Http\Controllers\CustomerController::class,'store']);
Route::get ('customer/{customer}',[\App\Http\Controllers\CustomerController::class,'show']);
Route::get ('customer',[\App\Http\Controllers\CustomerController::class,'index']);
Route::put ('customer/{customer}',[\App\Http\Controllers\CustomerController::class,'update']);
Route::delete('customer/{customer}',[\App\Http\Controllers\CustomerController::class,'delete']);

Route::post('userlab',[\App\Http\Controllers\UserLabController::class,'store']);
Route::get ('userlab/{userLab}',[\App\Http\Controllers\UserLabController::class,'show']);
Route::get ('userlab',[\App\Http\Controllers\UserLabController::class,'index']);
Route::put ('userlab/{userLab}',[\App\Http\Controllers\UserLabController::class,'update']);
Route::delete('userlab/{userLab}',[\App\Http\Controllers\UserLabController::class,'delete']);

Route::post('booking',[\App\Http\Controllers\BookingController::class,'store']);
Route::get ('booking/{booking}',[\App\Http\Controllers\BookingController::class,'show']);
Route::get ('booking',[\App\Http\Controllers\BookingController::class,'index']);
Route::get ('bookingByDate',[\App\Http\Controllers\BookingController::class,'getByDate']);
Route::put ('booking/{booking}',[\App\Http\Controllers\BookingController::class,'update']);
Route::delete('booking/{booking}',[\App\Http\Controllers\BookingController::class,'delete']);

