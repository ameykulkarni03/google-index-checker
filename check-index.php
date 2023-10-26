<?php

if (isset($_GET["url"])) {
  $url = $_GET["url"];
  
  $searchUrl = "https://www.google.com/search?q=site:" . urlencode($url);

  $curl = curl_init($searchUrl);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  $response = curl_exec($curl);
  curl_close($curl);

  if (strpos($response, 'did not match any documents') !== false) {
    echo "Not Indexed";
  } else {
    echo "Indexed";
  }

} else {
  echo "Please provide a URL."; 
}

?>