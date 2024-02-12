<?php
header("Access-Control-Allow-Origin: *");
$allListJson = file_get_contents('db.json');
// questo passaggio mi serve per mantenere l'array iniziale per fare in modo che non perdo i dati già inseriti(importante)

$allList = json_decode($allListJson, true);
// traformo il nuovo offetto json con il decode in dìstringa facendolo diventare un array, il true mi serve per farlo diventare array associativo se metto false rimane oggetto normale(importante)

$newList = [
    'lista' => $_POST['lista'],
    'fatto' => false
];

$allList[] = $newList;

// creo e aggiungo il nuovo oggetto da inserire nell'array con il push

$newListJson = json_encode($allList);
// ritrasformo il nuovo array in un json in modo da poterlo inserire direttamente nel mio array json

file_put_contents('db.json', $newListJson);
// ora lo pusho nel json, il primo argomento è dove voglio metterlo il secondo è cosa voglio scrivere

echo json_encode([
    'messaggio' => 'ok',
    'code' => 200
]);
// se la procedura è andata a buon fine invio tramite echo un messaggio ok con codice 200(codice buono.....codice 400 errore)