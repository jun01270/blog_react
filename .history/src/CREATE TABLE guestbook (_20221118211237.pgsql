CREATE TABLE guestbook (
    id SERIAL,
    name varchar(100),
    title varchar(100),
    content varchar
)

INSERT INTO guestbook (name, title, content)
VALUES ('성준', '디비에서 안녕', '이건 디비')

INSERT INTO guestbook (name, title, content)
VALUES ('ㅇㅇ', '디비에서 안녕2', '이건 디비디비')

INSERT INTO guestbook (name, title, content)
VALUES ('ㅁㅁ', '집에 가고싶다', '집집집')

use blog_lzpo;
SELECT * from guestbook;