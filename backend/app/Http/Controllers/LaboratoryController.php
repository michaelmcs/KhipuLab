<?php

namespace App\Http\Controllers;

use App\Models\Laboratory;
use Illuminate\Http\Request;

class LaboratoryController extends Controller
{
    public function index()
    {
        return response()->json(Laboratory::all(),200);
    }

    public function store(Request $request){
       return response()->json(Laboratory::create($request->all()),201);
    }

    public function show(Laboratory $laboratory){
        return response()->json($laboratory,200);
    }

    public function update(Laboratory $laboratory,Request $request){
        $laboratory->update($request->all());
        return response()->json($laboratory,200);
    }

    public function delete(Laboratory $laboratory){
        $laboratory->delete();
        return response()->json(['Deleted ID:'.$laboratory->id],200);
    }
}
