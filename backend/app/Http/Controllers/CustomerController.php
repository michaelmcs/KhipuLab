<?php

namespace App\Http\Controllers;


use App\Models\Customer;
use App\Models\UserLab;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
{


    public function index()
    {
        return response()->json(Customer::with(['userLab'])->get(),200);
    }

    public function store(Request $request){
        $customer = null;
        DB::transaction(function() use ($request,$customer) {
            $customer = Customer::create($request->all());
            UserLab::create([
                'type' => 'customer',
                'customer' => $customer->id
            ]);
        });
        return response()->json($customer,201);
    }

    public function show(Customer $customer){

        return response()->json($customer,200);
    }

    public function update(Customer $customer,Request $request){
        $customer->update($request->all());
        return response()->json($customer,200);
    }

    public function delete(Customer $customer){
        $customer->userLab->delete();
        $customer->delete();
        return response()->json(['Deleted ID:'.$customer->id],200);
    }
}
