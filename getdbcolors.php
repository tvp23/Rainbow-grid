<?php
include "php/dbinfo.php";

$colors = array(array(),array(),array());

$stmt = 'SELECT * From color';
$sth = $con -> prepare($stmt);
$sth-> execute();

while($row = $sth->fetch()){
    array_push($colors[0] ,$row['color_r']);
    array_push($colors[1] ,$row['color_g']);
    array_push($colors[2] ,$row['color_b']);
}

echo json_encode($colors);