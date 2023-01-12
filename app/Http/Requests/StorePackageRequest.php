<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePackageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'category_id' => 'required|numeric|exists:categories,id',
            'title' => 'required|string|unique:packages,title',
            'description' => 'required|string',
            'package_post' => 'required|string',
            'feature_image' => 'required|image|mimes:png,jpg,webp,gif,avif,jpeg',
            'days' => 'required|numeric',
            'nights' => 'required|numeric'
        ];
    }
}
