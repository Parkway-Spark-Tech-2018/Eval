-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: eval_db
-- ------------------------------------------------------
-- Server version	5.7.21-0ubuntu0.17.10.1

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
-- Table structure for table `Course`
--

DROP TABLE IF EXISTS `Course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Course` (
  `Course_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Course_Name` varchar(30) NOT NULL,
  `Course_Description` varchar(30) NOT NULL,
  `Course_Image` varchar(50) NOT NULL DEFAULT '../Images/DefaultCourse.jpg',
  `Department_Id` int(11) NOT NULL,
  `Entry_Grade` tinyint(4) NOT NULL,
  `Exit_Grade` tinyint(4) NOT NULL,
  `Credit` tinyint(4) NOT NULL,
  PRIMARY KEY (`Course_Id`),
  KEY `Department_Id` (`Department_Id`),
  CONSTRAINT `Course_ibfk_1` FOREIGN KEY (`Department_Id`) REFERENCES `Department` (`Department_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=238 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Course`
--

LOCK TABLES `Course` WRITE;
/*!40000 ALTER TABLE `Course` DISABLE KEYS */;
INSERT INTO `Course` VALUES (1,'Introduction to Business','none','../Images/DefaultCourse.jpg',12,9,10,1),(2,'Accounting 1 (Sem 1)','none','../Images/DefaultCourse.jpg',12,10,12,1),(3,'Accounting 1 (Sem 2)','none','../Images/DefaultCourse.jpg',12,10,12,1),(4,'Accounting 2 (Sem 1)','none','../Images/DefaultCourse.jpg',12,11,12,1),(5,'Accounting 2 (Sem 2)','none','../Images/DefaultCourse.jpg',12,11,12,1),(6,'Honors Accounting 3 (Sem 1)','none','../Images/DefaultCourse.jpg',12,12,12,1),(7,'Honors Accounting 3 (Sem 2)','none','../Images/DefaultCourse.jpg',12,12,12,1),(8,'Branding & Design Concepts','none','../Images/DefaultCourse.jpg',12,9,12,1),(9,'Business Management','none','../Images/DefaultCourse.jpg',12,11,12,1),(10,'Digital Animation','none','../Images/DefaultCourse.jpg',12,10,12,1),(11,'AP Computer Science (Sem 1)','none','../Images/DefaultCourse.jpg',12,11,12,1),(12,'AP Computer Science (Sem 2)','none','../Images/DefaultCourse.jpg',12,11,12,1),(13,'Marketing 1 (Sem 1)','none','../Images/DefaultCourse.jpg',12,10,12,1),(14,'Marketing 1 (Sem 2)','none','../Images/DefaultCourse.jpg',12,10,12,1),(15,'Marketing 2 (Sem 1)','none','../Images/DefaultCourse.jpg',12,11,12,1),(16,'Marketing 2 (Sem 2)','none','../Images/DefaultCourse.jpg',12,11,12,1),(17,'Microsoft Office','none','../Images/DefaultCourse.jpg',12,10,12,1),(18,'Multimedia','none','../Images/DefaultCourse.jpg',12,10,12,1),(19,'Personal Finance','none','../Images/DefaultCourse.jpg',12,10,12,1),(20,'Web Design 1','none','../Images/DefaultCourse.jpg',12,10,12,1),(21,'Web Design 2','none','../Images/DefaultCourse.jpg',12,10,12,1),(22,'Algebra 1 (Sem 1)','none','../Images/DefaultCourse.jpg',2,9,10,1),(23,'Algebra 1 (Sem 2)','none','../Images/DefaultCourse.jpg',2,9,10,1),(24,'Algebra 1 Lab (Sem 1)','none','../Images/DefaultCourse.jpg',2,9,12,1),(25,'Algebra 1 Lab (Sem 2)','none','../Images/DefaultCourse.jpg',2,9,12,1),(26,'Geometry B (Sem 1)','none','../Images/DefaultCourse.jpg',2,10,12,1),(27,'Geometry B (Sem 2)','none','../Images/DefaultCourse.jpg',2,10,12,1),(28,'Geometry A (Sem 1)','none','../Images/DefaultCourse.jpg',2,9,12,1),(29,'Geometry A (Sem 2)','none','../Images/DefaultCourse.jpg',2,9,12,1),(30,'Honors Geometry (Sem 1)','none','../Images/DefaultCourse.jpg',2,9,10,1),(31,'Honors Geometry (Sem 2)','none','../Images/DefaultCourse.jpg',2,9,10,1),(32,'Algebra 2 (Sem 1)','none','../Images/DefaultCourse.jpg',2,11,12,1),(33,'Algebra 2 (Sem 2)','none','../Images/DefaultCourse.jpg',2,11,12,1),(34,'Trigonometry','none','../Images/DefaultCourse.jpg',2,11,12,1),(35,'Statistics','none','../Images/DefaultCourse.jpg',2,11,12,1),(36,'Finite Mathematics (Sem 1)','none','../Images/DefaultCourse.jpg',2,12,12,1),(37,'Finite Mathematics (Sem 2)','none','../Images/DefaultCourse.jpg',2,12,12,1),(38,'College Algebra (Sem 1)','none','../Images/DefaultCourse.jpg',2,11,12,1),(39,'College Algebra (Sem 2)','none','../Images/DefaultCourse.jpg',2,11,12,1),(40,'Pre-Calculus (Sem 1)','none','../Images/DefaultCourse.jpg',2,11,12,1),(41,'Pre-Calculus (Sem 2)','none','../Images/DefaultCourse.jpg',2,11,12,1),(42,'Honors Pre-Calculus (Sem 1)','none','../Images/DefaultCourse.jpg',2,11,12,1),(43,'Honors Pre-Calculus (Sem 2)','none','../Images/DefaultCourse.jpg',2,11,12,1),(44,'AP Statistics (Sem 1)','none','../Images/DefaultCourse.jpg',2,11,12,1),(45,'AP Statistics (Sem 2)','none','../Images/DefaultCourse.jpg',2,11,12,1),(46,'AP Calculus AB (Sem 1)','none','../Images/DefaultCourse.jpg',2,12,12,1),(47,'AP Calculus AB (Sem 2)','none','../Images/DefaultCourse.jpg',2,12,12,1),(48,'AP Calculus BC (Sem 1)','none','../Images/DefaultCourse.jpg',2,12,12,1),(49,'AP Calculus BC (Sem 2)','none','../Images/DefaultCourse.jpg',2,12,12,1),(50,'English 1 (Sem 1)','none','../Images/DefaultCourse.jpg',3,9,9,1),(51,'English 1 (Sem 2)','none','../Images/DefaultCourse.jpg',3,9,9,1),(52,'Honors English 1 (Sem 1)','none','../Images/DefaultCourse.jpg',3,9,9,1),(53,'Honors English 1 (Sem 2)','none','../Images/DefaultCourse.jpg',3,9,9,1),(54,'English 2 (Sem 1)','none','../Images/DefaultCourse.jpg',3,10,10,1),(55,'English 2 (Sem 2)','none','../Images/DefaultCourse.jpg',3,10,10,1),(56,'Honors English 2 (Sem 1)','none','../Images/DefaultCourse.jpg',3,10,10,1),(57,'Honors English 2 (Sem 2)','none','../Images/DefaultCourse.jpg',3,10,10,1),(58,'English 3 (Sem 1)','none','../Images/DefaultCourse.jpg',3,11,11,1),(59,'English 3 (Sem 2)','none','../Images/DefaultCourse.jpg',3,11,11,1),(60,'Composition','none','../Images/DefaultCourse.jpg',3,12,12,1),(61,'Fundamentals of Composition','none','../Images/DefaultCourse.jpg',3,12,12,1),(62,'English Literature','none','../Images/DefaultCourse.jpg',3,12,12,1),(63,'Contemporary World Literature','none','../Images/DefaultCourse.jpg',3,12,12,1),(64,'Creative Writing 1','none','../Images/DefaultCourse.jpg',3,11,12,1),(65,'Advanced Creative Writing','none','../Images/DefaultCourse.jpg',3,11,12,1),(66,'Beginning Journalism','none','../Images/DefaultCourse.jpg',3,9,11,1),(67,'Journalism 1 (Sem 1)','none','../Images/DefaultCourse.jpg',3,10,12,1),(68,'Newspaper 1 (Sem 2)','none','../Images/DefaultCourse.jpg',3,10,12,1),(69,'Newspaper 2 (Sem 1)','none','../Images/DefaultCourse.jpg',3,10,12,1),(70,'Newspaper 2 (Sem 2)','none','../Images/DefaultCourse.jpg',3,10,12,1),(71,'Newspaper 3 (Sem 1)','none','../Images/DefaultCourse.jpg',3,11,12,1),(72,'Newspaper 3 (Sem 2)','none','../Images/DefaultCourse.jpg',3,11,12,1),(73,'Newspaper 4 (Sem 1)','none','../Images/DefaultCourse.jpg',3,12,12,1),(74,'Newspaper 4 (Sem 2)','none','../Images/DefaultCourse.jpg',3,12,12,1),(75,'Yearbook 1 (Sem 1)','none','../Images/DefaultCourse.jpg',3,10,12,1),(76,'Yearbook 1 (Sem 2)','none','../Images/DefaultCourse.jpg',3,10,12,1),(77,'Yearbook 2 (Sem 1)','none','../Images/DefaultCourse.jpg',3,10,12,1),(78,'Yearbook 2 (Sem 2)','none','../Images/DefaultCourse.jpg',3,10,12,1),(79,'Yearbook 3 (Sem 1)','none','../Images/DefaultCourse.jpg',3,11,12,1),(80,'Yearbook 3 (Sem 2)','none','../Images/DefaultCourse.jpg',3,11,12,1),(81,'Yearbook 4 (Sem 1)','none','../Images/DefaultCourse.jpg',3,12,12,1),(82,'Yearbook 4 (Sem 2)','none','../Images/DefaultCourse.jpg',3,12,12,1),(83,'Advanced Broadcasting','none','../Images/DefaultCourse.jpg',3,9,12,1),(84,'Biology 1: Cells and Variation','none','../Images/DefaultCourse.jpg',4,9,9,1),(85,'Biology 2: Evolution & Ecology','none','../Images/DefaultCourse.jpg',4,9,9,1),(86,'Zoology','none','../Images/DefaultCourse.jpg',4,10,12,1),(87,'Astronomy & Space Science','none','../Images/DefaultCourse.jpg',4,10,12,1),(88,'Forensics Science - C','none','../Images/DefaultCourse.jpg',4,10,12,1),(89,'Chemistry (Sem 1)','none','../Images/DefaultCourse.jpg',4,10,12,1),(90,'Chemistry (Sem 2)','none','../Images/DefaultCourse.jpg',4,10,12,1),(91,'Honors Chemistry (Sem 1)','none','../Images/DefaultCourse.jpg',4,10,12,1),(92,'Honors Chemistry (Sem 2)','none','../Images/DefaultCourse.jpg',4,10,12,1),(93,'Physics (Sem 1)','none','../Images/DefaultCourse.jpg',4,10,12,1),(94,'Physics (Sem 2)','none','../Images/DefaultCourse.jpg',4,10,12,1),(95,'AP Physics (Sem 1)','none','../Images/DefaultCourse.jpg',4,10,12,1),(96,'AP Physics (Sem 2)','none','../Images/DefaultCourse.jpg',4,10,12,1),(97,'AP Biology (Sem 1)','none','../Images/DefaultCourse.jpg',4,11,12,1),(98,'AP Biology (Sem 2)','none','../Images/DefaultCourse.jpg',4,11,12,1),(99,'AP Chemistry (Sem 1)','none','../Images/DefaultCourse.jpg',4,11,12,1),(100,'AP Chemistry (Sem 2)','none','../Images/DefaultCourse.jpg',4,11,12,1),(101,'AP Physics C: Mechanics','none','../Images/DefaultCourse.jpg',4,11,12,1),(102,'AP Physics 2 (Sem 1)','none','../Images/DefaultCourse.jpg',4,10,12,1),(103,'AP Physics 2 (Sem 2)','none','../Images/DefaultCourse.jpg',4,10,12,1),(104,'General Music - Piano','none','../Images/DefaultCourse.jpg',5,9,12,1),(105,'General Music - Piano 2','none','../Images/DefaultCourse.jpg',5,9,12,1),(106,'General Music - Guitar ','none','../Images/DefaultCourse.jpg',5,9,12,1),(107,'General Music - Guitar 2','none','../Images/DefaultCourse.jpg',5,9,12,1),(108,'AP Music Theory (Sem 1)','none','../Images/DefaultCourse.jpg',5,10,12,1),(109,'AP Music Theory (Sem 2)','none','../Images/DefaultCourse.jpg',5,10,12,1),(110,'Band - Concert Band (Sem 1)','none','../Images/DefaultCourse.jpg',5,9,12,1),(111,'Band - Concert Band (Sem 2)','none','../Images/DefaultCourse.jpg',5,9,12,1),(112,'Band - Jazz Lab (Sem 1)','none','../Images/DefaultCourse.jpg',5,9,12,1),(113,'Band - Jazz Lab (Sem 2)','none','../Images/DefaultCourse.jpg',5,9,12,1),(114,'Band - Symphonic Band (Sem 1)','none','../Images/DefaultCourse.jpg',5,9,12,1),(115,'Band - Symphonic Band (Sem 2)','none','../Images/DefaultCourse.jpg',5,9,12,1),(116,'Vocal - Chorus (Sem 1)','none','../Images/DefaultCourse.jpg',5,9,12,1),(117,'Vocal - Chorus (Sem 2)','none','../Images/DefaultCourse.jpg',5,9,12,1),(118,'Vocal - Chamber Choir (Sem 1)','none','../Images/DefaultCourse.jpg',5,10,10,1),(119,'Vocal - Chamber Choir (Sem 2)','none','../Images/DefaultCourse.jpg',5,10,10,1),(120,'Public Speaking','none','../Images/DefaultCourse.jpg',5,9,12,1),(121,'Theatre Arts','none','../Images/DefaultCourse.jpg',5,9,12,1),(122,'Improvisational Theatre','none','../Images/DefaultCourse.jpg',5,9,12,1),(123,'Actors\' Studio l','none','../Images/DefaultCourse.jpg',5,10,12,1),(124,'Actors\' Studio 2','none','../Images/DefaultCourse.jpg',5,11,12,1),(125,'Technical Theatre','none','../Images/DefaultCourse.jpg',5,9,12,1),(126,'Directing','none','../Images/DefaultCourse.jpg',5,12,12,1),(127,'Studies in Musical Theatre','none','../Images/DefaultCourse.jpg',5,9,12,1),(128,'Shakespeare Alive!','none','../Images/DefaultCourse.jpg',5,10,12,1),(129,'Design Arts','none','../Images/DefaultCourse.jpg',5,9,12,1),(130,'Design Arts 2','none','../Images/DefaultCourse.jpg',5,9,12,1),(131,'Drawing','none','../Images/DefaultCourse.jpg',5,9,12,1),(132,'Advanced Drawing Strategies','none','../Images/DefaultCourse.jpg',5,9,12,1),(133,'Ceramics','none','../Images/DefaultCourse.jpg',5,9,12,1),(134,'Ceramics 2','none','../Images/DefaultCourse.jpg',5,9,12,1),(135,'Sculpture','none','../Images/DefaultCourse.jpg',5,9,12,1),(136,'Advanced 3-D Studies','none','../Images/DefaultCourse.jpg',5,10,12,1),(137,'Photography','none','../Images/DefaultCourse.jpg',5,9,12,1),(138,'Photography 2','none','../Images/DefaultCourse.jpg',5,10,12,1),(139,'Photography 3','none','../Images/DefaultCourse.jpg',5,10,12,1),(140,'Painting','none','../Images/DefaultCourse.jpg',5,9,12,1),(141,'Painting 2','none','../Images/DefaultCourse.jpg',5,10,12,1),(142,'Digital Design','none','../Images/DefaultCourse.jpg',5,9,12,1),(143,'Digital Design 2','none','../Images/DefaultCourse.jpg',5,10,12,1),(144,'AP Studio Art (Sem 1)','none','../Images/DefaultCourse.jpg',5,11,12,1),(145,'AP Studio Art (Sem 2)','none','../Images/DefaultCourse.jpg',5,11,12,1),(146,'Letâ€™s Create Together','none','../Images/DefaultCourse.jpg',5,9,12,1),(147,'Visual Arts Mentor','none','../Images/DefaultCourse.jpg',5,11,12,1),(148,'Career Management','none','../Images/DefaultCourse.jpg',6,9,12,1),(149,'Child Development 1','none','../Images/DefaultCourse.jpg',6,9,12,1),(150,'Child Development 2','none','../Images/DefaultCourse.jpg',6,9,12,1),(151,'Clothing 1','none','../Images/DefaultCourse.jpg',6,9,12,1),(152,'Clothing 2','none','../Images/DefaultCourse.jpg',6,9,12,1),(153,'Culinary Mentor','none','../Images/DefaultCourse.jpg',6,11,12,1),(154,'Fashion Merchandising','none','../Images/DefaultCourse.jpg',6,9,12,1),(155,'Housing and Interior Design','none','../Images/DefaultCourse.jpg',6,9,12,1),(156,'Human Relations','none','../Images/DefaultCourse.jpg',6,9,12,1),(157,'International Cuisine','none','../Images/DefaultCourse.jpg',6,11,12,1),(158,'Let\'s Cook Together','none','../Images/DefaultCourse.jpg',6,9,12,1),(159,'ProStart 1','none','../Images/DefaultCourse.jpg',6,10,12,1),(160,'ProStart 2','none','../Images/DefaultCourse.jpg',6,10,12,1),(161,'ProStart 3 (Sem 1)','none','../Images/DefaultCourse.jpg',6,10,12,1),(162,'ProStart 3 (Sem 2)','none','../Images/DefaultCourse.jpg',6,10,12,1),(163,'Textile Designs','none','../Images/DefaultCourse.jpg',6,9,12,1),(164,'French 1 (Sem 1)','none','../Images/DefaultCourse.jpg',7,9,12,1),(165,'French 1 (Sem 2)','none','../Images/DefaultCourse.jpg',7,9,12,1),(166,'French 2 (Sem 1)','none','../Images/DefaultCourse.jpg',7,9,12,1),(167,'French 2 (Sem 2)','none','../Images/DefaultCourse.jpg',7,9,12,1),(168,'French 3 (Sem 1)','none','../Images/DefaultCourse.jpg',7,10,12,1),(169,'French 3 (Sem 2)','none','../Images/DefaultCourse.jpg',7,10,12,1),(170,'French 4 (Sem 1)','none','../Images/DefaultCourse.jpg',7,11,12,1),(171,'French 4 (Sem 2)','none','../Images/DefaultCourse.jpg',7,11,12,1),(172,'Honors French 5 (Sem 1)','none','../Images/DefaultCourse.jpg',7,12,12,1),(173,'Honors French 5 (Sem 2)','none','../Images/DefaultCourse.jpg',7,12,12,1),(174,'German 1 (Sem 1)','none','../Images/DefaultCourse.jpg',7,9,12,1),(175,'German 1 (Sem 2)','none','../Images/DefaultCourse.jpg',7,9,12,1),(176,'German 2 (Sem 1)','none','../Images/DefaultCourse.jpg',7,9,12,1),(177,'German 2 (Sem 2)','none','../Images/DefaultCourse.jpg',7,9,12,1),(178,'German 3 (Sem 1)','none','../Images/DefaultCourse.jpg',7,10,12,1),(179,'German 3 (Sem 2)','none','../Images/DefaultCourse.jpg',7,10,12,1),(180,'German 4 (Sem 1)','none','../Images/DefaultCourse.jpg',7,11,12,1),(181,'German 4 (Sem 2)','none','../Images/DefaultCourse.jpg',7,11,12,1),(182,'Honors German 5 (Sem 1)','none','../Images/DefaultCourse.jpg',7,12,12,1),(183,'Honors German 5 (Sem 2)','none','../Images/DefaultCourse.jpg',7,12,12,1),(184,'Latin 1 (Sem 1)','none','../Images/DefaultCourse.jpg',7,9,12,1),(185,'Latin 1 (Sem 2)','none','../Images/DefaultCourse.jpg',7,9,12,1),(186,'Latin 2 (Sem 1)','none','../Images/DefaultCourse.jpg',7,9,12,1),(187,'Latin 2 (Sem 2)','none','../Images/DefaultCourse.jpg',7,9,12,1),(188,'Latin 3 (Sem 1)','none','../Images/DefaultCourse.jpg',7,10,12,1),(189,'Latin 3 (Sem 2)','none','../Images/DefaultCourse.jpg',7,10,12,1),(190,'Latin 4 (Sem 1)','none','../Images/DefaultCourse.jpg',7,11,12,1),(191,'Latin 4 (Sem 2)','none','../Images/DefaultCourse.jpg',7,11,12,1),(192,'Honors Latin 5 (Sem 1)','none','../Images/DefaultCourse.jpg',7,12,12,1),(193,'Honors Latin 5 (Sem 2)','none','../Images/DefaultCourse.jpg',7,12,12,1),(194,'Spanish 1 (Sem 1)','none','../Images/DefaultCourse.jpg',7,9,12,1),(195,'Spanish 1 (Sem 2)','none','../Images/DefaultCourse.jpg',7,9,12,1),(196,'Spanish 2 (Sem 1)','none','../Images/DefaultCourse.jpg',7,9,12,1),(197,'Spanish 2 (Sem 2)','none','../Images/DefaultCourse.jpg',7,9,12,1),(198,'Spanish 3 (Sem 1)','none','../Images/DefaultCourse.jpg',7,10,12,1),(199,'Spanish 3 (Sem 2)','none','../Images/DefaultCourse.jpg',7,10,12,1),(200,'Spanish 4 (Sem 1)','none','../Images/DefaultCourse.jpg',7,11,12,1),(201,'Spanish 4 (Sem 2)','none','../Images/DefaultCourse.jpg',7,11,12,1),(202,'Honors Spanish 5 (Sem 1)','none','../Images/DefaultCourse.jpg',7,12,12,1),(203,'Honors Spanish 5 (Sem 2)','none','../Images/DefaultCourse.jpg',7,12,12,1),(204,'AP World History (Sem 1)','none','../Images/DefaultCourse.jpg',8,10,12,1),(205,'AP World History (Sem 2)','none','../Images/DefaultCourse.jpg',8,10,12,1),(206,'United States Government','none','../Images/DefaultCourse.jpg',8,11,12,1),(207,'History of St. Louis','none','../Images/DefaultCourse.jpg',8,11,12,1),(208,'Media in America ','none','../Images/DefaultCourse.jpg',8,11,12,1),(209,'Crime and Law','none','../Images/DefaultCourse.jpg',8,11,12,1),(210,'Contemporary Issues','none','../Images/DefaultCourse.jpg',8,11,12,1),(211,'Philosophy and Ethics','none','../Images/DefaultCourse.jpg',8,11,12,1),(212,'Economics','none','../Images/DefaultCourse.jpg',8,11,12,1),(213,'Anthropology','none','../Images/DefaultCourse.jpg',8,11,12,1),(214,'Colonial America - Honors','none','../Images/DefaultCourse.jpg',8,11,12,1),(215,'Sociology','none','../Images/DefaultCourse.jpg',8,11,12,1),(216,'Psychology','none','../Images/DefaultCourse.jpg',8,11,12,1),(217,'Social Psychology','none','../Images/DefaultCourse.jpg',8,11,12,1),(218,'AP Human Geography','none','../Images/DefaultCourse.jpg',8,10,12,1),(219,'AP Psychology (Sem 1)','none','../Images/DefaultCourse.jpg',8,11,12,1),(220,'AP Psychology (Sem 2)','none','../Images/DefaultCourse.jpg',8,11,12,1),(221,'Health & Wellness','none','../Images/DefaultCourse.jpg',11,10,10,1),(222,'Physical Fitness Concepts','none','../Images/DefaultCourse.jpg',11,9,10,1),(223,'Competitive Sports and Games','none','../Images/DefaultCourse.jpg',11,10,12,1),(224,'Strength and Conditioning','none','../Images/DefaultCourse.jpg',11,10,12,1),(225,'Adventure Pursuits','none','../Images/DefaultCourse.jpg',11,10,12,1),(226,'Aquatic Experiences / Scuba','none','../Images/DefaultCourse.jpg',11,10,12,1),(227,'Lifeguard Training','none','../Images/DefaultCourse.jpg',11,10,12,1),(228,'Movement 2 Music','none','../Images/DefaultCourse.jpg',11,10,12,1),(229,'Let\'s Move Together','none','../Images/DefaultCourse.jpg',11,9,12,1),(230,'P.E. Mentor','none','../Images/DefaultCourse.jpg',11,11,12,1),(231,'Drafting','none','../Images/DefaultCourse.jpg',12,9,12,1),(232,'Design and Technology','none','../Images/DefaultCourse.jpg',12,9,12,1),(233,'Design and Technology 2','none','../Images/DefaultCourse.jpg',12,9,12,1),(234,'Construction Technology','none','../Images/DefaultCourse.jpg',12,9,12,1),(235,'Robotics Technology 1','none','../Images/DefaultCourse.jpg',12,9,12,1),(236,'Academic Lab','none','../Images/DefaultCourse.jpg',1,9,12,0),(237,'Academic Lab (Sem 2)','none','../Images/DefaultCourse.jpg',1,9,12,0);
/*!40000 ALTER TABLE `Course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Department`
--

DROP TABLE IF EXISTS `Department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Department` (
  `Department_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Department_Name` varchar(30) NOT NULL,
  `Department_Description` varchar(300) NOT NULL,
  `Image` varchar(50) NOT NULL DEFAULT '../Images/DefaultDepartment.jpg',
  `School_Id` int(11) NOT NULL,
  PRIMARY KEY (`Department_Id`),
  KEY `School_Id` (`School_Id`),
  CONSTRAINT `Department_ibfk_1` FOREIGN KEY (`School_Id`) REFERENCES `School` (`School_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Department`
--

LOCK TABLES `Department` WRITE;
/*!40000 ALTER TABLE `Department` DISABLE KEYS */;
INSERT INTO `Department` VALUES (1,'Administration','run this town','../Images/DefaultDepartment.jpg',2),(2,'Mathematics','','../Images/DefaultDepartment.jpg',2),(3,'English Language Arts','','../Images/DefaultDepartment.jpg',2),(4,'Science','','../Images/DefaultDepartment.jpg',2),(5,'Fine Arts','','../Images/DefaultDepartment.jpg',2),(6,'Family & Consumer Science','','../Images/DefaultDepartment.jpg',2),(7,'Modern & Classical Languages','','../Images/DefaultDepartment.jpg',2),(8,'Social Studies','','../Images/DefaultDepartment.jpg',2),(11,'Physical Education','','../Images/DefaultDepartment.jpg',2),(12,'Business & Technology','','../Images/DefaultDepartment.jpg',2);
/*!40000 ALTER TABLE `Department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `District`
--

DROP TABLE IF EXISTS `District`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `District` (
  `District_Id` int(11) NOT NULL AUTO_INCREMENT,
  `District_Name` varchar(30) NOT NULL,
  `District_Description` varchar(300) NOT NULL,
  `Image` varchar(50) NOT NULL DEFAULT '../Images/DefaultDistrict.jpg',
  PRIMARY KEY (`District_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `District`
--

LOCK TABLES `District` WRITE;
/*!40000 ALTER TABLE `District` DISABLE KEYS */;
INSERT INTO `District` VALUES (1,'Parkway','test description','../Images/DefaultDistrict.jpg');
/*!40000 ALTER TABLE `District` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `GenReview`
--

DROP TABLE IF EXISTS `GenReview`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `GenReview` (
  `Approval` tinyint(1) NOT NULL,
  `Explanation` varchar(500) DEFAULT NULL,
  `Subject_Id` int(11) NOT NULL,
  `genreview_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `review_type` varchar(255) NOT NULL,
  PRIMARY KEY (`genreview_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GenReview`
--

LOCK TABLES `GenReview` WRITE;
/*!40000 ALTER TABLE `GenReview` DISABLE KEYS */;
/*!40000 ALTER TABLE `GenReview` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Review`
--

DROP TABLE IF EXISTS `Review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Review` (
  `Review_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Schedule_Id` int(11) NOT NULL,
  `Session_Id` int(11) NOT NULL,
  `Approval` tinyint(1) NOT NULL,
  `Explanation` varchar(500) DEFAULT NULL,
  `Student_Id` int(11) NOT NULL,
  PRIMARY KEY (`Review_Id`),
  KEY `Student_Id` (`Student_Id`),
  CONSTRAINT `Review_ibfk_1` FOREIGN KEY (`Student_Id`) REFERENCES `Student_Schedule` (`Student_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Review`
--

LOCK TABLES `Review` WRITE;
/*!40000 ALTER TABLE `Review` DISABLE KEYS */;
/*!40000 ALTER TABLE `Review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `School`
--

DROP TABLE IF EXISTS `School`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `School` (
  `School_id` int(11) NOT NULL AUTO_INCREMENT,
  `School_Name` varchar(30) NOT NULL,
  `School_Description` varchar(300) NOT NULL,
  `School_Color` varchar(6) NOT NULL,
  `District_Id` int(11) NOT NULL,
  `School_Image` varchar(50) NOT NULL DEFAULT '../Images/DefaultSchool.jpg',
  PRIMARY KEY (`School_id`),
  KEY `District_Id` (`District_Id`),
  CONSTRAINT `School_ibfk_1` FOREIGN KEY (`District_Id`) REFERENCES `District` (`District_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `School`
--

LOCK TABLES `School` WRITE;
/*!40000 ALTER TABLE `School` DISABLE KEYS */;
INSERT INTO `School` VALUES (2,'Parkway Central High School','Test','000000',1,'../Images/DefaultSchool.jpg');
/*!40000 ALTER TABLE `School` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Session`
--

DROP TABLE IF EXISTS `Session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Session` (
  `Session_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Session_Hour` int(11) NOT NULL,
  `Course_Id` int(11) NOT NULL,
  `School_Id` int(11) NOT NULL,
  `Staff_Id` int(11) NOT NULL,
  `Staff_Id2` int(11) DEFAULT NULL,
  `Staff_Id3` int(11) DEFAULT NULL,
  PRIMARY KEY (`Session_Id`),
  KEY `Course_Id` (`Course_Id`),
  KEY `School_Id` (`School_Id`),
  KEY `Staff_Id` (`Staff_Id`),
  CONSTRAINT `Session_ibfk_1` FOREIGN KEY (`Course_Id`) REFERENCES `Course` (`Course_Id`),
  CONSTRAINT `Session_ibfk_2` FOREIGN KEY (`School_Id`) REFERENCES `School` (`School_id`),
  CONSTRAINT `Session_ibfk_3` FOREIGN KEY (`Staff_Id`) REFERENCES `Staff` (`Staff_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Session`
--

LOCK TABLES `Session` WRITE;
/*!40000 ALTER TABLE `Session` DISABLE KEYS */;
INSERT INTO `Session` VALUES (1,1,4,2,2,NULL,NULL),(2,1,38,2,21,NULL,NULL),(3,1,39,2,21,NULL,NULL),(4,2,11,2,70,NULL,NULL),(5,2,12,2,70,NULL,NULL),(6,3,60,2,49,NULL,NULL),(7,3,61,2,49,NULL,NULL),(8,3,63,2,69,NULL,NULL),(9,4,236,2,11,NULL,NULL),(10,4,237,2,11,NULL,NULL),(11,5,102,2,39,NULL,NULL),(12,5,103,2,39,NULL,NULL),(13,6,219,2,65,NULL,NULL),(14,6,220,2,65,NULL,NULL),(15,7,210,2,62,NULL,NULL),(16,7,211,2,26,NULL,NULL),(17,8,200,2,36,NULL,NULL),(18,8,201,2,36,NULL,NULL);
/*!40000 ALTER TABLE `Session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Staff`
--

DROP TABLE IF EXISTS `Staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Staff` (
  `Staff_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Last_Name` varchar(30) NOT NULL,
  `First_Name` varchar(30) NOT NULL,
  `Prefix` varchar(5) DEFAULT NULL,
  `Is_Admin` tinyint(1) NOT NULL DEFAULT '0',
  `Image` varchar(50) NOT NULL DEFAULT '../Images/DefaultStaff.jpg',
  `Password` varchar(30) NOT NULL,
  `Department_Id` int(11) NOT NULL,
  `Email` varchar(50) NOT NULL,
  PRIMARY KEY (`Staff_Id`),
  KEY `Department_Id` (`Department_Id`),
  CONSTRAINT `Staff_ibfk_1` FOREIGN KEY (`Department_Id`) REFERENCES `Department` (`Department_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Staff`
--

LOCK TABLES `Staff` WRITE;
/*!40000 ALTER TABLE `Staff` DISABLE KEYS */;
INSERT INTO `Staff` VALUES (1,'Admin','Master',NULL,1,'../Images/DefaultStaff.jpg','ItShouldBeTeethPaste',1,'MasterAdmin@parkwayschools.net'),(2,'Adam','Brian','Mr.',0,'../Images/DefaultStaff.jpg','changeme',8,'badam@parkwayschools.net'),(3,'Anderson','Andrea','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',3,'aanderson@parkwayschools.net'),(4,'Baker','Stephanie','Ms.',0,'../Images/DefaultStaff.jpg','changeme',8,'sbaker3@parkwayschools.net'),(5,'Banta','Ryan','Mr.',0,'../Images/DefaultStaff.jpg','changeme',8,'rbanta@parkwayschools.net'),(6,'Beal','Heather','Ms.',0,'../Images/DefaultStaff.jpg','changeme',2,'hbeal@parkwayschools.net'),(7,'Beazley','Matt','Mr.',0,'../Images/DefaultStaff.jpg','changeme',5,'mbeazley@parkwayschools.net'),(8,'Biggs','Nora','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',3,'nbiggs@parkwayschools.net'),(9,'Bosomworth','Jeanette','Ms.',0,'../Images/DefaultStaff.jpg','changeme',4,'jbosomworth@parkwayschools.net'),(10,'Bradley','Joseph','Mr.',0,'../Images/DefaultStaff.jpg','changeme',5,'jbradley@parkwayschools.net'),(11,'Brown','Renell','Ms.',0,'../Images/DefaultStaff.jpg','changeme',4,'rbrown4@parkwayschools.net'),(12,'Burnett','Kathy','Ms.',0,'../Images/DefaultStaff.jpg','changeme',4,'kburnett@parkwayschools.net'),(13,'Byrd','Janell','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',2,'jbyrd@parkwayschools.net'),(14,'Carr','Kimberly','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',12,'kcarr@parkwayschools.net'),(15,'Caruso','Gina','Ms.',0,'../Images/DefaultStaff.jpg','changeme',2,'gcaruso@parkwayschools.net'),(16,'Deelo','Jaclyn','Ms.',0,'../Images/DefaultStaff.jpg','changeme',6,'jdeelo@parkwayschools.net'),(17,'Deffenbaugh','Cara','Ms.',0,'../Images/DefaultStaff.jpg','changeme',5,'cdeffenbaugh@parkwayschools.net'),(18,'Duffin','Alyce','Ms.',0,'../Images/DefaultStaff.jpg','changeme',3,'aduffin@parkwayschools.net'),(19,'Duncan','Nicole','Ms.',0,'../Images/DefaultStaff.jpg','changeme',4,'nduncan@parkwayschools.net'),(20,'Goldenberg','Mark','Mr.',0,'../Images/DefaultStaff.jpg','changeme',8,'mgoldenberg@parkwayschools.net'),(21,'Goodrich','Rene','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',2,'rgoodrich@parkwayschools.net'),(22,'Grabow','Hilary','Ms.',0,'../Images/DefaultStaff.jpg','changeme',6,'hgrabow@parkwayschools.net'),(23,'Guilfoyle','Brian','Mr.',0,'../Images/DefaultStaff.jpg','changeme',5,'bguilfoyle@parkwayschools.net'),(24,'Haley','Colleen','Ms.',0,'../Images/DefaultStaff.jpg','changeme',3,'chaley@parkwayschools.net'),(25,'Halteman','Rick','Mr.',0,'../Images/DefaultStaff.jpg','changeme',2,'rhalteman@parkwayschools.net'),(26,'Herberger','Keith','Mr.',0,'../Images/DefaultStaff.jpg','changeme',8,'kherberger@parkwayschools.net'),(27,'Hoormann','Melissa','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',2,'mhoormann@parkwayschools.net'),(28,'Hoover','Doug','Mr.',0,'../Images/DefaultStaff.jpg','changeme',5,'jhoover@parkwayschools.net'),(29,'Jafari','David','Mr.',0,'../Images/DefaultStaff.jpg','changeme',5,'djafari1@parkwayschools.net'),(30,'Johnson','Lee','Mr.',0,'../Images/DefaultStaff.jpg','changeme',4,'ljohnson3@parkwayschools.net'),(31,'Karfs','Beth','Ms.',0,'../Images/DefaultStaff.jpg','changeme',4,'bkarfs@parkwayschools.net'),(32,'Kazanecki','Thomas','Mr.',0,'../Images/DefaultStaff.jpg','changeme',4,'tkazanecki@parkwayschools.net'),(33,'Keating','Christy','Ms.',0,'../Images/DefaultStaff.jpg','changeme',7,'ckeating@parkwayschools.net'),(34,'Keller','Sue','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',11,'skeller@parkwayschools.net'),(35,'Kelley','Shana','Ms.',0,'../Images/DefaultStaff.jpg','changeme',4,'skelley1@parkwayschools.net'),(36,'Kelty','Dan','Mr.',0,'../Images/DefaultStaff.jpg','changeme',7,'dkelty@parkwayschools.net'),(37,'Kim','Skylar','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',8,'skim1@parkwayschools.net'),(38,'King','Ryan','Mr.',0,'../Images/DefaultStaff.jpg','changeme',12,'jking3@parkwayschools.net'),(39,'King','Ryan','Mr.',0,'../Images/DefaultStaff.jpg','changeme',4,'jking3@parkwayschools.net'),(40,'King','Susan','Dr.',0,'../Images/DefaultStaff.jpg','changeme',8,'sueking@parkwayschools.net'),(41,'Kirby','Rick','Mr.',0,'../Images/DefaultStaff.jpg','changeme',4,'rkirby@parkwayschools.net'),(42,'Krone','Cynthia','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',3,'ckrone@parkwayschools.net'),(43,'Lehmann','Kurt','Mr.',0,'../Images/DefaultStaff.jpg','changeme',2,'klehmann@parkwayschools.net'),(44,'Loomis','Anilise','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',3,'aloomis@parkwayschools.net'),(45,'Lovera','Jason','Mr.',0,'../Images/DefaultStaff.jpg','changeme',3,'jlovera@parkwayschools.net'),(46,'Lueken','Sarah','Ms.',0,'../Images/DefaultStaff.jpg','changeme',12,'slueken@parkwayschools.net'),(47,'Maloney','Cassandra','Ms.',0,'../Images/DefaultStaff.jpg','changeme',12,'cmaloney@parkwayschools.net'),(48,'Merriman','Hannah','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',2,'hmerriman@parkwayschools.net'),(49,'Metropoulos','Kembra','Ms.',0,'../Images/DefaultStaff.jpg','changeme',3,'kmetropoulos@parkwayschools.net'),(50,'Meyer','Jennifer','Ms.',0,'../Images/DefaultStaff.jpg','changeme',4,'jmeyer3@parkwayschools.net'),(51,'Meyer','Meghan','Ms.',0,'../Images/DefaultStaff.jpg','changeme',11,'mmeyer@parkwayschools.net'),(52,'Michael','Laura','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',3,'lmichael@parkwayschools.net'),(53,'Mueller','Aaron','Mr.',0,'../Images/DefaultStaff.jpg','changeme',11,'amueller@parkwayschools.net'),(54,'Mueller','Ron','Mr.',0,'../Images/DefaultStaff.jpg','changeme',7,'rmueller@parkwayschools.net'),(55,'O\'Leary','Terri','Ms.',0,'../Images/DefaultStaff.jpg','changeme',11,'toleary@parkwayschools.net'),(56,'Pannett','Todd','Mr.',0,'../Images/DefaultStaff.jpg','changeme',12,'tpannett@parkwayschools.net'),(57,'Papulis','Peter','Mr.',0,'../Images/DefaultStaff.jpg','changeme',2,'ppapulis@parkwayschools.net'),(58,'Patton','Joni','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',8,'jpatton1@parkwayschools.net'),(59,'Perez','Annie','Ms.',0,'../Images/DefaultStaff.jpg','changeme',7,'aperez1@parkwayschools.net'),(60,'Piening','Mary','Ms.',0,'../Images/DefaultStaff.jpg','changeme',12,'mpiening@parkwayschools.net'),(61,'Pikaard','Matt','Mr.',0,'../Images/DefaultStaff.jpg','changeme',7,'mpikaard@parkwayschools.net'),(62,'Poole','Cameron','Mr.',0,'../Images/DefaultStaff.jpg','changeme',8,'cpoole@parkwayschools.net'),(63,'Ream','Kristin','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',4,'kream@parkwayschools.net'),(64,'Reeves','Sarah','Ms.',0,'../Images/DefaultStaff.jpg','changeme',2,'sreeves1@parkwayschools.net'),(65,'Robertson','Brad','Mr.',0,'../Images/DefaultStaff.jpg','changeme',8,'brobertson1@parkwayschools.net'),(66,'Rudolph','Mattie','Ms.',0,'../Images/DefaultStaff.jpg','changeme',3,'mrudolph@parkwayschools.net'),(67,'Ruizdelarbol','Maureen','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',7,'mruizdelarbol@parkwayschools.net'),(68,'Schaefer','Tom','Mr.',0,'../Images/DefaultStaff.jpg','changeme',2,'tschaefer@parkwayschools.net'),(69,'Schaefer','Christian','Mr.',0,'../Images/DefaultStaff.jpg','changeme',3,'cschaeffer@parkwayschools.net'),(70,'Schwent','Karen','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',12,'kschwent@parkwayschools.net'),(71,'Sellers','Thomas','Mr.',0,'../Images/DefaultStaff.jpg','changeme',8,'tsellers@parkwayschools.net'),(72,'Silvermintz','Ben','Mr.',0,'../Images/DefaultStaff.jpg','changeme',5,'bsilvermintz@parkwayschools.net'),(73,'Staszcuk','Christie','Ms.',0,'../Images/DefaultStaff.jpg','changeme',7,'cstaszcuk@parkwayschools.net'),(74,'Stout','Christopher','Mr.',0,'../Images/DefaultStaff.jpg','changeme',3,'cstout@parkwayschools.net'),(75,'Stricker','Christine','Ms.',0,'../Images/DefaultStaff.jpg','changeme',3,'cstricker@parkwayschools.net'),(76,'Trecker','Linda','Ms.',0,'../Images/DefaultStaff.jpg','changeme',6,'ltrecker@parkwayschools.net'),(77,'Turnage','Lori','Ms.',0,'../Images/DefaultStaff.jpg','changeme',7,'lturnage@parkwayschools.net'),(78,'Voss','Nicole','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',5,'nvoss@parkwayschools.net'),(79,'Weindel','Julie','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',12,'jweindel@parkwayschools.net'),(80,'Williamson','Andrea','Mrs.',0,'../Images/DefaultStaff.jpg','changeme',7,'awilliamson@parkwayschools.net'),(81,'Wilson','Nathan','Mr.',0,'../Images/DefaultStaff.jpg','changeme',2,'nwilson@parkwayschools.net'),(82,'Wright','Michael','Mr.',0,'../Images/DefaultStaff.jpg','changeme',11,'mwright@parkwayschools.net');
/*!40000 ALTER TABLE `Staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Student`
--

DROP TABLE IF EXISTS `Student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Student` (
  `Student_Id` int(11) NOT NULL AUTO_INCREMENT,
  `First_Name` varchar(30) NOT NULL,
  `Last_Name` varchar(30) NOT NULL,
  `Email` varchar(40) NOT NULL,
  `Password` varchar(30) NOT NULL,
  PRIMARY KEY (`Student_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student`
--

LOCK TABLES `Student` WRITE;
/*!40000 ALTER TABLE `Student` DISABLE KEYS */;
INSERT INTO `Student` VALUES (1,'Christopher','Scully','scullyc6305@parkwayschools.net','changeme');
/*!40000 ALTER TABLE `Student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Student_Schedule`
--

DROP TABLE IF EXISTS `Student_Schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Student_Schedule` (
  `Schedule_Id` int(11) NOT NULL,
  `Session_Id1` int(11) NOT NULL,
  `Session_Id2` int(11) NOT NULL,
  `Session_Id3` int(11) NOT NULL,
  `Session_Id4` int(11) NOT NULL,
  `Session_Id5` int(11) NOT NULL,
  `Session_Id6` int(11) NOT NULL,
  `Session_Id7` int(11) NOT NULL,
  `Session_Id8` int(11) NOT NULL,
  `Session_Id9` int(11) DEFAULT NULL,
  `Session_Id10` int(11) DEFAULT NULL,
  `Student_Id` int(11) NOT NULL,
  PRIMARY KEY (`Schedule_Id`),
  KEY `Session_Id1` (`Session_Id1`),
  KEY `Session_Id2` (`Session_Id2`),
  KEY `Session_Id3` (`Session_Id3`),
  KEY `Session_Id4` (`Session_Id4`),
  KEY `Session_Id5` (`Session_Id5`),
  KEY `Session_Id6` (`Session_Id6`),
  KEY `Session_Id7` (`Session_Id7`),
  KEY `Session_Id8` (`Session_Id8`),
  KEY `Student_Id` (`Student_Id`),
  CONSTRAINT `Student_Schedule_ibfk_1` FOREIGN KEY (`Session_Id1`) REFERENCES `Session` (`Session_Id`),
  CONSTRAINT `Student_Schedule_ibfk_2` FOREIGN KEY (`Session_Id2`) REFERENCES `Session` (`Session_Id`),
  CONSTRAINT `Student_Schedule_ibfk_3` FOREIGN KEY (`Session_Id3`) REFERENCES `Session` (`Session_Id`),
  CONSTRAINT `Student_Schedule_ibfk_4` FOREIGN KEY (`Session_Id4`) REFERENCES `Session` (`Session_Id`),
  CONSTRAINT `Student_Schedule_ibfk_5` FOREIGN KEY (`Session_Id5`) REFERENCES `Session` (`Session_Id`),
  CONSTRAINT `Student_Schedule_ibfk_6` FOREIGN KEY (`Session_Id6`) REFERENCES `Session` (`Session_Id`),
  CONSTRAINT `Student_Schedule_ibfk_7` FOREIGN KEY (`Session_Id7`) REFERENCES `Session` (`Session_Id`),
  CONSTRAINT `Student_Schedule_ibfk_8` FOREIGN KEY (`Session_Id8`) REFERENCES `Session` (`Session_Id`),
  CONSTRAINT `Student_Schedule_ibfk_9` FOREIGN KEY (`Student_Id`) REFERENCES `Student` (`Student_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student_Schedule`
--

LOCK TABLES `Student_Schedule` WRITE;
/*!40000 ALTER TABLE `Student_Schedule` DISABLE KEYS */;
INSERT INTO `Student_Schedule` VALUES (1,2,4,7,9,11,13,15,17,NULL,NULL,1),(2,3,5,8,10,12,14,16,18,NULL,NULL,1);
/*!40000 ALTER TABLE `Student_Schedule` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-13 22:16:19
