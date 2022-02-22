DROP TABLE IF EXISTS seen_messages CASCADE;
CREATE TABLE seen_messages (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL ,
  room_id INTEGER REFERENCES rooms(id) ON DELETE CASCADE DEFAULT NULL,
  private_room_id INTEGER REFERENCES private_rooms(id) ON DELETE CASCADE DEFAULT NULL,
  messages_seen INTEGER DEFAULT 0
);