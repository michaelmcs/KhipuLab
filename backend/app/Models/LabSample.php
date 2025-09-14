<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LabSample extends Model
{
    use HasFactory;
    protected $fillable = ['code', 'specimen_type', 'meta'];
    public function traceEvents()
    {
        return $this->hasMany(TraceEvent::class);
    }
}
