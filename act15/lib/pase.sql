-- MySQL dump 10.16  Distrib 10.1.36-MariaDB, for Win32 (AMD64)
--
-- Host: localhost    Database: pase
-- ------------------------------------------------------
-- Server version	10.1.36-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `calificacion`
--

DROP TABLE IF EXISTS `calificacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `calificacion` (
  `alumno` int(9) DEFAULT NULL,
  `materia` int(4) DEFAULT NULL,
  `calificacion` int(2) NOT NULL,
  KEY `alumno` (`alumno`),
  KEY `materia` (`materia`),
  CONSTRAINT `calificacion_ibfk_1` FOREIGN KEY (`alumno`) REFERENCES `usuario` (`no_cuenta`),
  CONSTRAINT `calificacion_ibfk_2` FOREIGN KEY (`materia`) REFERENCES `materia` (`clave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calificacion`
--

LOCK TABLES `calificacion` WRITE;
/*!40000 ALTER TABLE `calificacion` DISABLE KEYS */;
INSERT INTO `calificacion` VALUES (318278687,1400,8),(318278687,1401,8),(318278687,1402,8),(318278687,1403,8),(318278687,1404,8),(318278687,1405,8),(318278687,1406,8),(318278687,1407,8),(318278687,1409,8),(318278687,1410,8),(318278687,1411,8),(318278687,1412,8),(318278687,1500,9),(318278687,1501,9),(318278687,1502,9),(318278687,1503,9),(318278687,1504,9),(318278687,1505,9),(318278687,1506,9),(318278687,1512,9),(318278687,1513,9),(318278687,1514,9),(318278687,1515,9),(318278687,1516,9),(318278687,1600,10),(318278687,1601,10),(318278687,1602,10),(318278687,1603,10),(318278687,1609,10),(318278687,1614,10),(318278687,1615,10),(318278687,1616,10),(318278687,1704,10),(318278688,1400,7),(318278688,1401,7),(318278688,1402,7),(318278688,1403,7),(318278688,1404,7),(318278688,1405,7),(318278688,1406,7),(318278688,1407,7),(318278688,1409,7),(318278688,1410,7),(318278688,1411,7),(318278688,1412,7),(318278688,1500,8),(318278688,1501,8),(318278688,1502,8),(318278688,1503,8),(318278688,1504,8),(318278688,1505,8),(318278688,1506,8),(318278688,1512,8),(318278688,1513,8),(318278688,1514,8),(318278688,1515,8),(318278688,1516,8),(318278688,1600,10),(318278688,1601,10),(318278688,1602,10),(318278688,1603,10),(318278688,1609,10),(318278688,1617,10),(318278688,1618,10),(318278688,1620,10),(318278688,1714,10),(318278684,1400,10),(318278684,1401,10),(318278684,1402,10),(318278684,1403,10),(318278684,1404,10),(318278684,1405,10),(318278684,1406,10),(318278684,1407,10),(318278684,1409,10),(318278684,1410,10),(318278684,1411,10),(318278684,1412,10),(318278684,1500,9),(318278684,1501,9),(318278684,1502,9),(318278684,1503,9),(318278684,1504,9),(318278684,1505,9),(318278684,1506,9),(318278684,1512,9),(318278684,1513,9),(318278684,1514,9),(318278684,1515,9),(318278684,1516,9),(318278684,1600,8),(318278684,1601,8),(318278684,1602,8),(318278684,1603,8),(318278684,1609,8),(318278684,1613,8),(318278684,1621,8),(318278684,1622,8),(318278684,1706,8),(318278683,1400,7),(318278683,1401,7),(318278683,1402,7),(318278683,1403,7),(318278683,1404,7),(318278683,1405,7),(318278683,1406,7),(318278683,1407,7),(318278683,1409,7),(318278683,1410,7),(318278683,1411,7),(318278683,1412,8),(318278683,1500,8),(318278683,1501,8),(318278683,1502,8),(318278683,1503,8),(318278683,1504,8),(318278683,1505,8),(318278683,1506,8),(318278683,1512,8),(318278683,1513,8),(318278683,1514,8),(318278683,1515,8),(318278683,1516,8),(318278683,1600,9),(318278683,1601,9),(318278683,1602,9),(318278683,1603,9),(318278683,1609,9),(318278683,1614,9),(318278683,1615,9),(318278683,1616,9),(318278683,1712,10),(318278682,1400,6),(318278682,1401,6),(318278682,1402,6),(318278682,1403,6),(318278682,1404,6),(318278682,1405,6),(318278682,1406,6),(318278682,1407,6),(318278682,1409,6),(318278682,1410,6),(318278682,1411,6),(318278682,1412,6),(318278682,1500,7),(318278682,1501,7),(318278682,1502,7),(318278682,1503,7),(318278682,1504,7),(318278682,1505,7),(318278682,1506,7),(318278682,1512,7),(318278682,1513,7),(318278682,1514,7),(318278682,1515,7),(318278682,1516,7),(318278682,1600,8),(318278682,1601,7),(318278682,1602,7),(318278682,1603,7),(318278682,1609,7),(318278682,1617,7),(318278682,1618,7),(318278682,1703,7),(318278681,1400,4),(318278681,1401,4),(318278681,1402,4),(318278681,1403,4),(318278681,1404,4),(318278681,1405,4),(318278681,1406,4),(318278681,1407,4),(318278681,1409,4),(318278681,1410,4),(318278681,1411,4),(318278681,1412,4),(318278681,1500,6),(318278681,1501,6),(318278681,1502,6),(318278681,1503,6),(318278681,1504,6),(318278681,1505,6),(318278681,1506,6),(318278681,1512,6),(318278681,1513,6),(318278681,1514,6),(318278681,1515,6),(318278681,1516,6),(318278681,1600,5),(318278681,1601,5),(318278681,1602,5),(318278681,1603,4),(318278681,1609,5),(318278681,1613,4),(318278681,1621,5),(318278681,1622,4),(318278681,1716,5),(318278685,1400,10),(318278685,1401,8),(318278685,1402,10),(318278685,1403,10),(318278685,1404,10),(318278685,1405,10),(318278685,1406,9),(318278685,1407,10),(318278685,1409,10),(318278685,1410,10),(318278685,1411,10),(318278685,1412,9),(318278685,1500,10),(318278685,1501,10),(318278685,1502,8),(318278685,1503,8),(318278685,1504,10),(318278685,1505,10),(318278685,1506,10),(318278685,1512,10),(318278685,1513,10),(318278685,1514,10),(318278685,1515,10),(318278685,1516,10),(318278685,1600,10),(318278685,1601,10),(318278685,1602,9),(318278685,1603,10),(318278685,1609,10),(318278685,1610,9),(318278685,1611,8),(318278685,1612,9),(318278685,1710,9);
/*!40000 ALTER TABLE `calificacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carrera`
--

DROP TABLE IF EXISTS `carrera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carrera` (
  `clave` int(3) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `prom_min` float(3,1) DEFAULT NULL,
  PRIMARY KEY (`clave`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrera`
--

LOCK TABLES `carrera` WRITE;
/*!40000 ALTER TABLE `carrera` DISABLE KEYS */;
INSERT INTO `carrera` VALUES (101,'Actuaría',9.0),(102,'Arquitectura',9.0),(104,'Ciencias de la Computación',8.4),(105,'Diseño Industrial',0.0),(106,'Física',8.3),(110,'Ingeniería en Computación',8.4),(115,'Ingeniería Mecánica',8.7),(124,'Ingeniería Mecatrónica',0.0),(127,'Ciencias de la Tierra',8.6),(134,'Física Biomédica',9.0),(201,'Biología',8.3),(207,'Medicina Veterinaria y Zootecnia',8.0),(208,'Médico Cirujano',9.0),(210,'Psicología',8.3),(211,'Química',8.3),(215,'Ciencias Genómicas',0.0),(220,'Enfermería',7.0),(222,'Odontología',7.0),(224,'Ciencia Forense',0.0),(226,'Neurociencias',0.0),(301,'Administración',7.7),(303,'Ciencias Políticas y de la Administración Pública',7.8),(304,'Contaduría',7.2),(305,'Derecho',7.8),(306,'Economía',7.8),(310,'Relaciones Internacionales',8.6),(311,'Sociología',7.0),(312,'Trabajo Social',7.5),(315,'Comunicación',7.0),(319,'Antropología',8.5),(401,'Artes Visuales',7.8),(403,'Canto',7.9),(406,'Diseño Gráfico',7.5),(407,'Educación Musical',8.1),(411,'Filosofía',7.7),(421,'Pedagogía',7.8),(433,'Historia del Arte',7.8),(434,'Arte y Diseño',7.8),(435,'Cinematografía',0.0),(438,'Música y Tecnología Artística',NULL);
/*!40000 ALTER TABLE `carrera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materia`
--

DROP TABLE IF EXISTS `materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materia` (
  `clave` int(4) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `grado` int(1) NOT NULL,
  `area` int(1) DEFAULT NULL,
  `optativa` char(1) NOT NULL,
  PRIMARY KEY (`clave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materia`
--

LOCK TABLES `materia` WRITE;
/*!40000 ALTER TABLE `materia` DISABLE KEYS */;
INSERT INTO `materia` VALUES (1400,'Matemáticas IV',4,0,'F'),(1401,'Física III',4,0,'F'),(1402,'Lengua Española',4,0,'F'),(1403,'Historia Universal',4,0,'F'),(1404,'Lógica',4,0,'F'),(1405,'Geografía',4,0,'F'),(1406,'Dibujo II',4,0,'F'),(1407,'Idioma IV',4,0,'F'),(1409,'Educación Estética y Artística',4,0,'F'),(1410,'Educación Física IV',4,0,'F'),(1411,'Orientación Educativa IV',4,0,'F'),(1412,'Informática',4,0,'F'),(1500,'Matemáticas V',5,0,'F'),(1501,'Química III',5,0,'F'),(1502,'Biología IV',5,0,'F'),(1503,'Educación para la Salud',5,0,'F'),(1504,'Historia de México II',5,0,'F'),(1505,'Etimologías Grecolatinas',5,0,'F'),(1506,'Idioma V',5,0,'F'),(1512,'Ética',5,0,'F'),(1513,'Educación Física V',5,0,'F'),(1514,'Educación Estética y Artística',5,0,'F'),(1515,'Orientación Educativa V',5,0,'F'),(1516,'Literatura Universal',5,0,'F'),(1600,'Matemáticas VI',6,0,'F'),(1601,'Derecho',6,0,'F'),(1602,'Literatura Mex. e Iberoam.',6,0,'F'),(1603,'Idioma VI',6,0,'F'),(1609,'Psicología',6,0,'F'),(1610,'Dibujo Constructivo II',6,1,'F'),(1611,'Física IV',6,1,'F'),(1612,'Química IV',6,1,'F'),(1613,'Biología V',6,2,'F'),(1614,'Geografía Económica',6,3,'F'),(1615,'Introducc. Al Estudio de las C',6,3,'F'),(1616,'Problemas Soc. Polit. y Económ',6,3,'F'),(1617,'Historia de la Cultura',6,4,'F'),(1618,'Historia de las Doctrinas Filo',6,4,'F'),(1620,'Matemáticas VI',6,5,'F'),(1621,'Física IV',6,2,'F'),(1622,'Química IV',6,2,'F'),(1700,'Higiene Mental',6,2,'T'),(1703,'Revolución Mexicana',6,4,'T'),(1704,'Contabilidad y Gestión Adminis',6,3,'T'),(1705,'Pensamiento Filosófico de Méxi',6,4,'T'),(1706,'Geología y Mineralogía',6,2,'T'),(1707,'Geografía Política',6,3,'T'),(1708,'Modelado II',6,4,'T'),(1709,'Físico-Química',6,1,'T'),(1710,'Temas Selec. Matemáticas',6,1,'T'),(1711,'Temas Selec. Biología',6,2,'T'),(1712,'Estadística y Prob.',6,3,'T'),(1713,'Latín',6,4,'T'),(1714,'Griego',6,4,'T'),(1715,'Comunicación Visual',6,4,'T'),(1716,'Temas Selec. de Morfología y F',6,2,'T'),(1717,'Estética',6,4,'T'),(1718,'Historia del Arte',6,4,'T'),(1719,'Informática Aplicada a la Cien',6,1,'T'),(1720,'Sociología',6,3,'T'),(1723,'Astronomía',6,1,'T');
/*!40000 ALTER TABLE `materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resultado`
--

DROP TABLE IF EXISTS `resultado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resultado` (
  `alumno` int(9) DEFAULT NULL,
  `cuarto` float(3,1) DEFAULT NULL,
  `quinto` float(3,1) DEFAULT NULL,
  `sexto` float(3,1) DEFAULT NULL,
  `final` float(3,1) DEFAULT NULL,
  `carrera` int(3) DEFAULT NULL,
  `probabilidad` varchar(15) DEFAULT NULL,
  KEY `alumno` (`alumno`),
  KEY `carrera` (`carrera`),
  CONSTRAINT `resultado_ibfk_1` FOREIGN KEY (`alumno`) REFERENCES `usuario` (`no_cuenta`),
  CONSTRAINT `resultado_ibfk_2` FOREIGN KEY (`carrera`) REFERENCES `carrera` (`clave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resultado`
--

LOCK TABLES `resultado` WRITE;
/*!40000 ALTER TABLE `resultado` DISABLE KEYS */;
INSERT INTO `resultado` VALUES (318278688,7.0,8.0,10.0,8.3,401,'Probable'),(318278684,10.0,9.0,8.0,9.0,201,'Nada seguro'),(318278683,7.1,8.0,9.1,8.1,102,'Probable'),(318278682,6.0,7.0,7.1,6.7,301,'Poco probable'),(318278681,4.0,6.0,4.7,4.9,319,'Nada seguro'),(318278685,9.7,9.7,9.3,9.6,115,'Asegurado');
/*!40000 ALTER TABLE `resultado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `no_cuenta` int(9) NOT NULL,
  `nombres` varchar(20) NOT NULL,
  `apePat` varchar(20) NOT NULL,
  `apeMat` varchar(20) NOT NULL,
  `área` int(1) NOT NULL,
  PRIMARY KEY (`no_cuenta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (0,'Prueba','pruebita','x',1),(318278681,'P','P','P',2),(318278682,'P','p','p',4),(318278683,'Pr','pr','pr',3),(318278684,'Pru','Pru','Pru',2),(318278685,'Juan Carlos','Camacho','Barrientos',1),(318278686,'Prueba','pruebita','x',1),(318278687,'Juanito','Banana','Platano',3),(318278688,'Prueba','Prueba','Prueba',4);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-08 23:31:21
