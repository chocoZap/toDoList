<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// example
// 一覧取得
Route::get('/tasks', 'App\Http\Controllers\TaskController@index');
// 登録
Route::post('/tasks', 'App\Http\Controllers\TaskController@store');
// 詳細取得
Route::get('/tasks/{task}', 'App\Http\Controllers\TaskController@show');
// 編集
Route::put('/tasks/{task}', 'App\Http\Controllers\TaskController@update');
// 削除
Route::delete('/tasks/{task}', 'App\Http\Controllers\TaskController@destroy');
