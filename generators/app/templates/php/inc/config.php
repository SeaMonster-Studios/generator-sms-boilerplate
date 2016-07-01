<?php

$some_relative_path = '{ your url path here }'; // change { your url path here }
$server_url = $_SERVER["SERVER_NAME"];
$url = $server_url.''. $some_relative_path. '/';

define("BASE_URL", "http://$url");