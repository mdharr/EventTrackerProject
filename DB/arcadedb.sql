-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema arcadedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `arcadedb` ;

-- -----------------------------------------------------
-- Schema arcadedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `arcadedb` DEFAULT CHARACTER SET utf8 ;
USE `arcadedb` ;

-- -----------------------------------------------------
-- Table `arcade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `arcade` ;

CREATE TABLE IF NOT EXISTS `arcade` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` TEXT NULL,
  `image_url` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS arcade@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'arcade'@'localhost' IDENTIFIED BY 'arcade';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'arcade'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `arcade`
-- -----------------------------------------------------
START TRANSACTION;
USE `arcadedb`;
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (1, 'Galloping Ghost Arcade', 'The GALLOPING GHOST ARCADE provides a video gaming experience like no other! We are the LARGEST video arcade in the USA, and currently have over 885+ games to play and have more games up and running all the time! Unlike most arcades, we do not use quarters or tokens. All of our games are set to FREE PLAY! We charge a $25 door fee and then you can come in and play ALL the games for as long as you want! We are open until 2AM on Friday and Saturday and until 12am during the week (EVERYDAY including all holidays)! We offer Weekly, Monthly, Yearly & Lifetime Memberships as well! We are also one of the most reputable arcades for tracking high scores and world records. We currently have over 600+ World Records set here!', 'https://www.onlyinyourstate.com/wp-content/uploads/2020/12/gg-interior-il.jpg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (2, 'Barcade', 'Barcade® is the originator of the arcade bar concept and the largest operator of arcade bars in the United States. Barcade locations feature 40 to 75 video games and pinball machines mostly from the classic period of the 1980s as well as 25 to 30 American craft beers on draft. In addition to beer, Barcade locations offer a full bar with craft spirits and cocktails and creative variations on classic pub food.', 'https://barcade.com/wp-content/uploads/2021/02/Barcade_arcadegames_SB207573_533px.jpg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (3, 'Ground Kontrol Classic Arcade', 'Ground Kontrol brings the classic arcade experience into the modern era with a full bar and food nightly.\nGround Kontrol brings the classic arcade experience into the modern era with a full bar and food nightly.\nGround Kontrol brings the classic arcade experience into the modern era with a full bar and food nightly.\nGround Kontrol brings the classic arcade experience into the modern era with a full bar and food nightly.\nGround Kontrol brings the classic arcade experience into the modern era with a full bar and food nightly.', 'https://groundkontrol.com/wp-content/uploads/2015/02/Ashley-Anderson-Facebook-Cover-photo-1.jpg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (4, 'Cobra Arcade Bar', 'A Guy Walks Into A Cobra Arcade Bar. We are a 21+ bar. We offer a rotating collection of awsome, vintage arcade games at both of our locations. Yes, we have pinball. All of our games operate on tokens and there is a token machine at each location. If you plan to visit both locations the tokens are transferrable. We can reserve tables before 8pm and we are also available for private parties. Come play with us!', 'https://cobraarcadebar.com/wp-content/uploads/2018/07/cobra-tucson.jpg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (5, 'Button Mash', 'Not only does Button Mash have a bevy of nostalgia-fueled arcade and pinball fun contained within it, but it also offers some physical activities in the form of skeeball and air hockey. There are so many arcade cabinets to stay busy with while you\'re there. And once your stomach starts growling uncontrollably, you can pull up on the Mexican cuisine attached to it called Tacos 1986. There\'s some good booze to indulge in here too, so your Friday and Saturday nights are covered if you frequent Button Mash.', 'https://www.hollywoodreporter.com/wp-content/uploads/2017/03/unspecified.jpeg_copy.jpg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (6, 'Coin-Op Game Room', 'Come check out the original Coin-Op Game Room — the first arcade bar in sunny San Diego! Nestled in the heart of North Park, we welcome all locals and travelers in search of classic arcade games and chill vibes. While you’re here, enjoy our esteemed bar program of house cocktails, rotating craft beers, and specialty cocktails on tap. Our kitchen also serves up some mean grub to keep you going.  What are you waiting for? Put your money where your mouth is, grab your quarters and we’ll see you here for a beer!', 'https://images.squarespace-cdn.com/content/v1/5da3fd1a3b1ad128da988388/1573187962945-7KBKILWT1RLTDCMN587W/Coinop+Temecula+2nd+shoot-38.jpg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (7, '1UP Arcade Bar', 'WALL TO WALL CLASSICS ON THE FLOOR. From Donkey Kong, Frogger, Street Fighter, or Tapper... WE HAVE THEM ALL!! So get down to The 1UP Video Game Bar & get your name on the leaderboard.', 'https://the1uparcadebar.com/wp-content/uploads/2018/10/colfax-exterior-slide.jpg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (8, 'Barcadia New Orleans', 'Welcome to Barcadia & Ohm Lounge! We are your home for live events, musical performances, live Dj sets, great food, and fun. If all that dancing gets you tired, remember to check out our new menu, filled with love, laughter, and delicious fried chicken. The only thing missing is a nap-time towel… because you may not want to leave this place!', 'https://images.getbento.com/accounts/0c8793a5bd2d04eef06451ca04886091/media/images/97011BryceEllPhotography-0012_1.jpg?w=1200&fit=max&auto=compress,format');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (9, 'Up-Down Arcade Bar', 'Up-Down is an arcade bar featuring games from the ‘80s and ‘90s, pinball machines, skeeball alleys, Nintendo 64 console gaming, and more.', 'https://nashvilleguru.com/officialwebsite/wp-content/uploads/2021/09/Up-Down-Nashville-30.jpg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (10, 'Headquarters Beercade', 'Headquarters Beercade, one of the first arcade bars in Chicago, lines the space with 70+ vintage arcade games and pinball machines as Donkey Kong, NBA Jam, Rampage, Frogger, Game of Thrones, and more! Head back in time with HQ and JOIN US IN OUR Nostalgic wonderland for a night full of arcade games, beer, cocktails, pizza, and more.', 'https://static.wixstatic.com/media/04ebdd_1841e3dd31514d69bed38f05bfac6f3e~mv2.jpg/v1/fit/w_2500,h_1330,al_c/04ebdd_1841e3dd31514d69bed38f05bfac6f3e~mv2.jpg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (11, 'Shorty\'s', 'Shorty\'s will quickly become a go-to destination for you if you reside in the Seattle, Washington area. There\'s a decent amount of arcade games and pinball cabinets set up in Shorty\'s for you to spend an entire evening with. Once you\'re done playing Robotron and Medieval Madness to death, you can switch it up and hop into some bowling via the old-school coin-op machine United\'s Lucky Bowler. Make sure you munch on a Shorty Dog while you\'re there!', 'https://www.seattleweekly.com/wp-content/uploads/2016/08/web1_160803-SEA-shortys.jpg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (12, 'Kung-Fu Saloon', 'Kung Fu Saloon is a Texas-based bar and restaurant with locations in Austin, Houston, Dallas, Fort Worth and Nashville, Tennessee. We’ve been serving up pickle shots, crazy Friday nights, and Sunday Fundays since opening our Downtown Austin location in 2009. Each of our locations are home to 18+ vintage arcade games like Galaga, Centipede, Ms. Pacman, NBA Jam, Mortal Kombat, Golden Tee, Big Buck Hunter and plenty more. The fun continues with shuffleboard, foosball, ping pong, ALWAYS FREE skee ball lanes, Giant Jenga, Giant Connect Four and board games.', 'https://kungfusaloon.com/wp-content/uploads/2021/12/Dallas_Gallery-Image_05-1.jpg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (13, 'The Detour', 'The Detour brings to you a re-imagined version of the neighborhood arcade and interactive space. ', 'https://cdn.sfstation.com/assets/images/businesses/69/389862691305876868_orig.jpg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (14, 'Logan Arcade', 'We offer a large variety of classic and modern arcade games, pinball, fighting games, the amazing 10-player Killer Queen Arcade, and more! The most AND best-maintained in the city of Chicago since 2014!', 'https://media.timeout.com/images/101642829/image.jpg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (15, '16-Bit Bar + Arcade', 'OVER 40 CLASSICS ON THE FLOOR! Whether it\'s Donkey Kong, Frogger, Street Fighter, or Tapper... You drink, YOU PLAY FOR FREE. So get over here and get your name on the leaderboard.', 'https://cbs4indy.com/wp-content/uploads/sites/22/2020/01/16-bit-outside-1.jpg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (16, 'Wonderville', 'Wonderville was founded by husband-and-wife team Mark Kleback and Stephanie Gross. With over 10 years of experience working with DIY music venues across Brooklyn like Death By Audio, Silent Barn, Market Hotel, and Secret Project Robot, the duo decided to bring their combined experience to a new space: an indie arcade gallery and bar.', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F425579859%2F19374403075%2F1%2Foriginal.20230116-164205?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C300%2C1800%2C900&s=71573927c7e7d7739b98c917e21edd4c');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (17, 'Jackbar', 'This place is defined by four themes you’ll most likely want to indulge in - music, booze, beer, and pinball. While you’re busying yourself with those first three activities, you can get also get caught up on all the classic and modern pinball tables at your disposal. Catching a buzz and working it off through some intense pinball sessions with tables inspired by Rick & Morty, Twilight Zone, and Stranger Things sounds like a great time, right? Exactly! Jackbar is the perfect destination for folks that love to embark on random dive bar crawls every other weekend.', 'https://fastly.4sqi.net/img/general/600x600/2508056_owfw98xS6SFw9_4SP9lZNQXG_5AH-AQxJzYNiKKnu-M.jpg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (18, 'Emporium Arcade Bars', 'Welcome to the most innovative entertainment destination near you! Emporium is the best arcade bar + live events venue offering everything from classic arcade games to pinball, professional sound and lights, flexible party solutions, and tons more!', 'https://www.emporiumarcadebar.com/wp-content/uploads/2021/10/1_LOU9014-1024x681-1.jpeg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (19, 'SilverBall Retro Arcade', 'The Silverball Museum Arcade, located in Asbury Park NJ is a living, breathing and blinking tribute to our pinball and video gaming past. With 600 games* in rotation, we are sure you will find your favorites while getting to know and enjoy some new machines.', 'https://www.silverballmuseum.com/asbury-park/wp-content/uploads/sites/2/2016/05/j_murphy_03.jpg');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (20, 'Boxcar Bar + Arcade', 'Boxcar Bar + Arcade is an NC based arcade bar concept with locations in Raleigh, Durham & Greensboro. Each location offers dozens of arcade and pinball games plus free console gaming systems, Skeeball, air hockey and more.', 'https://i0.wp.com/bestofthebull.com/wp-content/uploads/2019/01/boxcar-1-of-34-copy.jpg?fit=1800%2C1202');
INSERT INTO `arcade` (`id`, `name`, `description`, `image_url`) VALUES (21, 'GameOn Bar+Arcade', 'We are a bar+arcade that welcomes newcomers, or if you’re just passing through, we’ll make you feel right at home. We have ice cold beer, wine, and your favorite cocktails ready to serve you. If you’re looking for a lively, laid-back and welcoming bar+arcade, this is the spot for you!', 'https://uploads-ssl.webflow.com/5f455c0881206155ae250e23/627dd57715df37837dd4f214_img_0368.jpg');

COMMIT;

