<?php
// header("Access-Control-Allow-Origin: http://127.0.0.1:5173");
// header("Access-Control-Allow-Headers: X-Requested-With");
// header("Access-Control-Allow-Origin: *");
$myList = file_get_contents(__DIR__ . '/db.json');

header('Content-Type: application/json');
echo $myList;
