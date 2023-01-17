<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Package;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StorePackageRequest;
use App\Http\Requests\UpdatePackageRequest;
use App\Models\Category;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Packages', [
            'packages' => Package::with(['category' => function ($query) {
                $query->select('id', 'name');
            }])->latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/NewPackage', [
            'categories' => Category::select('id', 'name')->latest()->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePackageRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePackageRequest $request)
    {
        $data = $request->validated();
        $data['slug'] = Str::slug($data['title']);
        $data['post'] = $data['package_post'];
        $data['feature_image'] = Storage::disk('public')->put('package_images', $request->file('feature_image'));
        Package::create($data);

        return response()->redirectTo('/admin/packages');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function show(Package $package)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = Validator::make(['id' => $id], ['id' => 'required|numeric|exists:packages,id'])->validated();
        return Inertia::render('Admin/EditPackage', [
            'categories' => Category::select('id', 'name')->latest()->get(),
            'package' => Package::select('id', 'title', 'description', 'post', 'category_id', 'days', 'nights')->where('id', $data['id'])->first()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePackageRequest  $request
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePackageRequest $request, $id)
    {
        $data = $request->validated();
        $data['id'] = Validator::make(['id' => $id], ['id' => 'required|exists:categories,id'])->validated();

        $data['slug'] = Str::slug($data['title']);
        $package = Package::where('id', $data['id'])->first();
        if($request->hasFile('feature_image')) {
            Storage::disk('public')->delete($package->feature_image);
            $data['feature_image'] = Storage::disk('public')->put('package_images', $request->file('feature_image'));
        } else unset($data['feature_image']);

        $package->update($data);
        return response()->redirectTo('/admin/packages');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Validator::make(['id' => $id], ['id' => 'required|numeric|exists:categories,id'])->validated();

        Package::where('id', $data['id'])->delete();
        return response()->redirectTo('/admin/packages');
    }
}
