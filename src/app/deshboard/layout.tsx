import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - ScalibleOne - Build Fast. Scale Smart.',
  description: 'Manage your projects, view submissions, and access your ScalibleOne account.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}