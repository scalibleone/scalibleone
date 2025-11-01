'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import Image from 'next/image';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      setSuccess(true);
    } catch (error: any) {
      setError(error.message || 'Failed to send reset email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F14] via-[#1a1f2e] to-[#0B0F14] flex items-center justify-center px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            <Image 
              src="/logo.svg" 
              alt="ScalibleOne Logo" 
              width={50} 
              height={50} 
              className="w-[50px] h-[50px]"
            />
            <span className="text-2xl font-bold text-[#E5E7EB]">
              ScalibleOne
            </span>
          </Link>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#11161C] border border-gray-800 rounded-2xl shadow-2xl shadow-black/40 p-8"
        >
          {success ? (
            // Success Message
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-[#10B981]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-[#10B981]" />
              </div>
              <h2 className="text-2xl font-bold text-[#E5E7EB] mb-2">Check Your Email</h2>
              <p className="text-[#9CA3AF] mb-6">
                We've sent a password reset link to <span className="font-semibold text-[#E5E7EB]">{email}</span>
              </p>
              <p className="text-sm text-[#9CA3AF] mb-6">
                Click the link in the email to reset your password. The link will expire in 1 hour.
              </p>
              <Link 
                href="/login"
                className="text-[#8B5CF6] hover:text-[#3B82F6] font-semibold transition-colors"
              >
                Back to Login
              </Link>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-[#E5E7EB] mb-2">Forgot Password?</h1>
                <p className="text-[#9CA3AF]">No worries, we'll send you reset instructions</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[#E5E7EB]">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-[#0B0F14] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-[#E5E7EB] placeholder-[#9CA3AF]"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Reset Link
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Back to Login */}
              <div className="text-center mt-6">
                <Link href="/login" className="text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors text-sm">
                  ← Back to Login
                </Link>
              </div>
            </>
          )}
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6"
        >
          <Link href="/" className="text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors text-sm">
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}