<?php
include('bd.php');
$conexion = connectDB2("pase");
if(!$conexion) {
  echo mysqli_connect_error()."<br>";
  echo mysqli_connect_errno()."<br>";
  exit();
}
else {
  if(isset($_POST['registro'])){
    $cuenta = $_POST['cuenta'];
    $nombre = $_POST['nombre'];
    $apePat = $_POST['apePat'];
    $apeMat = $_POST['apeMat'];
    $area = $_POST['area'];
    session_start();
    $_SESSION['carrera'] = $_POST['carrera'];
    $sql = sprintf("INSERT INTO usuario VALUES ('%d', '%s', '%s', '%s', '%d')",
                    $cuenta,
                    $nombre,
                    $apePat,
                    $apeMat,
                    $area);
    mysqli_query($conexion, $sql);
    $consulta = "SELECT clave, nombre FROM materia WHERE grado=4";
    $respuesta = mysqli_query($conexion, $consulta);
    echo "<form action='../dynamics/calificaciones.php' method='post'>
            <fieldset>
              <legend>Cuarto año</legend>";
    while ($row = mysqli_fetch_array($respuesta)) {
      echo "  <label for='".$row[0]."'>".utf8_encode($row[1]).": </label>
              <input type='number' name='".$row[0]."' min='1' max='10' required><br><br>";
    }
    echo "    <input type='hidden' name='cuenta' value='".$cuenta."'>
              <input type='submit' name='primero' value='Subir'>
            </fieldset>
          </form>";
  }
  elseif (isset($_POST['primero'])) {
    $cuenta = $_POST['cuenta'];
    $consulta = "SELECT clave FROM materia WHERE grado=4";
    $respuesta = mysqli_query($conexion, $consulta);
    while ($row = mysqli_fetch_array($respuesta)) {
      if(isset($_POST[$row[0]]) && $_POST[$row[0]] != 0){
        $sql = sprintf("INSERT INTO calificacion VALUES ('%d', '%d', '%d')",
                        $cuenta,
                        $row[0],
                        $_POST[$row[0]]
                      );
        mysqli_query($conexion, $sql);
      }
    }
    $consulta = "SELECT clave, nombre FROM materia WHERE grado=5";
    $respuesta = mysqli_query($conexion, $consulta);
    echo "<form action='../dynamics/calificaciones.php' method='post'>
            <fieldset>
              <legend>Quinto año</legend>";
    while ($row = mysqli_fetch_array($respuesta)) {
      echo "  <label for='".$row[0]."'>".utf8_encode($row[1]).": </label>
              <input type='number' name='".$row[0]."' min='1' max='10' required><br><br>";
    }
    echo "    <input type='hidden' name='cuenta' value='".$cuenta."'>
              <input type='submit' name='segundo' value='Subir'>
            </fieldset>
          </form>";
  }
  elseif (isset($_POST['segundo'])) {
    $cuenta = $_POST['cuenta'];
    $consulta = "SELECT clave FROM materia WHERE grado=5";
    $respuesta = mysqli_query($conexion, $consulta);
    while ($row = mysqli_fetch_array($respuesta)) {
      if(isset($_POST[$row[0]]) && $_POST[$row[0]] != 0){
        $sql = sprintf("INSERT INTO calificacion VALUES ('%d', '%d', '%d')",
                        $cuenta,
                        $row[0],
                        $_POST[$row[0]]
                      );
        mysqli_query($conexion, $sql);
      }
    }
    $consulta = "SELECT * FROM usuario WHERE no_cuenta='$cuenta'";
    $respuesta= mysqli_query($conexion, $consulta);
    $row = mysqli_fetch_array($respuesta);
    $area = $row[4];
    $consulta = "SELECT clave, nombre FROM materia WHERE grado=6 AND area=0 OR area=".$area." AND optativa='F'";
    $respuesta = mysqli_query($conexion, $consulta);
    echo "<form action='../dynamics/calificaciones.php' method='post'>
            <fieldset>
              <legend>Sexto año</legend>";
    while ($row = mysqli_fetch_array($respuesta)) {
      echo "  <label for='".$row[0]."'>".utf8_encode($row[1]).": </label>
              <input type='number' name='".$row[0]."' min='1' max='10' required><br><br>";
    }
    $consulta = "SELECT clave, nombre FROM materia WHERE grado=6 AND area=".$area." AND optativa='T'";
    $respuesta = mysqli_query($conexion, $consulta);
    echo "    <label for='optativa'>Optativa: </label>
              <select name='optativa'>";
    while ($row = mysqli_fetch_array($respuesta)) {
      echo "  <option value='".$row[0]."'>".utf8_encode($row[1])."</option>";
    }
    echo "    </select>&nbsp
              <input type='number' name='opCal' min='1' max='10' required><br><br>
              <input type='hidden' name='cuenta' value='".$cuenta."'>
              <input type='submit' name='tercero' value='Subir'>
            </fieldset>
          </form>";
  }
  elseif (isset($_POST['tercero'])) {
    $cuenta = $_POST['cuenta'];
    $consulta = "SELECT clave FROM materia WHERE grado=6";
    $respuesta = mysqli_query($conexion, $consulta);
    while ($row = mysqli_fetch_array($respuesta)) {
      if(isset($_POST[$row[0]]) && $_POST[$row[0]] != 0){
        $sql = sprintf("INSERT INTO calificacion VALUES ('%d', '%d', '%d')",
                        $cuenta,
                        $row[0],
                        $_POST[$row[0]]
                      );
        mysqli_query($conexion, $sql);
      }
    }
    if(isset($_POST['optativa']) && $_POST['opCal'] != 0){
      $sql = sprintf("INSERT INTO calificacion VALUES ('%d', '%d', '%d')",
                      $cuenta,
                      $_POST['optativa'],
                      $_POST['opCal']
                    );
      mysqli_query($conexion, $sql);
    }
    session_start();
    $_SESSION['cuenta'] = $cuenta;
    header('Location: promedio.php');
  }
}
?>
