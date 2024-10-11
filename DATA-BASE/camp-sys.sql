-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2024 at 09:25 PM
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
(12, 'WhatsApp_Image_2024-07-03_at_02.19.29_a59a0757-1728674589997-73721ffc-ab31-4029-9875-d9b862478917.jpg', 2),
(13, 'WhatsApp_Image_2024-07-03_at_02.19.31_b8e1d8f2-1728674590000-3850861f-1be5-45c4-8aa7-5a6814cc9f1d.jpg', 2),
(14, 'WhatsApp_Image_2024-07-03_at_02.19.29_a59a0757-1728674590796-669f5161-237b-4121-9dc9-352527e7bde1.jpg', 3),
(15, 'WhatsApp_Image_2024-07-03_at_02.19.31_b8e1d8f2-1728674590797-a6bcd666-b90e-465e-a676-de26694ed5f8.jpg', 3),
(16, 'WhatsApp_Image_2024-07-03_at_02.19.29_a59a0757-1728674591592-eb46b117-d3d7-4b49-9503-ef46df52b102.jpg', 4),
(17, 'WhatsApp_Image_2024-07-03_at_02.19.31_b8e1d8f2-1728674591593-4f1cc748-ad49-4d49-a1a7-c400c2ca5967.jpg', 4);

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
(2, 'offer name ', 'offer descreption', 40),
(3, 'offer name ', 'offer descreption', 40),
(4, 'offer name ', 'offer descreption', 40);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `offers`
--
ALTER TABLE `offers`
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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
