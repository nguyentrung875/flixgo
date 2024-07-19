CREATE DATABASE flixgo;
SET TIME_ZONE="+7:00";
SHOW VARIABLES LIKE '%time_zone%';

USE flixgo;

CREATE TABLE country(
	id int auto_increment,
	name varchar(50) not null,
	
	primary key(id)
);

CREATE TABLE languages(
	id int auto_increment,
	name varchar(20) not null,
	
	primary key (id)
);

CREATE TABLE actor(
	id int auto_increment,
	name varchar(50) not null,
	gender enum('F', 'M'),
	avatar text,
	
	primary key (id)
);

CREATE TABLE genre(
	id int auto_increment,
	name varchar(30) not null,
	
	primary key (id)
);

CREATE TABLE director (
	id int auto_increment,
	name varchar(100) not null,
	
	primary key(id)
);


CREATE TABLE movie_country(
	id_movie int,
	id_country int,
	
	primary key (id_movie, id_country)
);

CREATE TABLE movie_lang(
	id_movie int,
	id_lang int,
	
	primary key (id_movie, id_lang)
);

CREATE TABLE movie_actor(
	id_movie int,
	id_actor int,
	
	primary key (id_movie, id_actor)
);

CREATE TABLE movie_genre(
	id_movie int,
	id_genre int,
	
	primary key (id_movie, id_genre)
);

CREATE TABLE movie_director(
	id_movie int,
	id_director int,
	
	primary key (id_movie, id_director)
);

CREATE TABLE quality(
	id int auto_increment,
	description varchar(20),
	
	primary key (id)
);

CREATE TABLE movie (
	id int auto_increment,
	title varchar(255) not null,
	subtitle varchar(255),
	release_date date,
	description text,
	age_limit int,
	duration int ,
	views int default 3000,
	status enum('Visible', 'Hidden'),
	imdb int,
	poster_img text,
	trailer_link text,
	movie_link text,
	id_quality int,
	
	primary key(id)
);

CREATE TABLE movie_comment (
	id int auto_increment,
	id_movie int,
	id_user varchar(128),
	content varchar(255),
	id_reply int,
	likes int,
	dislike int,
	create_time timestamp not null default CURRENT_TIMESTAMP(),
	
	primary key (id)
);

CREATE TABLE movie_rating (
	id_movie int,
	id_user varchar(128),
	star_rating int,
	review_title varchar(100),
	content varchar(255),
	create_time timestamp not null default CURRENT_TIMESTAMP(),
	wishlist boolean default false,
	wacthed boolean default false,
	
	primary key (id_movie, id_user)
);


CREATE TABLE roles(
	id int auto_increment,
	name varchar(20) not null,
	description varchar(50),
	
	primary key(id)
);

CREATE TABLE subscription(
	id int auto_increment,
	name varchar(20) not null,
	description text,
	price int,
	
	primary key(id)
);

CREATE TABLE orders(
	id int auto_increment,
	id_subscription int, 
	id_user varchar(128),
	start_date timestamp not null,
	end_date timestamp not null,
	
	primary key(id)
);

CREATE TABLE users(
	id varchar(128),
	username varchar(100) not null,
	password varchar(255) not null,
	create_date timestamp default CURRENT_TIMESTAMP(),
	id_role int not null,

	unique (username),
	primary key(id)
);

CREATE TABLE user_detail(
	id_user varchar(128),
	first_name varchar(100),
	last_name varchar(100),
	email varchar(100),
	dob date,
	gender enum('F', 'M'),
	phone varchar(20),
	address varchar(255),
	avatar text,
	
	unique (email),
	primary key(id_user)
);

ALTER TABLE movie_country ADD CONSTRAINT fk_movie_country_id_country FOREIGN KEY(id_country) REFERENCES country(id);
ALTER TABLE movie_country ADD CONSTRAINT fk_movie_country_id_movie FOREIGN KEY(id_movie) REFERENCES movie(id);
ALTER TABLE movie_lang ADD CONSTRAINT fk_movie_lang_id_lang FOREIGN KEY(id_lang) REFERENCES languages(id);
ALTER TABLE movie_lang ADD CONSTRAINT fk_movie_lang_id_movie FOREIGN KEY(id_movie) REFERENCES movie(id);
ALTER TABLE movie_actor ADD CONSTRAINT fk_movie_actor_id_movie FOREIGN KEY(id_movie) REFERENCES movie(id);
ALTER TABLE movie_actor ADD CONSTRAINT fk_movie_actor_id_actor FOREIGN KEY(id_actor) REFERENCES actor(id);
ALTER TABLE movie_genre ADD CONSTRAINT fk_movie_genre_id_movie FOREIGN KEY(id_movie) REFERENCES movie(id);
ALTER TABLE movie_genre ADD CONSTRAINT fk_movie_genre_id_genre FOREIGN KEY(id_genre) REFERENCES genre(id);
ALTER TABLE movie_director ADD CONSTRAINT fk_movie_director_id_movie FOREIGN KEY(id_movie) REFERENCES movie(id);
ALTER TABLE movie_director ADD CONSTRAINT fk_movie_director_id_director FOREIGN KEY(id_director) REFERENCES director(id);
ALTER TABLE movie ADD CONSTRAINT fk_movie_id_quality FOREIGN KEY(id_quality) REFERENCES quality(id);
ALTER TABLE movie_comment ADD CONSTRAINT fk_movie_comment_id_movie FOREIGN KEY(id_movie) REFERENCES movie(id);
ALTER TABLE movie_comment ADD CONSTRAINT fk_movie_comment_id_user FOREIGN KEY(id_user) REFERENCES users(id);
ALTER TABLE movie_rating ADD CONSTRAINT fk_movie_rating_id_movie FOREIGN KEY(id_movie) REFERENCES movie(id);
ALTER TABLE movie_rating ADD CONSTRAINT fk_movie_rating_id_user FOREIGN KEY(id_user) REFERENCES users(id);
ALTER TABLE user_detail ADD CONSTRAINT fk_user_detail_id_user FOREIGN KEY(id_user) REFERENCES users(id);
ALTER TABLE users ADD CONSTRAINT fk_users_id_role FOREIGN KEY(id_role) REFERENCES roles(id);
ALTER TABLE orders ADD CONSTRAINT fk_orders_id_subscription FOREIGN KEY(id_subscription) REFERENCES subscription(id);
ALTER TABLE orders ADD CONSTRAINT fk_orders_id_user FOREIGN KEY(id_user) REFERENCES users(id);

-- Tạo dữ liệu mẫu cho nhánh user
INSERT INTO roles (name)
VALUES
('ADMIN'),
('MODERATOR'),
('USER')
;

INSERT INTO subscription (name, price)
VALUES
('Starter', 0),
('Premium', 49000),
('Cinematic', 99000)
;

-- Tạo dữ liệu mẫu
INSERT INTO languages (name)
VALUES
('Tiếng Việt'),
('Tiếng Anh'),
('Tiếng Hàn'),
('Tiếng Trung')
;

INSERT INTO genre (name)
VALUES
('Hành động'),
('Hài'),
('Kinh dị'),
('Tâm lý - Lãng mạn'),
('Khoa học viễn tưởng'),
('Tội phạm'),
('Cổ trang'),
('Thảm họa'),
('Phiêu lưu'),
('Chính kịch'),
('Hoạt hình'),
('Nhạc kịch'),
('Chiến tranh'),
('Trinh thám'),
('Gia đình'),
('Âm nhạc')
;

INSERT INTO country (name)
VALUES
('Việt Nam'),
('Mỹ'),
('Hàn'),
('Trung')
;

-- Tạo 100 câu lệnh INSERT riêng biệt cho bảng actor
INSERT INTO actor (name, gender) VALUES
('Brad Pitt', 'M'),
('Scarlett Johansson', 'F'),
('Song Joong Ki', 'M'),
('Jeon Ji Hyun', 'F'),
('Leonardo DiCaprio', 'M'),
('Anne Hathaway', 'F'),
('Tom Cruise', 'M'),
('Jennifer Lawrence', 'F'),
('Robert Downey Jr.', 'M'),
('Angelina Jolie', 'F'),
('Will Smith', 'M'),
('Margot Robbie', 'F'),
('Chris Evans', 'M'),
('Emma Watson', 'F'),
('Dwayne Johnson', 'M'),
('Scarlett Johansson', 'F'),
('Channing Tatum', 'M'),
('Jennifer Lopez', 'F'),
('Henry Cavill', 'M'),
('Emilia Clarke', 'F'),
('Chris Hemsworth', 'M'),
('Brie Larson', 'F'),
('Benedict Cumberbatch', 'M'),
('Elizabeth Olsen', 'F'),
('Tom Hanks', 'M'),
('Meryl Streep', 'F'),
('Morgan Freeman', 'M'),
('Helen Mirren', 'F'),
('Russell Crowe', 'F'),
('Nicole Kidman', 'F'),
('Denzel Washington', 'M'),
('Viola Davis', 'F'),
('Hugh Jackman', 'M'),
('Halle Berry', 'F'),
('Kevin Spacey', 'M'),
('Sandra Bullock', 'F'),
('Michael Fassbender', 'M'),
('Alicia Vikander', 'F'),
('Ryan Gosling', 'M'),
('Eva Mendes', 'F'),
('Jamie Foxx', 'M'),
('Queen Latifah', 'F'),
('Mark Wahlberg', 'M'),
('Charlize Theron', 'F'),
('Michael B. Jordan', 'M'),
('Lupita Nyong', 'F'),
('Matthew McConaughey', 'M'),
('Anne Hathaway', 'F'),
('Eddie Murphy', 'M'),
('Janet Jackson', 'F'),
('Jim Carrey', 'M'),
('Cameron Diaz', 'F'),
('Will Ferrell', 'M'),
('Kristen Wiig', 'F'),
('Adam Sandler', 'M'),
('Drew Barrymore', 'F'),
('Ben Stiller', 'F'),
('Owen Wilson', 'M'),
('Vince Vaughn', 'F'),
('Jonah Hill', 'F'),
('Seth Rogen', 'F'),
('James Franco', 'F'),
('Kristen Stewart', 'F'),
('Zac Efron', 'F'),
('Vanessa Hudgens', 'F'),
('Shia LaBeouf', 'F'),
('Megan Fox', 'F'),
('Taylor Lautner', 'F'),
('Kristen Stewart', 'F'),
('Robert Pattinson', 'F'),
('Kristen Stewart', 'F'),
('Taylor Lautner', 'F'),
('Liam Neeson', 'M'),
('Maggie Gyllenhaal', 'F'),
('Liam Neeson', 'M'),
('Olivia Wilde', 'F'),
('Liam Neeson', 'M'),
('January Jones', 'F'),
('Liam Neeson', 'M'),
('Diane Kruger', 'F'),
('Liam Neeson', 'M'),
('Forest Whitaker', 'M'),
('Liam Neeson', 'M'),
('Jessica Lange', 'F'),
('Liam Neeson', 'M'),
('Frances McDormand', 'F'),
('Liam Neeson', 'M'),
('Kim Basinger', 'F'),
('Liam Neeson', 'M'),
('Helen Mirren', 'F'),
('Liam Neeson', 'M'),
('Meryl Streep', 'F'),
('Liam Neeson', 'M'),
('Judi Dench', 'F')
;

INSERT INTO director (name)
VALUES
('Steven Spielberg'),
('Frank Darabont'),
('Francis Ford Coppola'),
('Christopher Nolan'),
('Peter Jackson'),
('Quentin Tarantino'),
('Martin Scorsese'),
('David Fincher'),
('Stanley Kubrick'),
('Alfred Hitchcock'),
('Akira Kurosawa'),
('Hayao Miyazaki'),
('Bong Joon-ho'),
('Park Chan-wook'),
('Lee Chang-dong'),
('Kim Ki-young'),
('Im Kwon-taek'),
('Kang Lee'),
('Park Soo-young'),
('Hong Sang-soo'),
('Lee Joon-ik'),
('Kathryn Bigelow'),
('James Cameron'),
('Steven Soderbergh'),
('David Lynch'),
('Darren Aronofsky'),
('Wes Anderson'),
('Joel Coen'),
('Ethan Coen'),
('Alejandro González Iñárritu'),
('Alfonso Cuarón'),
('Guillermo del Toro'),
('Pedro Almodóvar'),
('Jean-Luc Godard'),
('François Truffaut'),
('Agnès Varda'),
('Luc Besson'),
('Michel Hazanavicius'),
('Quentin Dupieux'),
('Jacques Audiard'),
('Christophe Honoré'),
('Abdellatif Kechiche'),
('Xavier Dolan'),
('Roman Polanski'),
('Krzysztof Kieślowski'),
('Andrzej Wajda'),
('Agnieszka Holland'),
('Małgorzata Szumowska'),
('Paweł Pawlikowski'),
('Jerzy Skolimowski'),
('Krzysztof Zanussi'),
('Wojciech Smarzowski'),
('Tomasz Konecki');

INSERT INTO quality (id, description) VALUES
(1, 'Ultra HD'),
(2, 'Full HD'),
(3, 'HD'),
(4, 'SD')
;

INSERT INTO movie (title, subtitle, release_date, description, age_limit, duration, views, status, imdb, poster_img, trailer_link, movie_link, id_quality)
VALUES
('The Shawshank Redemption', 'Ký ức mong manh', '1994-09-23', 'Andy Dufresne, một ngân hàng gia giàu, bị kết án oan vì tội giết vợ và nhân tình. Bị giam trong nhà tù Shawshank, anh kết bạn với Red và trải qua 19 năm tù đầy gian khổ. Nhờ ý chí kiên cường và lòng nhân ái, Andy dần lấy lại hy vọng và tìm kiếm sự cứu赎.', 18, 142, 3000, 'Visible', 9.3, 'https://i.pinimg.com/736x/22/a7/3f/22a73f1676192a1171a5a1db88df30a2.jpg', 'https://www.youtube.com/watch?v=UDx5qJz0O7g', 'https://www.imdb.com/title/tt0777521/', 1),
('The Godfather', 'Bố già', '1972-03-24', 'Câu chuyện về gia đình mafia Corleone quyền lực ở thành phố New York. Don Vito Corleone, người đứng đầu gia đình, phải bảo vệ đế chế của mình khỏi các cuộc tấn công từ các băng đảng đối thủ và những kẻ phản bội nội bộ. Đồng thời, ông cũng phải đối mặt với những khó khăn trong việc truyền lại quyền lực cho con trai út Michael.', 18, 175, 3000, 'Visible', 9.2, 'https://i.pinimg.com/736x/b2/2f/3f/b22f3f57254426798158a374086b1767.jpg', 'https://www.youtube.com/watch?v=9Wm4briRxJA', 'https://www.imdb.com/title/tt0068646/', 1),
('The Dark Knight', 'Kỵ sĩ bóng đêm', '2008-07-18', 'Batman tiếp tục chiến đấu chống lại Joker, một tên tội phạm điên cuồng muốn gieo rắc sự hỗn loạn và phá hủy Gotham City. Với sự giúp đỡ của Harvey Dent, công tố viên quận, và Lieutenant Gordon, Batman phải đối mặt với những thử thách cam go và đưa ra những lựa chọn khó khăn để bảo vệ thành phố.', 18, 152, 3000, 'Visible', 9.0, 'https://i.pinimg.com/736x/b7/fd/56/b7fd566a54c22672a1852a2532124f03.jpg', 'https://www.youtube.com/watch?v=J8kVtIW4Sfc', 'https://www.imdb.com/title/tt0482576/', 1),
('Pulp Fiction', 'Chuyện Pulp', '1994-09-23', 'Hai sát thủ, Jules Winnfield và Vincent Vega, làm việc cho tên gangster Marsellus Wallace. Họ được giao nhiệm vụ lấy lại chiếc cặp bí ẩn bị đánh cắp bởi vợ của Marsellus, Mia. Cùng lúc đó, võ sĩ quyền anh Butch Coolidge phản bội Marsellus và phải đối mặt với những hậu quả.', 18, 154, 3000, 'Visible', 8.9, 'https://i.pinimg.com/736x/9d/68/1f/9d681f18716048a0a2121e1a40525445.jpg', 'https://www.youtube.com/watch?v=s7Edq4KQHkU', 'https://www.imdb.com/title/tt0759756/', 1)
;

INSERT INTO movie (title, subtitle, release_date, description, age_limit, duration, views, status, imdb, poster_img, trailer_link, movie_link, id_quality) VALUES
('Gặp lại chị bầu', ' ', '2024-06-01', 'Gặp lại chị bầu là bộ phim hài hước về cuộc phiêu lưu tìm kiếm người chị bầu mất tích của một anh chàng trẻ.', 13, 120, 3000, 'Visible', 7, 'poster_gap_lai_chi_bau.jpg', 'https://www.youtube.com/watch?v=abcdef', 'https://example.com/gap-lai-chi-bau', 1),
('Nhà bà Nữ', '', '2023-09-30', 'Nhà bà Nữ là bộ phim tâm lý xã hội về cuộc sống của một người phụ nữ mạnh mẽ và sự đấu tranh với những khó khăn trong xã hội.', 16, 115, 3000, 'Visible', 7, 'poster_nha_ba_nu.jpg', 'https://www.youtube.com/watch?v=oplkjhy', 'https://example.com/nha-ba-nu', 1),
('Argylle', 'Argylle Siêu Điệp Viên', '2024-01-25', 'Argylle Siêu Điệp Viên là bộ phim hành động với những màn rượt đuổi gay cấn và những kế hoạch bí ẩn của siêu điệp viên Argylle.', 16, 130, 3000, 'Visible', 8, 'poster_argylle.jpg', 'https://www.youtube.com/watch?v=ertyuiop', 'https://example.com/argylle', 2),
('Bob Marley: One Love', 'Bob Marley: Một tình yêu', '2023-05-20', 'Bob Marley: One Love là bộ phim tài liệu sinh động về cuộc đời và tác phẩm âm nhạc của ca sĩ Bob Marley.', 0, 120, 3000, 'Visible', 9, 'poster_bob_marley.jpg', 'https://www.youtube.com/watch?v=plmnbvc', 'https://example.com/bob-marley', 1),
('Hitch Hike', 'Cuốc xe chết', '2023-08-20', 'Cuốc xe chết là bộ phim kinh dị về cuộc hành trình đầy nguy hiểm của một cặp đôi trên đường cao tốc.', 18, 130, 3000, 'Hidden', 5, 'poster_hitch_hike.jpg', 'https://www.youtube.com/watch?v=zxcvbnm', 'https://example.com/hitch-hike', 1),
('Lật mặt 7', 'Lật mặt 7', '2023-12-25', 'Lật mặt 7 là bộ phim hành động hấp dẫn với nhiều màn rượt đuổi gay cấn và những bí mật bất ngờ.', 16, 125, 3000, 'Visible', 7, 'poster_lat_mat_7.jpg', 'https://youtube.com/watch?v=uvwxyza', 'https://example.com/lat-mat-7', 2),
('Godzilla x Kong: The New Empire', 'Godzilla và Kong: Đế chế mới', '2024-04-05', 'Godzilla x Kong: The New Empire là một cuộc chiến giữa hai siêu quái vật hùng mạnh Godzilla và Kong.', 13, 150, 3000, 'Visible', 8, 'poster_godzilla_kong.jpg', 'https://youtube.com/watch?v=vwxyz', 'https://example.com/godzilla-kong', 1),
('Night Swim', 'Bơi đêm', '2023-09-10', 'Night Swim là câu chuyện ly kỳ về một cuộc vượt ngục bằng đêm qua một con sông dữ dội.', 16, 110, 3000, 'Visible', 8, 'poster_night_swim.jpg', '---', 'https://example.com/night-swim', 1),
('Kungfu Panda 4', 'Gấu trúc đại chiến 4', '2023-06-30', 'Kungfu Panda 4 là phần tiếp theo của loạt phim hài hành động với gấu trúc Po.', 6, 95, 3000, 'Visible', 7, 'poster_kungfu_panda_4.jpg', 'https://youtube.com/watch?v=stuvwx', 'https://example.com/kungfu-panda-4', 2),
('The Beekeeper', 'Người chăm sóc ong', '2023-05-15', 'The Beekeeper là một bộ phim tâm lý kể về cuộc đời của một người chăm sóc ong.', 13, 120, 3000,  'Visible', 7, 'poster_beekeeper.jpg', 'https://www.youtube.com/watch?v=SzINZZ6iqxY', '---', 1),
('Madame Web', 'Bà mạng', '2024-07-20', 'Madame Web là một bộ phim siêu anh hùng về một nhân vật nữ trong vũ trụ Spider-Man.', 13, 135, 3000, 'Hidden', 6, 'poster_madame_web.jpg', 'https://www.youtube.com/watch?v=s_76M4c4LTo', '---', 2),
('Ant-Man and The Wasp: Quantumania', 'Người Kiến và Ong Bắp cải: Thế giới cực vi mô', '2023-07-28', 'Ant-Man and The Wasp: Quantumania là bộ phim siêu anh hùng của Marvel với cuộc phiêu lưu mới của Scott Lang và Hope van Dyne trong thế giới lượng tử.', 13, 130, 3000, 'Visible', 8, 'poster_antman_quantumania.jpg', 'https://www.youtube.com/watch?v=abcdef', 'https://example.com/ant-man-quantumania', 1),
('Guardian Of The Galaxy Vol.3', 'Vệ Binh Dải Ngân Hà Phần 3', '2023-05-05', 'Guardian Of The Galaxy Vol.3 tiếp tục cuộc phiêu lưu của nhóm Vệ Binh Dải Ngân Hà trong việc bảo vệ vũ trụ khỏi những hiểm họa mới.', 13, 140, 3000, 'Visible', 8, 'poster_guardians_vol3.jpg', 'https://www.youtube.com/watch?v=mnopqr', 'https://example.com/guardians-vol3', 2),
('Spider-man: Across the Spider-Verse', 'Người Nhện: Qua Vũ Trụ Nhện', '2023-12-20', 'Spider-man: Across the Spider-Verse là phần tiếp theo của bộ phim hoạt hình về các phiên bản Spider-Man từ các thế giới song song.', 0, 120, 3000, 'Visible', 9, 'poster_spiderverse_part1.jpg', 'https://www.youtube.com/watch?v=qwerty', 'https://example.com/spider-verse', 1),
('Transformers: Rise of The Beasts', 'Người Máy Biến Hình: Sự Trỗi Dậy Của Những Thú', '2023-06-30', 'Transformers: Rise of The Beasts là bộ phim hành động khoa học viễn tưởng về cuộc chiến giữa Autobots và Decepticons với những sinh vật biến hình mới.', 13, 135, 3000, 'Visible', 7, 'poster_transformers_rise_of_beasts.jpg', 'https://www.youtube.com/watch?v=zxcvbnm', 'https://example.com/transformers-rise-of-beasts', 2),
('Fast & Furious 10: Fast X', 'Đua xe thần tốc 10: Fast X', '2023-04-07', 'Fast & Furious 10: Fast X là phần tiếp theo của loạt phim hành động với những màn đua xe hấp dẫn và mạo hiểm.', 16, 150, 3000, 'Visible', 8, 'poster_fast_furious_10.jpg', 'https://www.youtube.com/watch?v=plmnbvc', 'https://example.com/fast-furious-10', 1),
('Round Up: No Way Out', 'Round Up: Không Lối Thoát', '2023-08-25', 'Round Up: No Way Out là bộ phim hành động kịch tính về một nhóm người bị mắc kẹt trong một cuộc đấu tranh sinh tồn khốc liệt.', 18, 125, 3000, 'Visible', 7, 'poster_round_up_no_way_out.jpg', 'https://www.youtube.com/watch?v=ertyuiop', 'https://example.com/round-up-no-way-out', 2),
('Hoon Payon', 'Hoon Payon', '2023-09-15', 'Hoon Payon là bộ phim kinh dị Thái Lan về một linh hồn quỷ ám trong một búp bê bị huyền bí.', 18, 110, 3000, 'Visible', 6, 'poster_hoon_payon.jpg', 'https://www.youtube.com/watch?v=uioasdj', 'https://example.com/hoon-payon', 1),
('Achoura', 'Achoura', '2023-10-10', 'Achoura là bộ phim kinh dị về một nhóm trẻ em khám phá một lễ hội địa phương kỳ lạ và phải đối mặt với những hiểm nguy đáng sợ.', 18, 115, 3000, 'Visible', 6, 'poster_achoura.jpg', 'https://www.youtube.com/watch?v=asdflkj', 'https://example.com/achoura', 2),
('The Little Mermaid', 'Nàng Tiên Cá', '2023-11-20', 'The Little Mermaid là bộ phim hài lãng mạn về cuộc phiêu lưu và tình yêu của nàng tiên cá Ariel.', 0, 120, 3000, 'Visible', 7, 'poster_little_mermaid.jpg', 'https://www.youtube.com/watch?v=zxnmvbn', 'https://example.com/little-mermaid', 1),
('Insidious: The Red Door', 'Insidious: Cánh Cửa Đỏ', '2023-07-25', 'Insidious: The Red Door là phần tiếp theo của loạt phim kinh dị về thế giới bóng tối và những hiện tượng siêu nhiên đáng sợ.', 18, 110, 3000, 'Hidden', 6, 'poster_insidious_red_door.jpg', 'https://www.youtube.com/watch?v=qwertyui', 'https://example.com/insidious-red-door', 2)
;
INSERT INTO movie (title, subtitle, release_date, description, age_limit, duration, views, status, imdb, poster_img, trailer_link, movie_link, id_quality) VALUES
('Shazam! Fury of the Gods', 'Shazam! Cơn Thịnh Nộ của Các Vị Thần', '2022-03-02', 'Shazam! Cơn Thịnh Nộ của Các Vị Thần là câu chuyện tiếp nối cuộc phiêu lưu của Shazam khi anh đối mặt với các vị thần cổ đại.', 13, 130, 3000, 'Visible', 7, 'poster_shazam_fury_of_the_gods.jpg', 'https://www.youtube.com/watch?v=abcdef', 'https://example.com/shazam-fury-of-the-gods', 1),
('Everything Everywhere All at Once', 'Mọi Thứ Mọi Nơi Cùng Lúc', '2022-03-11', 'Mọi Thứ Mọi Nơi Cùng Lúc là bộ phim hành động giả tưởng với câu chuyện về một người phụ nữ bị kéo vào một cuộc phiêu lưu xuyên đa vũ trụ.', 16, 139, 3000, 'Visible', 8, 'poster_everything_everywhere_all_at_once.jpg', 'https://www.youtube.com/watch?v=oplkjhy', 'https://example.com/everything-everywhere-all-at-once', 1),
('Top Gun: Maverick', 'Phi Công Siêu Đẳng: Maverick', '2022-05-27', 'Phi Công Siêu Đẳng: Maverick là phần tiếp theo của Top Gun, với câu chuyện về sự trở lại của phi công Pete "Maverick" Mitchell.', 13, 131, 3000, 'Visible', 7, 'poster_top_gun_maverick.jpg', 'https://www.youtube.com/watch?v=uvwxyz', 'https://example.com/top-gun-maverick', 1),
('The Batman', 'Người Dơi', '2022-03-04', 'Người Dơi là bộ phim về cuộc chiến của Batman chống lại tội phạm ở thành phố Gotham.', 15, 176, 3000, 'Visible', 8, 'poster_the_batman.jpg', 'https://www.youtube.com/watch?v=ghijklm', 'https://example.com/the-batman', 1),
('The Banshees of Inisherin', 'Tiếng Hú Của Inisherin', '2022-10-21', 'Tiếng Hú Của Inisherin là câu chuyện về tình bạn và những xung đột cá nhân tại một hòn đảo nhỏ ở Ireland.', 16, 114, 3000, 'Visible', 7, 'poster_the_banshees_of_inisherin.jpg', 'https://www.youtube.com/watch?v=mnopqrs', 'https://example.com/the-banshees-of-inisherin', 1),
('Aftersun', 'Sau Nắng', '2022-10-14', 'Sau Nắng là câu chuyện cảm động về ký ức tuổi thơ và mối quan hệ giữa cha và con gái.', 13, 98, 3000, 'Visible', 8, 'poster_aftersun.jpg', 'https://www.youtube.com/watch?v=tuvwxys', 'https://example.com/aftersun', 1),
('Avatar: The Way of Water', 'Avatar: Dòng Nước', '2022-12-16', 'Avatar: Dòng Nước tiếp tục câu chuyện về Jake Sully và Neytiri khi họ khám phá thế giới dưới nước của Pandora.', 13, 192, 3000, 'Visible', 8, 'poster_avatar_the_way_of_water.jpg', 'https://www.youtube.com/watch?v=wxyzabc', 'https://example.com/avatar-the-way-of-water', 1),
('The Northman', 'Người Bắc', '2022-04-22', 'Người Bắc là câu chuyện về một hoàng tử Viking trong hành trình báo thù cho cái chết của cha mình.', 17, 137, 3000, 'Visible', 7, 'poster_the_northman.jpg', 'https://www.youtube.com/watch?v=yzabcde', 'https://example.com/the-northman', 1),
('Elvis', 'Vua Nhạc Rock', '2022-06-24', 'Vua Nhạc Rock là bộ phim tiểu sử về cuộc đời và sự nghiệp của huyền thoại âm nhạc Elvis Presley.', 13, 159, 3000, 'Visible', 7, 'poster_elvis.jpg', 'https://www.youtube.com/watch?v=abcdefg', 'https://example.com/elvis', 1),
('Men', 'Những Người Đàn Ông', '2022-05-20', 'Những Người Đàn Ông là bộ phim kinh dị tâm lý kể về một phụ nữ trẻ sau cái chết của chồng mình.', 17, 100, 3000, 'Visible', 7, 'poster_men.jpg', 'https://www.youtube.com/watch?v=hijklmn', 'https://example.com/men', 1),
('Lightyear', 'Phi Công Vũ Trụ', '2022-06-17', 'Phi Công Vũ Trụ là bộ phim hoạt hình kể về nguồn gốc của nhân vật Buzz Lightyear từ loạt phim Toy Story.', 7, 100, 3000, 'Visible', 7, 'poster_lightyear.jpg', 'https://www.youtube.com/watch?v=opqrsuv', 'https://example.com/lightyear', 1),
('Doctor Strange in the Multiverse of Madness', 'Phù Thủy Tối Thượng Trong Đa Vũ Trụ Điên Loạn', '2022-05-06', 'Phù Thủy Tối Thượng Trong Đa Vũ Trụ Điên Loạn là cuộc phiêu lưu mới của Doctor Strange khi anh khám phá và chiến đấu trong đa vũ trụ.', 13, 126, 3000, 'Visible', 7, 'poster_doctor_strange_in_the_multiverse_of_madness.jpg', 'https://www.youtube.com/watch?v=wxyabcd', 'https://example.com/doctor-strange-in-the-multiverse-of-madness', 1),
('Thor: Love and Thunder', 'Thor: Tình Yêu Và Sấm Sét', '2022-07-08', 'Thor: Tình Yêu Và Sấm Sét tiếp tục câu chuyện về Thor khi anh đối mặt với kẻ thù mới và tìm kiếm sự bình yên trong cuộc sống.', 13, 119, 3000, 'Visible', 7, 'poster_thor_love_and_thunder.jpg', 'https://www.youtube.com/watch?v=abcdefg', 'https://example.com/thor-love-and-thunder', 1),
('Jurassic World Dominion', 'Thế Giới Khủng Long: Thống Trị', '2022-06-10', 'Thế Giới Khủng Long: Thống Trị là phần tiếp theo của loạt phim Jurassic World, với câu chuyện về cuộc sống chung giữa con người và khủng long.', 13, 146, 3000, 'Visible', 7, 'poster_jurassic_world_dominion.jpg', 'https://www.youtube.com/watch?v=hijklmno', 'https://example.com/jurassic-world-dominion', 1)
;

INSERT INTO movie_country (id_movie, id_country) VALUES
(1, 1),(2, 2),(3, 3),(3, 2),(4, 2),(5, 1),(6, 3),
(7, 1),(8, 2),(9, 3),(10, 2),(10, 3),(11, 2),(12, 2),(13, 1),(14, 2),(15, 3),
(16, 4),(16, 2),(17, 2),(18, 2),(19, 1),(20, 1),(21, 1),(21, 2),(22, 1),(23, 2),(24, 3),
(25, 1),(26, 2),(27, 3),(28, 4),(29, 2),(30, 2),(31, 1),(32, 2),(33, 3),(33, 2),
(34, 4),(34, 2),(35, 2),(36, 2),(37, 1),(38, 2),(39, 3),(39, 2)
;

INSERT INTO movie_lang (id_movie, id_lang) VALUES
(1, 1),(2, 2),(3, 3),(3, 2),(4, 2),(5, 1),(6, 3),
(7, 1),(8, 2),(9, 3),(10, 2),(10, 3),(11, 2),(12, 2),(13, 1),(14, 2),(15, 3),
(16, 4),(16, 2),(17, 2),(18, 2),(19, 1),(20, 1),(21, 1),(21, 2),(22, 1),(23, 2),(24, 3),
(25, 1),(26, 2),(27, 3),(28, 4),(29, 2),(30, 2),(31, 1),(32, 2),(33, 3),(33, 2),
(34, 4),(34, 2),(35, 2),(36, 2),(37, 1),(38, 2),(39, 3),(39, 2)
;

INSERT INTO movie_actor (id_movie, id_actor) VALUES
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5),
(2, 6), (2, 7), (2, 8), (2, 9), (2, 10),
(3, 11), (3, 12), (3, 13), (3, 14), (3, 15),
(4, 16), (4, 17), (4, 18), (4, 19), (4, 20),
(5, 21), (5, 22), (5, 23), (5, 24), (5, 25),
(6, 26), (6, 27), (6, 28), (6, 29), (6, 30),
(7, 31), (7, 32), (7, 33), (7, 34), (7, 35),
(8, 36), (8, 37), (8, 38), (8, 39), (8, 40),
(9, 41), (9, 42), (9, 43), (9, 44), (9, 45),
(10, 46), (10, 47), (10, 48), (10, 49), (10, 50),
(11, 51), (11, 52), (11, 53), (11, 54), (11, 55),
(12, 56), (12, 57), (12, 58), (12, 59), (12, 60),
(13, 61), (13, 62), (13, 63), (13, 64), (13, 65),
(14, 66), (14, 67), (14, 68), (14, 69), (14, 70),
(15, 71), (15, 72), (15, 73), (15, 74), (15, 75),
(16, 76), (16, 77), (16, 78), (16, 79), (16, 80),
(17, 81), (17, 82), (17, 83), (17, 84), (17, 85),
(18, 86), (18, 87), (18, 88), (18, 89), (18, 90),
(19, 91), (19, 92), (19, 93), (19, 94), (19, 1),
(20, 2), (20, 3), (20, 4), (20, 5), (20, 6), (20, 7), (20, 8), (20, 9),
(21, 10), (21, 11), (21, 12), (21, 13), (21, 14), (21, 15), (21, 16), (21, 17),
(22, 18), (22, 19), (22, 20), (22, 21), (22, 22), (22, 23), (22, 24), (22, 25),
(23, 26), (23, 27), (23, 28), (23, 29), (23, 30), (23, 31), (23, 32), (23, 33),
(24, 34), (24, 35), (24, 36), (24, 37), (24, 38), (24, 39), (24, 40), (24, 41),
(25, 42), (25, 43), (25, 44), (25, 45), (25, 46), (25, 47), (25, 48), (25, 49),
(26, 50), (26, 51), (26, 52), (26, 53), (26, 54), (26, 55), (26, 56), (26, 57),
(27, 58), (27, 59), (27, 60), (27, 61), (27, 62), (27, 63), (27, 64), (27, 65),
(28, 66), (28, 67), (28, 68), (28, 69), (28, 70), (28, 71), (28, 72), (28, 73),
(29, 74), (29, 75), (29, 76), (29, 77), (29, 78), (29, 79), (29, 80), (29, 81),
(30, 82), (30, 83), (30, 84), (30, 85), (30, 86), (30, 87), (30, 88), (30, 89),
(31, 90), (31, 91), (31, 92), (31, 93), (31, 94), (31, 1), (31, 2), (31, 3),
(32, 4), (32, 5), (32, 6), (32, 7), (32, 8), (32, 9), (32, 10), (32, 11),
(33, 12), (33, 13), (33, 14), (33, 15), (33, 16), (33, 17), (33, 18), (33, 19),
(34, 20), (34, 21), (34, 22), (34, 23), (34, 24), (34, 25), (34, 26), (34, 27),
(35, 28), (35, 29), (35, 30), (35, 31), (35, 32), (35, 33), (35, 34), (35, 35),
(36, 36), (36, 37), (36, 38), (36, 39), (36, 40), (36, 41), (36, 42), (36, 43),
(37, 44), (37, 45), (37, 46), (37, 47), (37, 48), (37, 49), (37, 50), (37, 51),
(38, 52), (38, 53), (38, 54), (38, 55), (38, 56), (38, 57), (38, 58), (38, 59),
(39, 60), (39, 61), (39, 62), (39, 63), (39, 64), (39, 65), (39, 66), (39, 67)
;

INSERT INTO movie_genre (id_movie, id_genre) VALUES
(1, 1), (1, 2), (1, 3),
(2, 4), (2, 5), (2, 6),
(3, 7), (3, 8), (3, 9),
(4, 10), (4, 11), (4, 12),
(5, 13), (5, 14), (5, 15),
(6, 16), (6, 1), (6, 2),
(7, 3), (7, 4), (7, 5),
(8, 6), (8, 7), (8, 8),
(9, 9), (9, 10), (9, 11),
(10, 12), (10, 13), (10, 14),
(11, 15), (11, 16), (11, 1),
(12, 2), (12, 3), (12, 4),
(13, 5), (13, 6), (13, 7),
(14, 8), (14, 9), (14, 10),
(15, 11), (15, 12), (15, 13),
(16, 14), (16, 15), (16, 16),
(17, 1), (17, 2), (17, 3),
(18, 4), (18, 5), (18, 6),
(19, 7), (19, 8), (19, 9),
(20, 10), (20, 11), (20, 12),
(21, 13), (21, 14), (21, 15),
(22, 16), (22, 1), (22, 2),
(23, 3), (23, 4), (23, 5),
(24, 6), (24, 7), (24, 8),
(25, 9), (25, 10), (25, 11),
(26, 12), (26, 13), (26, 14),
(27, 15), (27, 16), (27, 1),
(28, 2), (28, 3), (28, 4),
(29, 5), (29, 6), (29, 7),
(30, 8), (30, 9), (30, 10),
(31, 11), (31, 12), (31, 13),
(32, 14), (32, 15), (32, 16),
(33, 1), (33, 2), (33, 3),
(34, 4), (34, 5), (34, 6),
(35, 7), (35, 8), (35, 9),
(36, 10), (36, 11), (36, 12),
(37, 13), (37, 14), (37, 15),
(38, 16), (38, 1), (38, 2),
(39, 3), (39, 4), (39, 5), (39, 6);


INSERT INTO movie_director (id_movie, id_director) VALUES
(1, 1),(2, 2),(3, 3),(4, 4),(5, 5),(6, 6),(7, 7),(8, 8),(9, 9),
(10, 10),(11, 11),(12, 12),(13, 13),(14, 14),(15, 15),(16, 16),(17, 17),(18, 18),(19, 19),
(20, 20),(21, 21),(22, 22),(23, 23),(24, 24),(25, 25),(26, 26),(27, 27),(28, 28),(29, 29),
(30, 30),(31, 31),(32, 32),(33, 33),(34, 34),(35, 35),(36, 36),(37, 37),(38, 38),(39, 39);





