-- Drop the orphaned visitor_counter table.
-- This table is no longer used — the visitor counter feature was replaced
-- with Google Analytics 4. The table contained only a single integer count,
-- not user data. Removing it eliminates an unnecessary table with a
-- permissive USING (true) SELECT policy.

DROP TABLE IF EXISTS public.visitor_counter;
