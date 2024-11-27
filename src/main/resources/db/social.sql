CREATE DATABASE social;
GO
USE social;
GO

CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    firstname NVARCHAR(20),
    lastname NVARCHAR(20),
    email VARCHAR(30),
    gender NVARCHAR(10),
    passwords VARCHAR(30)
);

CREATE TABLE user_followers (
    user_id INT,
    follower_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (user_id, follower_id)
);


CREATE TABLE user_followings (
    user_id INT,
    following_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (user_id, following_id)
);
CREATE TABLE posts (
    id INT IDENTITY(1,1) PRIMARY KEY,
    caption NVARCHAR(MAX),
    image NVARCHAR(MAX),
    video NVARCHAR(MAX),
    user_id INT,
    created_at DATETIME2,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE post_likes (
    post_id INT,
    user_id INT,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (post_id, user_id)
);
CREATE TABLE user_saved_posts (
    user_id INT,
    post_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id),
    PRIMARY KEY (user_id, post_id)
);
create table comment(
	id int identity(1,1) primary key,
	content nvarchar(1055),
	image nvarchar(255),
	created_at DATETIME2, 
	user_id int,	
	post_id int,
	FOREIGN KEY (user_id) REFERENCES users(id) ,
	FOREIGN KEY (post_id) REFERENCES posts(id)

)
CREATE TABLE comment_likes (
    comment_id INT,
    user_id INT,
	PRIMARY KEY (comment_id, user_id),
    FOREIGN KEY (comment_id) REFERENCES comment(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE comment_replies (
    id INT IDENTITY(1,1) PRIMARY KEY,
    comment_id INT,        -- Khóa ngoại tham chiếu đến bình luận gốc
    user_id INT,           -- Khóa ngoại tham chiếu đến người dùng trả lời
    content NVARCHAR(1055),-- Nội dung trả lời
    created_at DATETIME2,  -- Thời gian tạo trả lời
    FOREIGN KEY (comment_id) REFERENCES comment(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
Create table reels(
	id bigint IDENTITY(1,1) PRIMARY KEY,
	title nvarchar(255), 
	video nvarchar(255), 
	user_id INT,   
	foreign key (user_id) references users(id) 
)
create table chat(
	id int identity(1,1) primary key,
	chat_name nvarchar(50),
	chat_image nvarchar(255),
	user_id int,
	created_at DATETIME2,
	foreign key(user_id) references users(id)
)
INSERT INTO users (firstname, lastname, email, gender, passwords)
VALUES ('John', 'Doe', 'john.doe@example.com', 'Male', 'password123');
INSERT INTO users (firstname, lastname, email, gender, passwords)
VALUES ('Nguyễn', 'Trưởng', 'john.doe@example.com', 'Male', 'password123');
INSERT INTO users (firstname, lastname, email, gender, passwords)
VALUES ('Nguyễn', 'Trưởng', 'john.doe@example.com', 'Male', 'password123');

-- Example inserts for relationships
-- Assuming user with ID 1 follows user with ID 2
INSERT INTO user_followings (user_id, following_id) VALUES (1, 2);
-- Assuming user with ID 2 is followed by user with ID 1
INSERT INTO user_followers (user_id, follower_id) VALUES (2, 1);
INSERT INTO posts (caption, image, video, user_id, created_at)
VALUES ('First Post', 'image.jpg', NULL, 1, SYSDATETIME());
INSERT INTO user_saved_posts (user_id, post_id)
VALUES (1, 1);
select * from users
select * from user_followers
select * from user_followers
select * from posts
select * from user_saved_posts
select * from post_likes
ALTER TABLE users ALTER COLUMN passwords NVARCHAR(255);
