-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2019 at 04:00 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `secure_code`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `salary` int(11) NOT NULL,
  `money` int(11) NOT NULL DEFAULT '1000',
  `json_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `password`, `salary`, `money`, `json_data`) VALUES
(1, 'Anakin', 'Skywalker', 'pass111', 100000, 406500, '{\"certification\":[{\"name\":\"Java EE\",\"year\":2009},{\"name\":\"CCNA Security\",\"year\":2010},{\"name\":\"aaa\",\"year\":2018},{\"name\":\"aaa\",\"year\":2018},{\"name\":\"aaa\",\"year\":2018},{\"name\":\"aaa\",\"year\":2018},{\"name\":\"CodeCamp\",\"year\":2018},{\"name\":\"CodeCamp2\",\"year\":2018},{\"name\":\"CodeCamp3\",\"year\":2018},{\"name\":\"CodeCamp4\",\"year\":2018},{\"name\":\"aaa\",\"year\":2018},{\"name\":\"CodeCamp4\",\"year\":2018},{\"name\":\"CodeCamp5\",\"year\":2018},{\"name\":\"aaa\",\"year\":2018},{\"name\":\"aaa\",\"year\":2018}]}'),
(2, 'Luke', 'Skywalker', 'pass112', 400000, 198900, '{\"certification\":[{\"name\":\".NET Core\",\"year\":2016},{\"name\":\"CCNA Networking\",\"year\":2015}]}'),
(3, 'Storm1', 'Trooper', 'pass113', 90000, 19900, '{\"certification\":[{\"name\":\"Node.JS Enterprise\",\"year\":2016},{\"name\":\"CCNA Cloud\",\"year\":2015}]}'),
(4, 'Storm2', 'Trooper', 'pass114', 90000, 29900, '{\"certification\":[{\"name\":\".NET Core\",\"year\":2016},{\"name\":\"CCNA Networking\",\"year\":2015}]}'),
(5, 'Storm3', 'Trooper', 'pass115', 50000, 39900, '{\"certification\":[{\"name\":\"Node.JS Enterprise\",\"year\":2016},{\"name\":\"CCNA Cloud\",\"year\":2015}]}'),
(6, 'Storm4', 'Trooper', 'pass116', 30000, 49900, '{\"certification\":[{\"name\":\"Java EE\",\"year\":2009},{\"name\":\"CCNA Security\",\"year\":2010}]}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
