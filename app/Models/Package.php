<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;

    protected $fillable = ['category_id', 'title', 'slug', 'description', 'post', 'feature_image', 'days', 'nights'];

    public function category () {
        return $this->belongsTo(Category::class);
    }
}
