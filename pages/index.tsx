import Image from "next/image";
import { Inter } from "next/font/google";
import { NavBar } from "@/components";
import  PostsList  from "@/components/PostsList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1 className={`font-domine text-6xl`}>Hello!</h1>
      <NavBar/>
      <PostsList/>
      </main>
    
  );
}
