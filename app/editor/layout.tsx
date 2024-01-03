import AppBar from '@/components/app-bar';

export default function CodeEditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppBar />
      <div className="mt-4 pl-5 pr-5">{children}</div>
    </>
  );
}
