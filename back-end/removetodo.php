<?php
header("Access-Control-Allow-Origin: *");
$removeListJson = file_get_contents('db.json');

$removeList = json_decode($removeListJson, true);

unset($removeList[$_POST['indiceLista']]);
// questa è una funzione che serve a rimuovere l'oggetto in base all' indice passato dal click (funzione js 'indicelista')

$indiceLista = array_values($removeList);
// funzione obbligatoria che serve ad allineare gli indici dei due array front end e back end

$indiceListaJson = json_encode($indiceLista);

file_put_contents('db.json',$indiceListaJson );

echo json_encode([
    'messaggio' => 'ok',
    'code' => 200
]);