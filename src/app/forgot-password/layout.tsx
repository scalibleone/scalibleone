import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password - ScalibleOne - Build Fast. Scale Smart.',
  description: 'Reset your ScalibleOne account password.',
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}