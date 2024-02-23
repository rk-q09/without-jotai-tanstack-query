import { Initializer } from "@/features/General/Initializer";
import "@/styles/globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Initializer>{children}</Initializer>
      </body>
    </html>
  );
}
