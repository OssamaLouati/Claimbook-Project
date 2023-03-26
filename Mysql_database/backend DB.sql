-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2023 at 09:28 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backend`
--

-- --------------------------------------------------------

--
-- Table structure for table `claims`
--

CREATE TABLE `claims` (
  `id` int(255) NOT NULL,
  `student_id` int(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `dateCreated` datetime NOT NULL DEFAULT current_timestamp(),
  `state` varchar(255) DEFAULT 'Pending',
  `picture_url` varchar(255) DEFAULT NULL,
  `room` int(255) NOT NULL,
  `pavillon` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `claims`
--

INSERT INTO `claims` (`id`, `student_id`, `type`, `description`, `dateCreated`, `state`, `picture_url`, `room`, `pavillon`) VALUES
(59, 2, 'electrical', 'aaaaaaaaaaaaaaaaaa', '2023-03-17 00:00:00', 'Pending', 'C:/Users/louat/Desktop/data/1f9e7338-c172-4da5-8d9f-b7acec0b64d5.jpg', 424, 1),
(60, 2, 'electrical', 'aaaaaaaaaaaaaaaaaa', '2023-03-17 00:00:00', 'Pending', 'C:/Users/louat/Desktop/data/1f9e7338-c172-4da5-8d9f-b7acec0b64d5.jpg', 424, 1),
(61, 2, 'electrical', 'aaaaaaaaaaaaaaaaaa', '2023-03-17 00:00:00', 'Pending', 'C:/Users/louat/Desktop/data/1f9e7338-c172-4da5-8d9f-b7acec0b64d5.jpg', 424, 1),
(62, 2, 'electrical', 'aaaaaaaaaaaaaaaaaa', '2023-03-17 00:00:00', 'Pending', 'C:/Users/louat/Desktop/data/1f9e7338-c172-4da5-8d9f-b7acec0b64d5.jpg', 424, 1),
(63, 2, 'electrical', 'bchwya 3la gelbii', '2023-03-17 00:00:00', 'Pending', 'C:/Users/louat/Desktop/data/5f8150c7-a1f3-4049-912a-356cec9b7afa.jpg', 424, 1),
(64, 2, 'electrical', 'aaaaaaaaaaaaaaaaaa', '2023-03-17 00:00:00', 'Pending', 'C:/Users/louat/Desktop/data/1f9e7338-c172-4da5-8d9f-b7acec0b64d5.jpg', 424, 1),
(65, 2, 'electrical', 'aaaaaaaaaaaaaaaaaa', '2023-03-17 00:00:00', 'Pending', 'C:/Users/louat/Desktop/data/1f9e7338-c172-4da5-8d9f-b7acec0b64d5.jpg', 424, 1),
(73, 2, 'pipe', 'no mames wayyy', '2023-03-18 19:23:34', 'Pending', 'C:/Users/louat/Desktop/data/f1b5c6a1-4e32-4330-9e49-3911f1ba6a60.jpg', 424, 1),
(74, 2, 'pipe', 'oraalyy weeee', '2023-03-18 21:09:07', 'Pending', 'C:/Users/louat/Desktop/data/310da65d-68a7-4924-9f3b-f22415461f0b.jpg', 424, 1);

-- --------------------------------------------------------

--
-- Table structure for table `technicians`
--

CREATE TABLE `technicians` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `technicians`
--

INSERT INTO `technicians` (`id`, `name`, `email`, `password`) VALUES
(2, 'Jhon Doe', 'jhon.doe@inpt.ac.ma', '12102001');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `bio` varchar(1255) DEFAULT NULL,
  `skills` varchar(255) DEFAULT NULL,
  `room` int(11) DEFAULT NULL,
  `pavillon` int(11) DEFAULT NULL,
  `roommate` tinyint(4) DEFAULT NULL,
  `niveau` varchar(45) DEFAULT NULL,
  `filiere` varchar(45) DEFAULT NULL,
  `avatar` varchar(225) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `bio`, `skills`, `room`, `pavillon`, `roommate`, `niveau`, `filiere`, `avatar`, `gender`) VALUES
(1, 'khouloud taouchikht', 'taou@ine.mail.ma', 'khouloud', 'I’m try to learn everything about Software Engineering (JAVA developement, Web Frameworks) I like solving problems. I like coding. My reality is code, my language is code. I live in my cloud server with my services and APIs, building apps with the best technology stack.', 'html css javascript', 101, 2, 1, 'ine2', 'aseds', 'https://www.linkpicture.com/q/me_45.jpg', 'Female'),
(2, 'oussama louati', 'oussama@ine.mail.ma', 'oussama', 'I’m currently learning everything about Software Engineering (JAVA developement, Web Frameworks), also i\'m passionate about Machine Learning, Applied Statistics, Database Management System \'Oracle\' .I’m currently working on full stack Web Developement and UI/UX design', 'html css javascript', 12, 1, 0, 'ine2', 'aseds', '', 'Male'),
(3, 'Jory Carlick', 'jcarlick0@dyndns.org', 'sjhbcjbsdj', 'I am an aspiring data scientist who enjoys connecting the dots: be it ideas from different disciplines, people from different teams, or applications from different industries. I have strong technical skills and an academic background in engineering, statistics, and machine learning.', 'Communication skills  Python  Java  C++', 121, 2, 0, 'ine2', 'aseds', 'https://robohash.org/estutrerum.png?size=50x50&set=set1', 'Male'),
(4, 'Kendrick Trickey', 'ktrickey1@google.co.uk', 'dcbjdcj', 'I am a full-stack software engineer and writer. I love programming, reading, writing and speaking.As a software engineer, I enjoy using my obsessive attention to detail, my unequivocal love for making things that change the world.', 'Humanitarian Assistance  visualization  Data analytics', 123, 1, 1, 'ine3', 'cloud', 'https://robohash.org/omnisnihilipsa.png?size=50x50&set=set1', 'Male'),
(5, 'Amye Gott', 'agott2@scribd.com', 'cdbbb', 'I am a third year Machine Learning . Apart from that I am seasonal ML developer that loves writing articles (on Machine Learning, Data Science, Productivity and PhD Tips) and contributing to open source.', 'Artificial Intelligence  Machine Learning  DevOps', 12, 2, 0, 'ine2', 'smart', 'https://robohash.org/doloremevenietconsequatur.png?size=50x50&set=set1', 'Female'),
(6, 'Tiffanie Tomasi', 'ttomasi3@dell.com', 'bdcbj', 'I am a student pursuing a degree in Cybersecurity Engineering. I am driven by a passion for protecting critical systems and data from malicious actors and natural disasters', 'SQL NoSQL HTML CSS JavaScript', 123, 3, 1, 'ine1', 'iccn', 'https://robohash.org/cumquemaioresaperiam.png?size=50x50&set=set1', 'Female'),
(7, 'Morley Buterton', 'mbuterton4@hatena.ne.jp', 'dcbjbdjc', 'hi, i\'m  a passionate self-taught full stack web developer and a freelance software engineer . my passion for software lies with dreaming up ideas and making them come true with elegant interfaces. i take great care in the experience, architecture, and code quality of the things I build.i am also an open-source enthusiast and maintainer. i learned a lot from the open-source community and i love how collaboration and knowledge sharing happened through open-source.', 'Historical Research  java  Emotional intelligence  management  c++', 132, 1, 0, 'ine2', 'amoa', 'https://robohash.org/placeatharumdolor.png?size=50x50&set=set1', 'Male'),
(8, 'Davis Common', 'dcommon5@squarespace.com', 'cdbdj', 'a strong passion for software engineering and i already shown a remarkable aptitude for programming and problem solving.', 'Emotional intelligence  java  c++ Windows Linux Kubernetes', 34, 2, 0, 'ine2', 'iccn', 'https://robohash.org/seditaqueculpa.png?size=50x50&set=set1', 'Male'),
(9, 'Ash Kennaird', 'akennaird6@prweb.com', 'dcjcjd j', 'Throughout my academic career, I have gained hands-on experience in various security technologies and practices, including network security, cryptography, and incident response. I have also taken various certifications, such as the Certified Information Systems Security Professional (CISSP), to deepen my understanding of the field.member of the university\'s computer science club and i participated in several hackathons, where i won recognition for my skills and creativity.', 'Adaptability  speaking  html  css  Data analytics', 13, 3, 1, 'ine2', 'data', 'https://robohash.org/culpautaut.png?size=50x50&set=set1', 'Male'),
(10, 'Fonsie Lutton', 'flutton7@howstuffworks.com', 'cbdjbj', 'i enjoy exploring new technologies and working on personal projects. i aspire to become a successful software engineer and make a positive impact on world', 'Communication  python  c#  java  react  Mentorship', 32, 3, 0, 'ine2', 'aseds', 'https://robohash.org/estquisipsam.png?size=50x50&set=set1', 'Male'),
(11, 'Rosalinde Pesic', 'rpesic8@list-manage.com', 'cdjcj', 'Throughout my academic career, I have gained hands-on experience in various cloud platforms, including Amazon Web Services (AWS) and Microsoft Azure. I have also taken various certifications, such as the AWS Certified Solutions Architect and the Microsoft Certified: Azure Developer Associate, to deepen my understanding of cloud technologies.', 'data science management machine learning  data science  python  css', 21, 3, 1, 'ine3', 'cloud', 'https://robohash.org/quasillumconsequuntur.png?size=50x50&set=set1', 'Female'),
(12, 'Felipe Bullick', 'fbullick9@mapy.cz', 'c d d vj j', 'my passion for software engineering has led me to take advanced computer science courses and participate in research projects related to artificial intelligence and machine learning', 'Web Applications  mobile developpement  machine learning', 34, 3, 1, 'ine2', 'sesnum', 'https://robohash.org/quisquia.png?size=50x50&set=set1', 'Male'),
(13, 'Lottie Dimsdale', 'ldimsdalea@businesswire.com', 'cd d vcj', 'i am also an active member of the university\'s robotics club and has participated in several competitions, where i have shown his exceptional skills in building and programming robots.', 'speaking  html  css  javascript  machine learning', 45, 2, 0, 'ine2', 'data', 'https://robohash.org/fugiateaquedolor.png?size=50x50&set=set1', 'Female'),
(14, 'Selig Tort', 'stortb@infoseek.co.jp', 'cdj cj', 'I m determined to become a leading software engineer and make a significant contribution to the field. I am an active member of my university\'s cybersecurity club, where I share my knowledge and collaborate with others to find creative solutions to real-world security challenges. I am also a mentor to younger students, helping them explore their interests in technology and guiding them towards a successful career in the field.', 'Strategic planning Time management  java  html  css  javascript', 87, 1, 0, 'ine2', 'iccn', 'https://robohash.org/dolormollitiaplaceat.png?size=50x50&set=set1', 'Male'),
(15, 'Cole Finan', 'cfinanc@cornell.edu', 'cd jd j', 'I have always been fascinated by the power of technology and its ability to solve complex problems. This led me to specialize in cloud computing, where I can use my technical skills to build and manage highly scalable, efficient and reliable systems', 'routing and switching firewalls java  devops  css  firebase', 14, 2, 1, 'ine1', 'amoa', 'https://robohash.org/sitnisiasperiores.png?size=50x50&set=set1', 'Male'),
(16, 'Hamilton Petow', 'hpetowd@ycombinator.com', 'c dcdn', 'I am a student pursuing a degree in Telecommunications and Network Engineering. I am driven by a passion for designing, deploying, and maintaining high-performing and secure communication networks.Throughout my academic career, I have gained hands-on experience in various network technologies, including routing and switching, network security, and wireless networks. I have also taken various certifications, such as the Cisco Certified Network Associate (CCNA), to deepen my understanding of the field.a mentor for a local coding club for high school students and enjoys teaching others about technology and programming.', 'photoshop  figma  mac  css', 4, 3, 1, 'ine2', 'aseds', 'https://robohash.org/itaquedolorblanditiis.png?size=50x50&set=set1', 'Male'),
(17, 'Dallas Emblen', 'demblene@ebay.co.uk', 'c jd jc', 'I have developed strong problem-solving and analytical skills through various projects and team collaborations. I am also a quick learner, able to adapt to new technologies and challenges as they arise I have a clear vision for her future as a software engineer and is committed to using my skills to make a positive impact on society.', 'Mentorship  coaching  react  java  c++', 67, 1, 0, 'ine1', 'data', 'https://robohash.org/iustoveritatisvoluptates.png?size=50x50&set=set1', 'Male'),
(18, 'Carmelle Shaughnessy', 'cshaughnessyf@ca.gov', 'djcbfebk', 'As a software engineering student, I have a passion for creating and developing innovative software solutions, I have developed strong problem-solving and analytical skills through various projects and team collaborations. I am also a quick learner, able to adapt to new technologies and challenges as they arise.', 'DevOps  docker  listening clear  concise speaking', 64, 2, 1, 'ine2', 'smart', 'https://robohash.org/esseetfacere.png?size=50x50&set=set1', 'Female'),
(19, 'Rosamund Laughton', 'rlaughtong@marketwatch.com', 'cdjbjedcf', 'Throughout my academic career, I have gained hands-on experience in various telecommunications and network technologies, including wired and wireless networks, routing and switching protocols, and network security. I have also worked on various projects involving the design, implementation, and troubleshooting of communication networks.My curiosity and desire to continuously learn have led me to explore various programming languages such as Java, Python, and C++.', 'Artificial Intelligence  Machine Learning  Windows Linux macOS', 35, 3, 0, 'ine3', 'sesnum', 'https://robohash.org/officiaitaquedelectus.png?size=50x50&set=set1', 'Female'),
(20, 'Hernando Teacy', 'hteacyh@ca.gov', 'edbc', 'I am a student pursuing a degree in Telecommunications and Network Engineering. I am driven by a passion for designing, implementing, and maintaining communication networks that connect people and devices.In my spare time, I like to engage in personal projects such as building mobile applications and contributing to open-source projects. I am eager to apply my skills and knowledge to real-world challenges, and I am confident that my passion for technology and security, combined with my strong technical and interpersonal skills, will make me a valuable asset to any organization.', 'Web Applications  java  machine learning', 5, 1, 1, 'ine2', 'amoa', 'https://robohash.org/rerumeaqueet.png?size=50x50&set=set1', 'Bigender'),
(21, 'Woody Emson', 'wemsoni@simplemachines.org', 'efbcd', 'I am also highly motivated to apply my technical skills to real-world problems, which is why I was drawn to the field of software engineering', 'speaking  html  css  Data analytics', 56, 3, 1, 'ine3', 'aseds', 'https://robohash.org/temporeetlibero.png?size=50x50&set=set1', 'Male'),
(22, 'Rowland Whitney', 'rwhitneyj@people.com.cn', 'dbvvfn', 'I am a student pursuing a degree in Embedded Systems Engineering. I am driven by a passion for designing and developing small, efficient, and reliable systems that interact with the physical world. In addition to my technical skills, I have developed strong problem-solving and analytical skills through various projects and team collaborations. I am also a quick learner, able to adapt to new technologies and challenges as they arise', 'Decision-making  node js  react  html', 76, 1, 1, 'ine2', 'smart', 'https://robohash.org/abnisiaut.png?size=50x50&set=set1', 'Male'),
(23, 'Osborne Neilly', 'oneillyk@nationalgeographic.com', 'edfbcb', 'I have gained valuable experience through various internships and course projects. During my last internship, I worked on a project to develop a cloud-based platform for a large retail company. The project required me to collaborate with a cross-functional team and use my skills in both front-end and back-end development.', 'management  react m angular  spring boot', 80, 2, 0, 'ine1', 'iccn', 'https://robohash.org/etoccaecatienim.png?size=50x50&set=set1', 'Male'),
(24, 'Therine Spreag', 'tspreagl@nbcnews.com', 'edcfnd', 'I am a student pursuing a degree in Embedded Systems Engineering. I am driven by a passion for creating intelligent systems that interact with the physical world.Throughout my academic career, I have gained hands-on experience in various embedded systems technologies, including microcontroller programming, embedded software development, and circuit design. I have also worked on various projects involving the design and implementation of embedded systems for various applications, such as IoT devices and robotics.I am confident that my technical skills, strong work ethic, and passion for  engineering will make me a valuable asset to any team. I am excited to continue my journey in this field and make a positive impact on the world through my work.', 'machine learning  data science  python  css', 67, 3, 1, 'ine2', 'cloud', 'https://robohash.org/molestiaequasiexplicabo.png?size=50x50&set=set1', 'Polygender'),
(25, 'Verge Radage', 'vradagem@oracle.com', 'dckbv', 'I am a student pursuing a degree in Data Engineering. I am fascinated by the vast amounts of data generated by organizations and the insights it can provide, and I am eager to use my technical skills to turn data into actionable insights.', 'Communication  java  react  python', 76, 1, 1, 'ine1', 'iccn', 'https://robohash.org/quasianimiomnis.png?size=50x50&set=set1', 'Genderqueer'),
(26, 'Monika Melrose', 'mmelrosen@who.int', 'dbcndo', 'i have been honing his skills since high school. I  have a deep interest in software development and is determined to make a positive impact in the field through my work. Throughout my academic career, I have gained hands-on experience in various data technologies, including SQL, NoSQL databases, and big data platforms such as Hadoop and Spark. I have also taken various courses in data visualization and data analysis, allowing me to effectively communicate my findings to non-technical stakeholders', 'routing and switching firewalls  java  devops', 43, 2, 1, 'ine2', 'aseds', 'https://robohash.org/etestnecessitatibus.png?size=50x50&set=set1', 'Female'),
(27, 'Brett Tessington', 'btessingtono@dmoz.org', 'cdeoo', 'I am a student pursuing a degree in Data Engineering. I am driven by a passion for understanding patterns in large data sets and using that knowledge to make informed decisions.I  have already made a name for myself in the student community, participating in hackathons and coding competitions where i have won several awards. i have also taken part in various open-source projects, contributing to their development and learning from the experience', 'Time management  java  html  css  javascript', 23, 3, 1, 'ine1', 'aseds', 'https://robohash.org/veldelenitimolestiae.png?size=50x50&set=set1', 'Male'),
(28, 'Willette Kennaird', 'wkennairdp@paginegialle.it', 'enhcfov', 'I am a student pursuing a degree in Applied Mathematics and Optimization Algorithms (AMOA). I am driven by a passion for finding the most efficient and optimal solutions to complex problems.Aside from my academic achievements, i have also gained valuable experience through internships at tech companies, where i have worked on projects ranging from mobile app development to web development. These experiences have taught me the importance of teamwork, effective communication, and time management.', 'Software Installation  flutter  Leadership skills', 12, 3, 0, 'ine3', 'amoa', 'https://robohash.org/officiavoluptatumnon.png?size=50x50&set=set1', 'Female'),
(29, 'Tiebold London', 'tlondonq@rediff.com', 'efnvk', 'hroughout my academic career, I have gained hands-on experience in various optimization techniques, including linear programming, integer programming, and non-linear programming. I have also worked on various optimization projects, using tools such as MATLAB and Python.in my free time, i enjoy reading about new technologies, experimenting with different programming languages, and developing personal projects. i\'m also an active member of the university\'s tech club and i take on leadership roles in organizing events and workshops for fellow students.', 'AWS Azure  Google Cloud  java', 23, 1, 0, 'ine1', 'smart', 'https://robohash.org/possimusexcepturiid.png?size=50x50&set=set1', 'Male'),
(30, 'Oriana Page', 'opager@stumbleupon.com', 'ecdfnnoecf', 'i am poised to make a significant impact in the tech industry and is eager to continue learning and growing as a software engineer.', 'Windows Linux Kubernetes', 45, 2, 0, 'ine3', 'amoa', 'https://robohash.org/distinctioquidemest.png?size=50x50&set=set1', 'Female'),
(31, 'Neil Borges', 'nborgess@vinaora.com', 'ecfnovo', 'Throughout my academic career, I have gained experience in various mathematical concepts, including linear algebra, calculus, and optimization algorithms. I have also worked on various projects involving simulation, optimization, and data analysis.i am passionate about technology and programming. i iam always eager to learn new programming languages and technologies, and have a strong desire to make a positive impact in the world through my work as a  engineer.', 'Sports HTML CSS JavaScript', 56, 3, 0, 'ine2', 'data', 'https://robohash.org/providentrerumamet.png?size=50x50&set=set1', 'Male');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `claims`
--
ALTER TABLE `claims`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `technicians`
--
ALTER TABLE `technicians`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `claims`
--
ALTER TABLE `claims`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `technicians`
--
ALTER TABLE `technicians`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
