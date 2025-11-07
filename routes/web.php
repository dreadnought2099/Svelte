<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Admin/Home', [
        'message' => 'Hello from Laravel + Svelte + Inertia!',
    ]);
});
