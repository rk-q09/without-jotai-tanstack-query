import { Header } from "@/features/General/Header";
export default function PeoplesLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
