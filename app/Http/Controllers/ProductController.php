<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Controllers\ProductController;


class ProductController extends Controller
{

    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }
    
    public function store(Request $request)
    {
        $input = $request->all();
        $products = Product::create($input);
        return response()->json($products);
    }

    public function delete($products)
    {
        $deleteProduct = Product::find($products)->delete();
        return response()->json($deleteProduct);
    }
}
