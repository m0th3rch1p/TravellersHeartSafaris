<?php

namespace App\Http\Controllers;

use App\Models\InstagramLink;
use App\Http\Requests\StoreInstagramLinkRequest;
use App\Http\Requests\UpdateInstagramLinkRequest;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class InstagramLinkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render("Admin/InstagramLinks", [
            'links' => InstagramLink::latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreInstagramLinkRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreInstagramLinkRequest $request)
    {
        InstagramLink::create($request->validated());
        return response()->redirectTo('/admin/links');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\InstagramLink  $instagramLink
     * @return \Illuminate\Http\Response
     */
    public function show(InstagramLink $instagramLink)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\InstagramLink  $instagramLink
     * @return \Illuminate\Http\Response
     */
    public function edit(InstagramLink $instagramLink)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateInstagramLinkRequest  $request
     * @param  \App\Models\InstagramLink  $instagramLink
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateInstagramLinkRequest $request, $id)
    {
        $id = Validator::make(['id' => $id], ['id' => 'numeric|exists:instagram_links,id'])->validated()['id'];

        InstagramLink::where('id', $id)->update($request->validated());
        return response()->redirectTo('/admin/links');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\InstagramLink  $instagramLink
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $id = Validator::make(['id' => $id], ['id' => 'numeric|exists:instagram_links,id'])->validated()['id'];

        InstagramLink::where('id', $id)->delete();
        return response()->redirectTo('/admin/links');
    }
}
