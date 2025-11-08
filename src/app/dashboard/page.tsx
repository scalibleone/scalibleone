'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { 
  User, 
  Mail, 
  Calendar, 
  FileText, 
  Settings,
  LogOut,
  Loader2,
  Home
} from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';

interface Submission {
  id: string;
  name: string;
  email: string;
  idea: string;
  created_at: string;
  status: string;
}

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loadingSubmissions, setLoadingSubmissions] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      fetchUserSubmissions();
    }
  }, [user]);

  const fetchUserSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .eq('email', user?.email)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoadingSubmissions(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0F14] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#8B5CF6] animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0B0F14]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#11161C] to-[#1a1f2e] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#E5E7EB] mb-2">
                Welcome back, {user.user_metadata?.full_name || 'User'}!
              </h1>
              <p className="text-[#9CA3AF]">Manage your projects and account settings</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 bg-[#11161C] border border-gray-800 rounded-lg text-[#E5E7EB] hover:border-[#8B5CF6] transition-colors"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/20 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <div className="bg-[#11161C] border border-gray-800 rounded-xl p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-xl font-bold text-[#E5E7EB] mb-1">
                  {user.user_metadata?.full_name || 'User'}
                </h2>
                <p className="text-sm text-[#9CA3AF]">{user.email}</p>
              </div>

              <div className="space-y-4 border-t border-gray-800 pt-6">
                <div className="flex items-center gap-3 text-[#9CA3AF]">
                  <Mail className="w-5 h-5" />
                  <div>
                    <p className="text-xs text-[#9CA3AF]">Email</p>
                    <p className="text-sm text-[#E5E7EB]">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[#9CA3AF]">
                  <Calendar className="w-5 h-5" />
                  <div>
                    <p className="text-xs text-[#9CA3AF]">Joined</p>
                    <p className="text-sm text-[#E5E7EB]">
                      {new Date(user.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-2 bg-[#0B0F14] border border-gray-800 rounded-lg text-[#E5E7EB] hover:border-[#8B5CF6] transition-colors">
                <Settings className="w-4 h-4" />
                Account Settings
              </button>
            </div>
          </motion.div>

          {/* Submissions History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="bg-[#11161C] border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-[#8B5CF6]" />
                <h2 className="text-2xl font-bold text-[#E5E7EB]">Your Submissions</h2>
              </div>

              {loadingSubmissions ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-6 h-6 text-[#8B5CF6] animate-spin" />
                </div>
              ) : submissions.length > 0 ? (
                <div className="space-y-4">
                  {submissions.map((submission) => (
                    <div
                      key={submission.id}
                      className="bg-[#0B0F14] border border-gray-800 rounded-lg p-4 hover:border-[#8B5CF6] transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-[#E5E7EB]">
                          {submission.name}
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          submission.status === 'new' 
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                            : submission.status === 'contacted'
                            ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                            : 'bg-green-500/10 text-green-400 border border-green-500/30'
                        }`}>
                          {submission.status}
                        </span>
                      </div>
                      <p className="text-[#9CA3AF] text-sm mb-3 line-clamp-2">
                        {submission.idea}
                      </p>
                      <p className="text-xs text-[#9CA3AF]">
                        Submitted on {new Date(submission.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-[#9CA3AF] mx-auto mb-4 opacity-50" />
                  <p className="text-[#9CA3AF] mb-4">No submissions yet</p>
                  <Link
                    href="/#contact-form"
                    className="inline-flex items-center gap-2 btn-primary"
                  >
                    Submit Your First Idea
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}