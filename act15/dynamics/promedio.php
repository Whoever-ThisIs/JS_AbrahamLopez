<?php
  include('bd.php');
  session_start();
  $conexion = connectDB2("pase");
  if(!$conexion) {
    echo mysqli_connect_error()."<br>";
    echo mysqli_connect_errno()."<br>";
    exit();
  }
  else {
    $cuenta = $_SESSION['cuenta'];
    echo "<h1>Hemos calculado y almacenado tus resultados</h1>
          <table border='2'>
            <tr>
              <th>No. de cuenta</th>
              <th>Prom. 4°</th>
              <th>Prom. 5°</th>
              <th>Prom. 6°</th>
              <th>Promedio final</th>
              <th>Carrera seleccionada</th>
              <th>Probabilidad</th>
            </tr>";
    if(isset($_SESSION['consulta']) && $_SESSION['consulta'] == true){
      $consulta = "SELECT * FROM resultado LEFT JOIN carrera ON resultado.carrera = carrera.clave WHERE alumno=".$cuenta;
      $respuesta = mysqli_query($conexion, $consulta);
      $row = mysqli_fetch_array($respuesta);
      $carrera = utf8_encode($row[8]);
      echo "  <tr>
                <td>".$cuenta."</td>
                <td>".$row[1]."</td>
                <td>".$row[2]."</td>
                <td>".$row[3]."</td>
                <td>".$row[4]."</td>
                <td>".$carrera."</td>
                <td>".$row[6]."</td>";
    }
    else {
      $clCar = $_SESSION['carrera'];
      $proms = array();
      for ($n = 4; $n <= 6; $n++){
        $consulta = "SELECT AVG(calificacion), materia FROM calificacion LEFT JOIN materia ON calificacion.materia = materia.clave WHERE alumno=".$cuenta." AND materia.grado=".$n;
        $respuesta = mysqli_query($conexion, $consulta);
        $row = mysqli_fetch_array($respuesta);
        $proms[$n-4] = bcdiv($row[0], '1', 2);
      }
      $promF = bcdiv((($proms[0]+$proms[1]+$proms[2])/3), '1', 2);
      if($promF > 6.0 && $promF < 8.0){
        $probabilidad = "Poco probable";
      }
      elseif ($promF > 8.0 && $promF < 9.0){
        $probabilidad = "Probable";
      }
      elseif ($promF > 9.0){
        $probabilidad = "Asegurado";
      }
      else {
        $probabilidad = "Nada seguro";
      }
      $sql = sprintf("INSERT INTO resultado VALUES ('%d','%f','%f','%f','%f','%d','%s')",
                      $cuenta,
                      $proms[0],
                      $proms[1],
                      $proms[2],
                      $promF,
                      $clCar,
                      $probabilidad
                    );
      mysqli_query($conexion, $sql);
      $consulta = "SELECT nombre FROM carrera WHERE clave=".$clCar;
      $respuesta = mysqli_query($conexion, $consulta);
      $row = mysqli_fetch_array($respuesta);
      $carrera = $row[0];
      echo "  <tr>
                <td>".$cuenta."</td>
                <td>".$proms[0]."</td>
                <td>".$proms[1]."</td>
                <td>".$proms[2]."</td>
                <td>".$promF."</td>
                <td>".utf8_encode($carrera)."</td>
                <td>".$probabilidad."</td>";
    }
    echo "    </tr>
            </table>
            <br><a href='../templates/inicio.html'>Regresar</a>";
    session_unset();
    session_destroy();

  }

?>
