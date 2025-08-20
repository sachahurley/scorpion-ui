-- Create the site_visitors table
CREATE TABLE IF NOT EXISTS site_visitors (
  id INTEGER PRIMARY KEY DEFAULT 1,
  count BIGINT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial record if it doesn't exist
INSERT INTO site_visitors (id, count) 
VALUES (1, 0) 
ON CONFLICT (id) DO NOTHING;

-- Create the increment function
CREATE OR REPLACE FUNCTION increment_visitor_count()
RETURNS BIGINT
LANGUAGE plpgsql
AS $$
DECLARE
  new_count BIGINT;
BEGIN
  -- Update the count and return the new value
  UPDATE site_visitors 
  SET count = count + 1,
      updated_at = CURRENT_TIMESTAMP
  WHERE id = 1
  RETURNING count INTO new_count;
  
  RETURN new_count;
END;
$$;

-- Enable Row Level Security (optional but recommended)
ALTER TABLE site_visitors ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anonymous users to read the count
CREATE POLICY "Allow anonymous read" ON site_visitors
  FOR SELECT TO anon
  USING (true);

-- Create a policy to allow the function to update
CREATE POLICY "Allow function update" ON site_visitors
  FOR UPDATE TO anon
  USING (id = 1);