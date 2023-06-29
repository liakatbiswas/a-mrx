<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ResumeController extends Controller
{
    public function page()
    {
        return view('pages.resume');
    }

    public function languageData(Request $request)
    {
        return DB::table('language')->get();
    }

    public function skillsData(Request $request)
    {
        return DB::table('skill')->get();
    }

    public function educationData()
    {
        return DB::table('education')->get();
    }
    public function experiencesData()
    {
        return DB::table('experiance')->get();
    }


}
