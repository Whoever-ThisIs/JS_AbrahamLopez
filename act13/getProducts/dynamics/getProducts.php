<?php
/***********************************
 * Devuelve todas las coincidencias
 * de un producto que se les pasan
 * por_GET['name']
 ***********************************/
include('config.php');

function getProducts($name)
{
	$con = connect();
	$result = mysqli_query($con,"SELECT product.id, product.name, product.disponibilidad, tipo.name AS tipo FROM product JOIN tipo ON product.tipo=tipo.id WHERE UPPER(product.name) LIKE UPPER('%$name%')");

	$response = [];
	while($row = mysqli_fetch_assoc($result))
	{
		array_push($response, $row);
	}

	return $response;
}

if (isset($_GET['name'])) {
	getProducts($_GET['name']);
	echo json_encode(getProducts($_GET['name']));
}
else
	echo json_encode(1);
