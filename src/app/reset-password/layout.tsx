import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password - ScalibleOne - Build Fast. Scale Smart.',
  description: 'Set a new password for your ScalibleOne account.',
};

export default function ResetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}