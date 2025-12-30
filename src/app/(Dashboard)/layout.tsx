import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="h-screen flex">
        {/* LEFT */}
        <div className="w-[15%] md:w-[10%] lg:w-[18%] xl:w-[15%] p-3 overflow-y-scroll">
          <Link href="/" className="flex gap-2 justify-center items-center lg:justify-start">
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <h1 className="hidden lg:block font-bold text-lg">SchooLama</h1>
          </Link>
          <Menu/>
        </div>
        {/* RIGHT */}
        <div className="w-[85%] md:w-[90%] lg:w-[82%] xl:w-[85%] overflow-scroll bg-[#F7F8FA]">
          <Navbar/>
          {children}
        </div>
      </div>
  );
}