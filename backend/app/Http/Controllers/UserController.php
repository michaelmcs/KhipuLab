<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class UserController extends Controller
{
   
    public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string',
        'email' => 'required|email|unique:users',
        'password' => 'required|min:6|confirmed',
        'role_id' => 'required|exists:roles,id',
    ]);

    $validated['password'] = bcrypt($validated['password']);
    
    $user = User::create($validated);
    return response()->json($user, 201);
}

}
