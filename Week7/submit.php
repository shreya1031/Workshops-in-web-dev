<?php

print_r($_POST);

$connect = mysqli_connect(
    'localhost', // Host
    'root', // Username
    'root' // Password
);

mysqli_select_db($connect, 'startstop');

$query = 'INSERT INTO results (
        stop,
        start, 
        `continue`
    ) VALUES (
        "'.$_POST['stop'].'",
        "'.$_POST['start'].'",
        "'.$_POST['continue'].'"
    )';

//echo $query;

mysqli_query($connect, $query);

header('Loaction : thankyou.html');
exit();