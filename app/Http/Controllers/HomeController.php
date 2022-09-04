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

    public function fetchResult(Request $request){
        $pageTitle = ucwords($request->tagName);
        return view('resultPage', [
            'pageTitle' => $pageTitle,
            'probability' => $request->probability,
            'tagName' => ucwords($request->tagName),
        ]);
    }
}