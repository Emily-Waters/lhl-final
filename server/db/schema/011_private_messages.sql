DROP TABLE IF EXISTS private_messages CASCADE;
CREATE TABLE private_messages (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  private_room_id INTEGER REFERENCES private_rooms(id) ON DELETE CASCADE,
  recipient_id INTEGER REFERENCES users(id) ON DELETE CASCADE DEFAULT null,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);