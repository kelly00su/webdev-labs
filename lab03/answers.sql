-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name 
FROM users
ORDER BY last_name;


-- Exercise 4
SELECT id, image_url, user_id
FROM posts
WHERE user_id=26;



-- Exercise 5
SELECT id, image_url, user_id
FROM posts
WHERE user_id=26 or user_id=12;



-- Exercise 6
SELECT COUNT(id)
FROM posts;



-- Exercise 7
SELECT user_id, COUNT(comments)
FROM comments
GROUP BY user_id;



-- Exercise 8
SELECT posts.id, posts.image_url, posts.user_id, users.username,users.first_name, users.last_name
FROM posts
INNER JOIN users ON posts.user_id = users.id
WHERE posts.user_id=26 or posts.user_id=12;



-- Exercise 9
SELECT posts.id, posts.pub_date, following.following_id
FROM posts
INNER JOIN following ON following.following_id = posts.user_id
WHERE posts.user_id=26
ORDER BY following.user_id; 



-- Exercise 10




-- Exercise 11




-- Exercise 12




-- Exercise 13




-- Exercise 14
