import AppBar from '@/components/app-bar';

export default function CodeEditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppBar />
      <div className="mt-14 overflow-hidden">{children}</div>
    </>
  );
}
