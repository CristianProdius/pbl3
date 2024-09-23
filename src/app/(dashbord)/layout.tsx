import Menu from "@/components/menu";
import NavBar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen flex overflow-y-clip">
      {/* Sidebar */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo_icon.png" width={32} height={32} alt="logo" />
          <span className="hidden lg:block font-bold">MateAI</span>
        </Link>
        <Menu />
      </div>
      {/* Content */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]  bg-[#F7F8FA] overflow-scroll flex flex-col">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
