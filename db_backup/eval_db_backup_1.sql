-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: Eval
-- ------------------------------------------------------
-- Server version	5.7.21

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Course`
--

LOCK TABLES `Course` WRITE;
/*!40000 ALTER TABLE `Course` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Department`
--

LOCK TABLES `Department` WRITE;
/*!40000 ALTER TABLE `Department` DISABLE KEYS */;
INSERT INTO `Department` VALUES (1,'Administration','run this town','../Images/DefaultDepartment.jpg',2);
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Session`
--

LOCK TABLES `Session` WRITE;
/*!40000 ALTER TABLE `Session` DISABLE KEYS */;
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
  PRIMARY KEY (`Staff_Id`),
  KEY `Department_Id` (`Department_Id`),
  CONSTRAINT `Staff_ibfk_1` FOREIGN KEY (`Department_Id`) REFERENCES `Department` (`Department_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Staff`
--

LOCK TABLES `Staff` WRITE;
/*!40000 ALTER TABLE `Staff` DISABLE KEYS */;
INSERT INTO `Staff` VALUES (1,'Admin','Master',NULL,1,'../Images/DefaultStaff.jpg','ItShouldBeTeethPaste',1);
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student`
--

LOCK TABLES `Student` WRITE;
/*!40000 ALTER TABLE `Student` DISABLE KEYS */;
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

-- Dump completed on 2018-01-30 21:55:04
