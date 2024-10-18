-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2024 at 05:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `camp-sys`
--

-- --------------------------------------------------------

--
-- Table structure for table `offerimgs`
--

CREATE TABLE `offerimgs` (
  `id` int(11) NOT NULL,
  `imgpath` varchar(255) NOT NULL,
  `offerid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `offerimgs`
--

INSERT INTO `offerimgs` (`id`, `imgpath`, `offerid`) VALUES
(33, 'WhatsApp_Image_2024-07-03_at_02.19.29_a59a0757-1729164020078-c6ca459b-a870-4a80-b131-236a07e1a15c.jpg', 30),
(35, 'Screenshot_2024-10-09_175720-1729164182904-ddba9ac4-29e8-44a2-89b5-017f844b05bb.png', 32);

-- --------------------------------------------------------

--
-- Table structure for table `offers`
--

CREATE TABLE `offers` (
  `id` int(11) NOT NULL,
  `offerName` varchar(255) NOT NULL,
  `offerDescreption` text NOT NULL,
  `offerDiscount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `offers`
--

INSERT INTO `offers` (`id`, `offerName`, `offerDescreption`, `offerDiscount`) VALUES
(29, 'radwan', 'radwan', 55),
(30, 'offer name ', 'offer descreption', 40),
(32, 'shaden', 'shadenshadenshadenshaden', 33);

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `descreption` text NOT NULL,
  `startRoom` int(11) NOT NULL,
  `endRoom` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`id`, `type`, `descreption`, `startRoom`, `endRoom`) VALUES
(2, 'rad', 'rad', 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `roomimgs`
--

CREATE TABLE `roomimgs` (
  `id` int(11) NOT NULL,
  `imgpath` varchar(255) NOT NULL,
  `roomID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roomimgs`
--

INSERT INTO `roomimgs` (`id`, `imgpath`, `roomID`) VALUES
(4, 'Screenshot_(304)-1728725725047-087c7d05-1159-4264-8602-ace3d40d9389.png', 2);

-- --------------------------------------------------------

--
-- Table structure for table `roomscadule`
--

CREATE TABLE `roomscadule` (
  `id` int(11) NOT NULL,
  `roomid` int(11) NOT NULL,
  `from` date NOT NULL,
  `to` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roomscadule`
--

INSERT INTO `roomscadule` (`id`, `roomid`, `from`, `to`) VALUES
(1, 2, '2024-10-09', '2024-10-17');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `birthday` date NOT NULL,
  `gender` varchar(15) NOT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `phone`, `birthday`, `gender`, `token`) VALUES
(1, 'Radwan Mohamed', 'rm1167616@gmail.com', '$2b$10$VAdnjvQNyEUIYLGTtRdGRuhWR7MoIfXGV99O120vmPxlk.uMCuaby', '01223740125', '0000-00-00', 'male', '6ab47444b18b6bc5d57900bcce304176'),
(2, 'Radwan Mohamed', 'rmm1167616@gmail.com', '$2b$10$hDAC2lVxK63a/DgmA9htgOMIA8.Q36tOL7GCkAhmf9KovAQwqDZza', '01223740125', '0000-00-00', 'male', '7bd17495544e406dfa7dfb24322d788c'),
(3, 'Radwan Mohamed', 'rmcm1167616@gmail.com', '$2b$10$b4v4rNebn3lV/VstPYn43ewiSU1yhZJDL4zzq0YUN64o1JAyh28z2', '01223740125', '0000-00-00', 'male', '72b2137c85fec9c0e8bdde523ed00de5'),
(4, 'Radwan Mohamed', 'rfmcm1167616@gmail.com', '$2b$10$5If1dPTeqIHcrf6eayDWUO.QjDVhTwFkgg3SpQ0XSBTgJKr1ZWY5S', '01223740125', '0000-00-00', 'male', 'b1bdd12a38a940e58b12a291927df5ea'),
(5, 'Radwan Mohamed', 'rfmcvm1167616@gmail.com', '$2b$10$e/QCoTtECB9hZ3nwR76SL.aiXTPQKk6DV71hfpZCbNActnfNRRQMe', '01223740125', '0000-00-00', 'male', '26b2011109ca831491c7d09c8b0a42ec');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `offerimgs`
--
ALTER TABLE `offerimgs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `imgOfOffers` (`offerid`);

--
-- Indexes for table `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roomimgs`
--
ALTER TABLE `roomimgs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roomID` (`roomID`);

--
-- Indexes for table `roomscadule`
--
ALTER TABLE `roomscadule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roomid` (`roomid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `offerimgs`
--
ALTER TABLE `offerimgs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `offers`
--
ALTER TABLE `offers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `roomimgs`
--
ALTER TABLE `roomimgs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `roomscadule`
--
ALTER TABLE `roomscadule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `offerimgs`
--
ALTER TABLE `offerimgs`
  ADD CONSTRAINT `imgOfOffers` FOREIGN KEY (`offerid`) REFERENCES `offers` (`id`);

--
-- Constraints for table `roomimgs`
--
ALTER TABLE `roomimgs`
  ADD CONSTRAINT `roomimgs_ibfk_1` FOREIGN KEY (`roomID`) REFERENCES `room` (`id`);

--
-- Constraints for table `roomscadule`
--
ALTER TABLE `roomscadule`
  ADD CONSTRAINT `roomscadule_ibfk_1` FOREIGN KEY (`roomid`) REFERENCES `room` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
