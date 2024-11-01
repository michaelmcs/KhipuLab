<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasUuids;

    protected $table = "cuc_booking";

    protected $fillable = [
        'laboratory',
        'user_lab',
        'reason',
        'booking_date',
        'booking_time_start',
        'booking_time_end'
    ];
    protected $keyType = 'string';

    public function getLaboratory(){
        return $this->belongsTo(Laboratory::class,'laboratory');
    }
    public function getUserLab(){
        return $this->belongsTo(UserLab::class,'user_lab')->with('getCustomer');
    }
}

