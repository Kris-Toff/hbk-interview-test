<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StepperController extends Controller
{
    public function index()
    {
        return Inertia::render('Index');
    }
}
