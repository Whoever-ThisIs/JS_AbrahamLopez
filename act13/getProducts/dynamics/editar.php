<?php
include('config.php');

function saveProducts()
{
	$con = connect();
	return mysqli_query($con,"UPDATE product SET name = '$_POST[nName]', disponibilidad = '$_POST[nCantidad]' WHERE id = '$_POST[idpro]'");
}

echo json_encode(saveProducts());

?>
