-- Drop the orphaned increment_visitor_count() SECURITY DEFINER function.
-- This function belonged to the visitor_counter table that was already dropped.
-- It is no longer used — the visitor counter feature was replaced with Google Analytics 4.
-- Removing it eliminates the SECURITY DEFINER vulnerability where anon and authenticated
-- roles could execute it via /rest/v1/rpc/increment_visitor_count.

DROP FUNCTION IF EXISTS public.increment_visitor_count();
