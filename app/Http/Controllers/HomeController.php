<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function homepage(){
        return view('homepage', [
            'pageTitle' => 'Homepage',
        ]);
    }

    public function uploadPicture(Request $request){
        return $request->picture;
    }
}
