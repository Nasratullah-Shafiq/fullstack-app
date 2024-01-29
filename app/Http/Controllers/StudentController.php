<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::all();
        return response()->json($students);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'name' => 'required|string|max:191',
    //         'course' => 'required|string|max:191',
    //         'email' => 'required|email|max:191',
    //         'phone' => 'required|digist:10',

    //     ]);
    //     if($validator->fails()){
    //         return response()->json([
    //             'status' => 422,
    //             'errors' => $validator->messages()
    //         ],422);
    //     }else{
    //         $student = Student::create([
    //             'name' => $request->name,
    //             'course' => $request->course,
    //             'email' => $request->email,
    //             'phone' => $request->phone
    //         ]);
    //         if($student){
    //             return resonse()->json([
    //                 'status' => 200,'message' => "Student created successfully";
    //             ],200);
    //         }else{
    //             return response()->json([
    //                 'status' => 500,
    //                 'message' => "Something went wrong";
    //             ],500);
    //         }
    //     }
    // }
    public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:191',
        'course' => 'required|string|max:191',
        'email' => 'required|email|max:191',
        'phone' => 'required|digits:10',
    ]);

    if($validator->fails()){
        return response()->json([
            'status' => 422,
            'errors' => $validator->messages()
        ],422);
    }else{
        $students = Student::create([
            'name' => $request->name,
            'course' => $request->course,
            'email' => $request->email,
            'phone' => $request->phone
        ]);
        if($students){
            return response()->json([
                'status' => 200,
                'message' => "Student created successfully"
            ],200);
        }else{
            return response()->json([
                'status' => 500,
                'message' => "Something went wrong"
            ],500);
        }
    }
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
