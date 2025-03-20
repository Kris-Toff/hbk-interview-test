<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Business;
use App\Models\User;

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
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'birthday' => 'required',
            'gender' => 'required',
            'email' => 'required|unique:users,email',
            'phone_number' => 'required',
            'username' => 'required',
            'password' => 'required|min:8',
            'name' => 'required',
            'address' => 'required',
            'status' => 'required',
            'registration_date' => 'required',
            'expiry_date' => 'required',
            'accreditation_level' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect('/summary')
                ->withErrors($validator);
        }

        $validated = $validator->validated();

        $user_validated = $validator->safe()->only([
            'first_name',
            'last_name',
            'email',
            'password',
            'phone_number',
            'birthday',
            'gender',
            'username'
        ]);

        $business_validated = $validator->safe()->only([
            'name',
            'address',
            'status',
            'is_premium_company',
            'accreditation_level',
            'registration_date',
            'expiry_date'
        ]);

        User::insert($user_validated);
        Business::insert($business_validated);

        return redirect('/')->with('message', 'Successfully saved data.');
    }
}
