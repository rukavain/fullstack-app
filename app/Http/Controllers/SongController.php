<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Song;

class SongController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Song::all();
        // return Song::orderBy('created_at', 'DESC');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        request()->validate([
            'title' => 'required|min:3|max:255',
            'artist' => 'required|min:3|max:255',
            'album' => 'required|min:3|max:255',
        ]);

        Song::create($request->all());

        return response()->json(['message' => 'successfully added'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Song $song)
    {
        return response()->json($song);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Song $song)
    {
        request()->validate([
            'title' => 'required|min:3|max:255',
            'artist' => 'required|min:3|max:255',
            'album' => 'required|min:3|max:255',
        ]);

        $song->update($request->all());

        return response()->json(['message', 'successfully updated song.']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Song $song)
    {
        $song->delete();

        return response()->json(['message', 'successfully deleted song.']);
    }
}
