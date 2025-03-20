<?php

use App\Http\Controllers\StepperController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [StepperController::class, 'user']);
Route::get('/contact', [StepperController::class, 'contact']);
Route::get('/business', [StepperController::class, 'business']);
Route::get('/account', [StepperController::class, 'account']);
Route::get('/summary', [StepperController::class, 'summary']);
Route::post('/stepper', [StepperController::class, 'store']);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
