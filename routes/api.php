<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('/usuario', App\Http\Controllers\UsuarioController::class)->only(['index','store','update', 'show', 'destroy']);