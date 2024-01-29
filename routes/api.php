<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
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
Route::get('/students', [App\Http\Controllers\StudentController::class, 'index']);
// Route::post('/students', [App\Http\Controllers\ApiController::class, 'create']);
// Route::post('/students', [App\Http\Controllers\StudentController::class, 'store']);
// Route::post('/students', [StudentController::class, 'store']);

// Route::post('/student', [StudentController::class, 'create']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
return $request->user();
});

Route::post('/student','ApiController@create');