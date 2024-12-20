<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\DosenCourse;
use App\Models\Consultation;
use Illuminate\Http\Request;

class AjukanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function getDosenByCourse($courseId)
    {
        // Ambil dosen berdasarkan course_id
        $dosencourses = DosenCourse::where('course_id', $courseId)->with('lecturer')->get();

        // Kembalikan sebagai JSON
        return response()->json($dosencourses);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $courses = Course::all(); // Mengambil semua data dari tabel courses
        $dosencourses = DosenCourse::all();
        return view('pages.pengajuan.create', compact('courses', 'dosencourses'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "course_id" => require
            "dosen_id" => "2",
            "scheduled_time" => "2024-11-29"
        ]);
        Consultation::create($request->all());
        dd($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
