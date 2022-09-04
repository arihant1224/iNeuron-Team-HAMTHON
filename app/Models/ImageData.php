<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageData extends Model
{
    use HasFactory;

    protected $fillable = [
        'image_url',
        'name',
        'video_link',
        'nutritional_value',
        'ingredients',
        'recipe',
    ];
}
