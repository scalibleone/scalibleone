import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up - ScalibleOne - Build Fast. Scale Smart.',
  description: 'Create your ScalibleOne account and start building your digital products today.',
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}