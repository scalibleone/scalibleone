import { supabase } from './supabaseClient';

// Sign up new user
export async function signUp(email: string, password: string, name: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

// Sign in existing user
export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

// Sign out
export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
}

// Get current user
export async function getCurrentUser() {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return { user, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
}

// Check if user is admin (you'll need to set this in Supabase)
export async function isAdmin() {
  try {
    const { user } = await getCurrentUser();
    if (!user) return false;
    
    // Check if user has admin role in their metadata
    // You can set this manually in Supabase for your admin account
    return user.user_metadata?.role === 'admin';
  } catch (error) {
    return false;
  }
}