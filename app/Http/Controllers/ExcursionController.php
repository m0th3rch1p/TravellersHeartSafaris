<?php

namespace App\Http\Controllers;

use App\Models\Excursion;
use App\Http\Requests\StoreExcursionRequest;
use App\Http\Requests\UpdateExcursionRequest;

class ExcursionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreExcursionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreExcursionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Excursion  $excursion
     * @return \Illuminate\Http\Response
     */
    public function show(Excursion $excursion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Excursion  $excursion
     * @return \Illuminate\Http\Response
     */
    public function edit(Excursion $excursion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateExcursionRequest  $request
     * @param  \App\Models\Excursion  $excursion
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateExcursionRequest $request, Excursion $excursion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Excursion  $excursion
     * @return \Illuminate\Http\Response
     */
    public function destroy(Excursion $excursion)
    {
        //
    }
}
