<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\InstagramLinkController;
use App\Http\Controllers\MainSiteController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [MainSiteController::class, 'index']);
Route::get('/package/{slug}', [MainSiteController::class, 'show']);
Route::post('/contact', [MainSiteController::class, 'contact']);
Route::post('/book', [MainSiteController::class, 'bookTour']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/admin/categories', [CategoryController::class, 'index']);
    Route::post('/admin/categories', [CategoryController::class, 'store']);
    Route::put('/admin/categories/{id}', [CategoryController::class, 'update']);
    Route::delete('/admin/categories/{id}', [CategoryController::class, 'destroy']);

    Route::get('/admin/packages', [PackageController::class, 'index']);
    Route::get('/admin/packages/create', [PackageController::class, 'create']);
    Route::get('/admin/packages/edit/{id}', [PackageController::class, 'edit']);
    Route::post('/admin/packages', [PackageController::class, 'store']);
    Route::put('/admin/packages/{id}', [PackageController::class, 'update']);
    Route::delete('/admin/packages/{id}', [PackageController::class, 'destroy']);

    Route::get('/admin/links', [InstagramLinkController::class, "index"]);
    Route::post('/admin/links', [InstagramLinkController::class, "store"]);
    Route::put('/admin/links/{id}', [InstagramLinkController::class, "update"]);
    Route::delete('/admin/links/{id}', [InstagramLinkController::class, "destroy"]);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
