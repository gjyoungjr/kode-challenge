import { NavSideBar } from '@/components/nav-sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavSideBar />
      <div className="lg:pl-60">
        <div className="mt-10 pl-5 pr-5">{children}</div>
      </div>
    </>
  );
}
