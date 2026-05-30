export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="page" lang="ru">
      <body className="page__body">
        {children}
      </body>
    </html>
  );
}