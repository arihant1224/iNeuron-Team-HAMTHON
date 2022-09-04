<?php

namespace App\Http\Controllers;

use App\Models\ImageData;
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
        $image_arr = ImageData::where('name', $request->tagName)->get();
        return view('resultPage', [
            'pageTitle' => $pageTitle,
            'probability' => $request->probability,
            'tagName' => ucwords($request->tagName),
            'imageArr' => $image_arr,
            'imageTag' => $request->tagName,
        ]);
    }
}