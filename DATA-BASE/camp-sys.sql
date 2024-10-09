-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 09, 2024 at 02:32 PM
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
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
