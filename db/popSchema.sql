INSERT INTO state_list (state_code,state_name) VALUES ('AL','Alabama');
INSERT INTO state_list (state_code,state_name) VALUES ('AK','Alaska');
INSERT INTO state_list (state_code,state_name) VALUES ('AS','American Samoa');
INSERT INTO state_list (state_code,state_name) VALUES ('AZ','Arizona');
INSERT INTO state_list (state_code,state_name) VALUES ('AR','Arkansas');
INSERT INTO state_list (state_code,state_name) VALUES ('CA','California');
INSERT INTO state_list (state_code,state_name) VALUES ('CO','Colorado');
INSERT INTO state_list (state_code,state_name) VALUES ('CT','Connecticut');
INSERT INTO state_list (state_code,state_name) VALUES ('DE','Delaware');
INSERT INTO state_list (state_code,state_name) VALUES ('DC','District of Columbia');
INSERT INTO state_list (state_code,state_name) VALUES ('FM','Federated State_lists of Micronesia');
INSERT INTO state_list (state_code,state_name) VALUES ('FL','Florida');
INSERT INTO state_list (state_code,state_name) VALUES ('GA','Georgia');
INSERT INTO state_list (state_code,state_name) VALUES ('GU','Guam');
INSERT INTO state_list (state_code,state_name) VALUES ('HI','Hawaii');
INSERT INTO state_list (state_code,state_name) VALUES ('ID','Idaho');
INSERT INTO state_list (state_code,state_name) VALUES ('IL','Illinois');
INSERT INTO state_list (state_code,state_name) VALUES ('IN','Indiana');
INSERT INTO state_list (state_code,state_name) VALUES ('IA','Iowa');
INSERT INTO state_list (state_code,state_name) VALUES ('KS','Kansas');
INSERT INTO state_list (state_code,state_name) VALUES ('KY','Kentucky');
INSERT INTO state_list (state_code,state_name) VALUES ('LA','Louisiana');
INSERT INTO state_list (state_code,state_name) VALUES ('ME','Maine');
INSERT INTO state_list (state_code,state_name) VALUES ('MH','Marshall Islands');
INSERT INTO state_list (state_code,state_name) VALUES ('MD','Maryland');
INSERT INTO state_list (state_code,state_name) VALUES ('MA','Massachusetts');
INSERT INTO state_list (state_code,state_name) VALUES ('MI','Michigan');
INSERT INTO state_list (state_code,state_name) VALUES ('MN','Minnesota');
INSERT INTO state_list (state_code,state_name) VALUES ('MS','Mississippi');
INSERT INTO state_list (state_code,state_name) VALUES ('MO','Missouri');
INSERT INTO state_list (state_code,state_name) VALUES ('MT','Montana');
INSERT INTO state_list (state_code,state_name) VALUES ('NE','Nebraska');
INSERT INTO state_list (state_code,state_name) VALUES ('NV','Nevada');
INSERT INTO state_list (state_code,state_name) VALUES ('NH','New Hampshire');
INSERT INTO state_list (state_code,state_name) VALUES ('NJ','New Jersey');
INSERT INTO state_list (state_code,state_name) VALUES ('NM','New Mexico');
INSERT INTO state_list (state_code,state_name) VALUES ('NY','New York');
INSERT INTO state_list (state_code,state_name) VALUES ('NC','North Carolina');
INSERT INTO state_list (state_code,state_name) VALUES ('ND','North Dakota');
INSERT INTO state_list (state_code,state_name) VALUES ('MP','Northern Mariana Islands');
INSERT INTO state_list (state_code,state_name) VALUES ('OH','Ohio');
INSERT INTO state_list (state_code,state_name) VALUES ('OK','Oklahoma');
INSERT INTO state_list (state_code,state_name) VALUES ('OR','Oregon');
INSERT INTO state_list (state_code,state_name) VALUES ('PW','Palau');
INSERT INTO state_list (state_code,state_name) VALUES ('PA','Pennsylvania');
INSERT INTO state_list (state_code,state_name) VALUES ('PR','Puerto Rico');
INSERT INTO state_list (state_code,state_name) VALUES ('RI','Rhode Island');
INSERT INTO state_list (state_code,state_name) VALUES ('SC','South Carolina');
INSERT INTO state_list (state_code,state_name) VALUES ('SD','South Dakota');
INSERT INTO state_list (state_code,state_name) VALUES ('TN','Tennessee');
INSERT INTO state_list (state_code,state_name) VALUES ('TX','Texas');
INSERT INTO state_list (state_code,state_name) VALUES ('UT','Utah');
INSERT INTO state_list (state_code,state_name) VALUES ('VT','Vermont');
INSERT INTO state_list (state_code,state_name) VALUES ('VI','Virgin Islands');
INSERT INTO state_list (state_code,state_name) VALUES ('VA','Virginia');
INSERT INTO state_list (state_code,state_name) VALUES ('WA','Washington');
INSERT INTO state_list (state_code,state_name) VALUES ('WV','West Virginia');
INSERT INTO state_list (state_code,state_name) VALUES ('WI','Wisconsin');
INSERT INTO state_list (state_code,state_name) VALUES ('WY','Wyoming');

--PRIMARY USER
    INSERT INTO users
    (about
    , age
    , age_range
    , auth_token
    , first_name
    , gender
    , geolocation
    , height
    , home_town
    , primary_photo
    , relationship_readiness
    , school
    , search_location_radius
    , search_hometown
    , work
    , home_state_id)
    VALUES
    ('We built this city'
    , 22
    , '18-19'
    , 'iamauth'
    , 'Ricky'
    , 'female'
    , '40.2732624,-111.7051887'
    , '5ft 6in'
    , 'Seattle'
    , 'https://www.petinsurance.com.au/wp-content/uploads/2016/07/WelshCorgi_961x558-1.jpg'
    , 5
    , 'U of U'
    , 25
    , true
    , 'Adobe'
    , 52
    );
--USER 2
    INSERT INTO users
    (about
    , age
    , age_range
    , auth_token
    , first_name
    , gender
    , geolocation
    , height
    , home_town
    , primary_photo
    , relationship_readiness
    , school
    , search_location_radius
    , search_hometown
    , work
    , home_state_id)
    VALUES
    ('Hard luck puppy'
    , 22
    , '18-19'
    , 'iamauth'
    , 'Priss'
    , 'female'
    , '40.2732624,-111.7051887'
    , '5ft 6in'
    , 'Provo'
    , 'https://www.petinsurance.com.au/wp-content/uploads/2016/07/WelshCorgi_961x558-1.jpg'
    , 5
    , 'U of U'
    , 25
    , true
    , 'Adobe'
    , 52
    );
--USER 3
    INSERT INTO users
    (about
    , age
    , age_range
    , auth_token
    , first_name
    , gender
    , geolocation
    , height
    , home_town
    , primary_photo
    , relationship_readiness
    , school
    , search_location_radius
    , search_hometown
    , work
    , home_state_id)
    VALUES
    ('...And i ran'
    , 22
    , '18-19'
    , 'iamauth'
    , 'Nene'
    , 'female'
    , '40.2732624,-111.7051887'
    , '5ft 6in'
    , 'Portland'
    , 'https://www.petinsurance.com.au/wp-content/uploads/2016/07/WelshCorgi_961x558-1.jpg'
    , 5
    , 'U of U'
    , 25
    , true
    , 'Adobe'
    , 52
    );

--add photos to album
    INSERT INTO photo_list (uri, user_id) VALUES ('https://www.petinsurance.com.au/wp-content/uploads/2016/07/WelshCorgi_961x558-1.jpg', 1);
    INSERT INTO photo_list (uri, user_id) VALUES ('https://www.petinsurance.com.au/wp-content/uploads/2016/07/WelshCorgi_961x558-1.jpg', 1);
    INSERT INTO photo_list (uri, user_id) VALUES ('https://www.petinsurance.com.au/wp-content/uploads/2016/07/WelshCorgi_961x558-1.jpg', 1);

--get list of photos by user_id
    --SELECT * FROM photo_list WHERE user_id = 1

--add users to blocked users
    INSERT INTO blocked_user_list (blocked_user_id, user_id) VALUES (2,1);
    INSERT INTO blocked_user_list (blocked_user_id, user_id) VALUES (3,1);
    INSERT INTO blocked_user_list (blocked_user_id, user_id) VALUES (3,2);

--get list of blocked users by user_id
    --SELECT * FROM blocked_user_list WHERE user_id = 2

--create conversation
    INSERT INTO conversation_list (user_1, user_2) VALUES (1,2);

--create message and add it to conversation
    INSERT INTO messages (message, conversation_id, user_id) VALUES('Hi', 1, 1 );
    INSERT INTO messages (message, conversation_id, user_id) VALUES('Hello', 1, 2 );
    INSERT INTO messages (message, conversation_id, user_id) VALUES('Nice Hat', 1, 2 );

--get conversation by user_id
    -- SELECT messages.message, messages.user_id as "sender", conversation_list.* from messages
    -- JOIN conversation_list
    -- ON conversation_id = messages.conversation_id
    -- WHERE conversation_id = 1

--add hangout and tie it to user
    INSERT INTO hangout_list (hangouts, user_id) VALUES ('Lucky 13', 1);
    INSERT INTO hangout_list (hangouts, user_id) VALUES ('Squatters', 1);
    INSERT INTO hangout_list (hangouts, user_id) VALUES ('Piper Down', 2);
    INSERT INTO hangout_list (hangouts, user_id) VALUES ('Wasatch Brewery', 1);

--get hangouts by user_id
    --SELECT * FROM hangout_list WHERE user_id = 2;

--add interests and tie it to user
    INSERT INTO interests_list (interest, user_id) VALUES ('Drinking', 1);
    INSERT INTO interests_list (interest, user_id) VALUES ('Gaming', 1);
    INSERT INTO interests_list (interest, user_id) VALUES ('Camping', 2);
    INSERT INTO interests_list (interest, user_id) VALUES ('Ping Pong', 1);

--get interests by user_id
    --SELECT * FROM interests_list WHERE user_id = 2;

--user 'likes' someone
    INSERT INTO matches (user_1, user_2) VALUES (1,2);
--'liked' user likes origin user back
    UPDATE matches
    SET matched = true
    WHERE id = 1;
--find matches by user_id
    -- SELECT * FROM matches WHERE user_1 = 1 or user_2 = 1;