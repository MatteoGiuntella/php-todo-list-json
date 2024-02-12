<?php
header("Access-Control-Allow-Origin: *");
$fixListJson = file_get_contents('db.json');

$fixList = json_decode($fixListJson, true);

$newList =[
    'lista' => $_POST['lista'],
    'fatto' => false
];


$fixList[$_POST['indiceLista']] = $newList;

$finalFixList = array_values($fixList);

$fixListJson = json_encode($finalFixList);

file_put_contents('db.json',$fixListJson );

echo json_encode([
    'messaggio' => 'ok',
    'code' => 200
]);