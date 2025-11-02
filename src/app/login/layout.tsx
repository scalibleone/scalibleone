import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - ScalibleOne - Build Fast. Scale Smart.',
  description: 'Sign in to your ScalibleOne account to access your dashboard and manage your projects.',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}