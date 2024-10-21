<?php 

    $user="FranklinInversores";
    $contra="franklininversores2024";
    $dsn="sqlsrv:Server=DESKTOP-IL5734C; Database=DW_FranklinInversores";

    try{
        $conn = new PDO($dsn, $user, $contra);
        
        if ($conn) {
            echo"Conectado Correctamente";
        }
    }catch(PDOExeption $e){
        echo $e->getMessage();
    }

