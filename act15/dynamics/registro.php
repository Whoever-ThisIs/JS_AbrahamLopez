<?php
echo '<!DOCTYPE html>
      <html lang="es" dir="ltr">
        <head>
          <meta charset="utf-8">
          <title>Execute Order Pase Reglamentado</title>
        </head>';
  include('bd.php');
  $conexion = connectDB2("pase");
  if(!$conexion) {
    echo mysqli_connect_error()."<br>";
    echo mysqli_connect_errno()."<br>";
    exit();
  }
  else {
    if(isset($_POST['inicio'])){
      if(isset($_POST['cuenta']) && $_POST['cuenta'] != "" && preg_match("/^\d{9}/", $_POST['cuenta'])){
        $cuenta = $_POST['cuenta'];
        $consulta = "SELECT no_cuenta FROM usuario WHERE no_cuenta=".$cuenta;
        $respuesta = mysqli_query($conexion, $consulta);
        if(!$row = mysqli_fetch_array($respuesta)){
          echo "<form action='../dynamics/calificaciones.php' method='post'>
                  <fieldset>
                    <legend>Registráte</legend>
                    <label for='nombre'>Nombre(s): </label>
                    <input type='text' name='nombre' required> <br><br>
                    <label for='apePat'>Apellido paterno: </label>
                    <input type='text' name='apePat' required> <br><br>
                    <label for='apeMat'>Apellido materno: </label>
                    <input type='text' name='apeMat' required> <br><br>
                    <label for='area'>Área:</label>
              			<select name='area'>
              				<option value='1'>Área I. Ciencias Físico-Matemáticas y las Ingenierías</option>
              				<option value='2'>Área II. Ciencias Biológicas, Químicas y de la Salud</option>
              				<option value='3'>Área III. Ciencias Sociales</option>
              				<option value='4'>Área IV. Humanidades y las Artes</option>
              			</select><br><br>
                    <label for='carrera'>Carrera: </label>
                    <select name='carrera'";
          $consulta = "SELECT clave, nombre FROM carrera";
          $respuesta = mysqli_query($conexion, $consulta);
          while ($row = mysqli_fetch_array($respuesta)) {
            echo "    <option value='".$row[0]."'>".utf8_encode($row[1])."</option>";
          }
          echo "    </select><br><br>
                    <input type='hidden' name='cuenta' value='".$cuenta."'>
                    <input type='submit' name='registro' value='Enviar'>
                  </fieldset>
                </form>";
          session_start();
          $_SESSION['cuenta'] = $cuenta;
        }
        else {
          session_start();
          $_SESSION['cuenta'] = $cuenta;
          $_SESSION['consulta'] = true;
          echo "El usuario con ese número de cuenta ya consulto sus resultados.
                <br><a href='../dynamics/promedio.php'>Consultar resultado almacenado</a>";
        }
      }
      else {
        echo "El campo ha sido enviado vacío o no corresponde  al formato esperado.
              <br><a href='../templates/inicio.html'>Regresar</a>";
      }
    }
  }
?>
