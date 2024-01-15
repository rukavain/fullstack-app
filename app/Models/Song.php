<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use function PHPSTORM_META\map;

class Song extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'artist',
        'album'
    ];
}
