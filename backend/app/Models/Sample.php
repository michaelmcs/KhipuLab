<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sample extends Model
{
    protected $fillable = ['code'];

    public function nodes(): HasMany
    {
        return $this->hasMany(QuipuNode::class, 'sample_id');
    }
}
