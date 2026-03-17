CREATE TABLE IF NOT EXISTS islands (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  image_url TEXT,
  sea VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS characters (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  bounty VARCHAR(50),
  role VARCHAR(100),
  image_url TEXT,
  island_id INTEGER REFERENCES islands(id) ON DELETE CASCADE,
  devil_fruit VARCHAR(100),
  description TEXT
);
