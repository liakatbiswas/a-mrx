<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function page()
    {
        return view('pages.home');
    }

    public function aboutData(Request $request)
    {
        return DB::table('about')->first();
    }

    public function socialData(Request $request)
    {
        return DB::table('social')->first();
    }

}
