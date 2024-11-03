<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserLab;
use Illuminate\Http\Request;


class UserLabController extends Controller
{
    //


    public function index()
    {
        return response()->json(UserLab::all(),200);
    }

    public function store(Request $request){
        return response()->json(UserLab::create($request->all()),201);
    }

    public function show(UserLab $userLab){
        return response()->json($userLab,200);
    }

    public function update(UserLab $userLab,Request $request){
        $userLab->update($request->all());
        return response()->json($userLab,200);
    }

    public function delete(UserLab $userLab){
        $userLab->delete();
        return response (['Deleted ID:'.$userLab->id],200);
    }
}
