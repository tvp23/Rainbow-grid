<?php

include "php/dbinfo.php";

for($i=0;$i<950;$i++){
    $red= rand(0,255);
    $green= $red;
    $blue= $red;

    $stmt = "INSERT INTO color (color_r, color_g, color_b) VALUES ('$red', '$green', '$blue')";
    $sth = $con -> prepare($stmt);
    $sth-> execute();
}