<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TraceEvent extends Model
{
    use HasFactory;

    protected $fillable = ['lab_sample_id', 'event_type', 'state', 'occurred_at', 'quipu_cord', 'quipu_knot', 'quipu_color', 'device_id', 'actor_id', 'payload_hash', 'prev_chain_hash', 'chain_hash', 'payload', 'attestation', 'is_verified'];

    public function labSample()
    {
        return $this->belongsTo(LabSample::class);
    }

    public static function boot()
    {
        parent::boot();
        static::saving(function ($model) {
        });
    }
}
