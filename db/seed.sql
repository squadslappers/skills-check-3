-- create table users (
--     id serial primary key,
--     username varchar(20),
--     password varchar(20),
--     profile_pic text
-- )

alter table users
alter password
set data type varchar(250);

-- select * from users;

-- delete from users
-- where id = 3;

select * from users;

-- delete from users where id = 7;

-- insert into users (
--     username,
--     password,
--     profile_pic
-- ) values (
--     'squidslippers',
--     'squidslippers',
--     'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/benefits-of-oranges-1296x728-feature.jpg?w=1155&h=1528'
-- )

-- create table posts (
--     id serial primary key,
--     title varchar(45),
--     img text,
--     content text,
--     author_id int references users(id)
--     )

-- select * from posts;