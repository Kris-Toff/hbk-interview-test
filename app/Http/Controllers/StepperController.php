<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StepperController extends Controller
{
    public function user()
    {
        return Inertia::render('User');
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }

    public function business()
    {
        return Inertia::render('Business');
    }

    public function account()
    {
        return Inertia::render('Account');
    }

    public function summary()
    {
        return Inertia::render('Summary');
    }

    public function store(Request $request)
    {
        dd($request);
    }
}
