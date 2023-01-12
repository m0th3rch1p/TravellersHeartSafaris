<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookTourRequest;
use App\Http\Requests\ContactMessageRequest;
use App\Mail\BookTour;
use App\Mail\ContactMessage;
use App\Models\InstagramLink;
use App\Models\Package;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class MainSiteController extends Controller
{
    public function index () {
        return Inertia::render('Index', [
            'packages' => Package::select('title', 'slug', 'description', 'feature_image', 'days', 'nights', 'created_at')->where('category_id', '=', 1)->latest()->get(),
            'excursions' => Package::select('title', 'slug', 'description', 'feature_image', 'days', 'nights', 'created_at')->where('category_id', '=', 2)->latest()->get(),
            'links' => InstagramLink::select('link')->get()
        ]);
    }

    public function show ($slug) {
        $data = Validator::make(['slug' => $slug], ['slug' => 'required|string|exists:packages,slug'])->validated();

        $package = Package::select('title', 'slug', 'description', 'post', 'feature_image', 'days', 'nights', 'category_id', 'created_at')->where(['slug' => $data['slug']])->with(['category' => function ($query) {
            $query->select('id', 'name');
        }])->first();

        $related = Package::select('title', 'slug', 'description', 'feature_image', 'days', 'nights', 'category_id', 'created_at')->where('category_id', $package->category_id)->with(['category' => function ($query) {
            $query->select('id', 'name');
        }])->get();

        return Inertia::render('Package', [
            'tourPackage' => $package,
            'relatedPackages' => $related    
        ]);
    }

    public function contact (ContactMessageRequest $request) {
        $data = $request->validated();
        Mail::to("info@travellersheartsafaris.com")->send(new ContactMessage($data['first_name'], $data['last_name'], $data['email'], $data['subject'], $data['message']));
    }

    public function bookTour (BookTourRequest $request) {
        $data = $request->validated();
        Mail::to("info@travellersheartsafaris.com")->send(new BookTour($data["name"], $data["email"], $data["phoneNumber"], $data["date"], $data["noOfPeople"]));
    }
}
