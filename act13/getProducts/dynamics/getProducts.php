<?php
/***********************************
 * Devuelve todas las coincidencias
 * de un producto que se les pasan
 * por_GET['name']
 ***********************************/
include('config.php');

if (isset($_GET['name'])) {
	$name = $_GET['name'];
}
if (isset($_GET['tipo'])) {
	$filtro = $_GET['tipo'];
}
if (isset($_GET['name'])&&isset($_GET['tipo'])) {
	$preresult = "SELECT product.id, product.name, product.disponibilidad, tipo.name AS tipo FROM product JOIN tipo ON product.tipo=tipo.id WHERE UPPER(product.name) LIKE UPPER('%$name%') AND tipo.id LIKE $filtro";
}
else if (isset($_GET['name'])&&!isset($_GET['tipo'])) {
	$preresult = "SELECT product.id, product.name, product.disponibilidad, tipo.name AS tipo FROM product JOIN tipo ON product.tipo=tipo.id WHERE UPPER(product.name) LIKE UPPER('%$name%')";
}
else if (!isset($_GET['name'])&&isset($_GET['tipo'])) {
	$preresult = "SELECT product.id, product.name, product.disponibilidad, tipo.name AS tipo FROM product JOIN tipo ON product.tipo=tipo.id WHERE tipo.id LIKE $filtro";
}
else {
	$preresult = "SELECT product.id, product.name, product.disponibilidad, tipo.name AS tipo FROM product JOIN tipo ON product.tipo=tipo.id";
}

function getProducts($preresult)
{
	$con = connect();

	$result = mysqli_query($con,$preresult);

	$response = [];
	while($row = mysqli_fetch_assoc($result))
	{
		array_push($response, $row);
	}

	return $response;
}
echo json_encode(getProducts($preresult));
