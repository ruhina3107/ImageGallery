-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2021 at 02:03 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wikiride`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--


--
-- Table structure for table `appslider`
--

CREATE TABLE `appslider` (
  `Id` bigint(20) NOT NULL,
  `Title` varchar(45) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `Type` varchar(10) DEFAULT 'user',
  `CreateAt` timestamp NULL DEFAULT current_timestamp(),
  `UpdateAt` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `appslider`
--

INSERT INTO `appslider` (`Id`, `Title`, `Description`, `Image`, `Type`, `CreateAt`, `UpdateAt`) VALUES
(25, 'WIKIRIDE DRIVER', 'Be your own Boss!!', 'http://wiki.lagoontechnologies.com:4200/public/public/uploads/provider/6506ad0e-4044-4f8d-88b5-589cdf3c1322.jpg', 'provider', '2020-11-06 12:29:22', '2021-05-06 07:36:55'),
(34, 'WIKIRIDE DRIVER', 'More Earnings with Zero Commissions !!', 'http://wiki.lagoontechnologies.com:4200/public/public/uploads/provider/49b5def2-cd37-4c59-ad73-c9da5a23d338.png', 'provider', '2021-04-26 11:49:22', '2021-05-06 08:37:41'),
(40, 'WIKIRIDE', 'Tap your phone & get your ride in minutes!!', 'http://wiki.lagoontechnologies.com:4200/public/public/uploads/user/0bded193-ee77-4da7-a38a-ccf4767b1ddf.JPG', 'user', '2021-05-06 09:27:40', NULL),
(41, 'WIKIRIDE', 'Anytime, Anywhere at the lowest cost!!', 'http://wiki.lagoontechnologies.com:4200/public/public/uploads/user/8fd5b71f-561b-4503-9799-9bf77ac13967.jpeg', 'user', '2021-05-06 09:31:06', NULL);

--
-- Indexes for table `appslider`
--
ALTER TABLE `appslider`
  ADD PRIMARY KEY (`Id`);

