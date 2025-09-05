<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuipuNode extends Model
{
    protected $fillable = ['sample_id', 'cord', 'knot', 'label', 'occurred_at'];

    protected $casts = [
        'occurred_at' => 'date',
    ];
}
