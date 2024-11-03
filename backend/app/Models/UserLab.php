<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class UserLab extends Model
{
    use HasUuids;

    protected $table = "cuc_user_lab";

    protected $fillable = [
        'customer',
        'teacher',
        'type'
    ];
    protected $keyType = 'string';

    public function getCustomer(){
        return $this->belongsTo(Customer::class,'customer');
    }
}
