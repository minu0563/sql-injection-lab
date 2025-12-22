export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <p>layout.tsx에 존재하는 텍스트 입니다</p>
        {children}
      </body>
    </html>
  );
}
