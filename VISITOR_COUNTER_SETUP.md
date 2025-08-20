# Visitor Counter Setup Guide

The visitor counter is already integrated into your Scorpion UI site. To activate it with Supabase:

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Create a new project
3. Wait for the project to finish setting up

## 2. Get Your API Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy your:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **Anon/Public key** (a long string starting with `eyJ...`)

## 3. Update Your Environment Variables

Edit the `.env` file in your project root and replace the placeholders:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 4. Set Up the Database

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy and paste the contents of `supabase-setup.sql`
4. Click **Run** to execute the SQL

This will:
- Create the `site_visitors` table
- Add the `increment_visitor_count()` function
- Set up proper security policies

## 5. Test Your Setup

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Visit your site and check the visitor counter at the bottom of the homepage
3. The counter should increment once per browser session
4. Open the site in an incognito window to test incrementing again

## How It Works

- **First-time visitors**: Counter increments and session is marked
- **Same session**: Counter displays current value without incrementing
- **New session/browser**: Counter increments again
- **Fallback**: If Supabase is not configured, uses localStorage

## Troubleshooting

- **Counter shows "------"**: Check your Supabase credentials in `.env`
- **Counter doesn't increment**: Check the browser console for errors
- **Counter resets**: Make sure the database table was created correctly

## Security Notes

- The anon key is safe to expose in client-side code
- Row Level Security (RLS) is enabled to prevent unauthorized writes
- Only the increment function can modify the counter