<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasUuids;

    protected $table = "cuc_customer";

    protected $fillable = [
        'name',
        'type'
    ];
    protected $keyType = 'string';

    public function userLab(){
        return $this->hasOne(UserLab::class,'customer','id');
    }
}
