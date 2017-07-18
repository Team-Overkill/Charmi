drop table if exists album cascade;
drop table if exists blocked_user_list cascade;
drop table if exists conversation_list cascade;
drop table if exists hangout_list cascade;
drop table if exists interests_list cascade;
drop table if exists matches cascade;
drop table if exists messages cascade;
drop table if exists photo_list cascade;
drop table if exists state_list cascade;
drop table if exists users cascade;

create table album (
  id serial primary key
);

create table blocked_user_list (
  id serial primary key
);

create table conversation_list (
  id serial primary key
);

create table hangout_list (
  id serial primary key,
  hangouts text
);

create table interests_list (
  id serial primary key,
  interest text
);

create table matches (
  id serial primary key,
  matched boolean
);

create table messages (
  id serial primary key,
  message text,
  time timestamp
);

create table photo_list (
  id serial primary key,
  uri text
);

create table state_list (
  id serial primary key,
  state_code text,
  state_name text
);

create table users (
  id serial primary key,
  about text,
  age integer,
  age_range text,
  auth_token text,
  first_name text,
  gender text,
  geolocation text,
  height text,
  home_town text,
  primary_photo text,
  relationship_readiness integer,
  school text,
  search_location_radius integer,
  search_hometown boolean,
  work text
);


alter table blocked_user_list
  add column blocked_user_id integer references users (id),
  add column user_id integer references users (id);

alter table conversation_list
  add column user_1 integer references users (id),
  add column user_2 integer references users (id);

alter table hangout_list
  add column user_id integer references users (id);

alter table interests_list
  add column user_id integer references users (id);

alter table matches
  add column user_1 integer references users (id),
  add column user_2 integer references users (id);

alter table messages
  add column conversation_id integer references conversation_list (id),
  add column user_id integer references users (id);

alter table photo_list
  add column user_id integer references users (id),
  add column album_id integer references album (id);

alter table users
  add column album_id integer references album (id),
  add column blocked_user_id integer references blocked_user_list (id),
  add column conversation_id integer references conversation_list (id),
  add column hangouts_id integer references hangout_list (id),
  add column home_state_id integer references state_list (id),
  add column interests_id integer references interests_list (id),
  add column matches_id integer references matches_list (id),
  add column photo_list_id integer references photo_list (id);