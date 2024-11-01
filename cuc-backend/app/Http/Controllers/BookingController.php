<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;


class BookingController extends Controller
{
    //
    public function index()
    {
        return response()->json(Booking::all(),200);
    }

    public function getByDate(Request $request)
    {
        $date = date('Y-m-d');
        if($request->date != ''){
            $date = $request->date;
        }
        return response()->json(Booking::where('booking_date',$date)->with(['getLaboratory','getUserLab'])->get(),200);
    }

    public function store(Request $request){
        return response()->json(Booking::create($request->all()),201);
    }

    public function show(Booking $booking){
        return response()->json($booking,200);
    }

    public function update(Booking $booking,Request $request){
        $booking->update($request->all());
        return response()->json($booking,200);
    }

    public function delete(Booking $booking){
        $booking->delete();
        return response()->json(['Deleted ID:'.$booking->id],200);
    }
}
