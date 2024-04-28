import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import  PostsList  from "@/components/PostsList";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [postCategory, setPostCategory]=useState<string | null>(null)
  const handlePostCategory = (postCategoryId: string) => {
    setPostCategory(postCategoryId)
  }
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1 className={`font-domine text-6xl`}>Hello!</h1>
      <NavBar onCategorySelect={handlePostCategory}/>
      <PostsList category={postCategory}/>
      </main>
    
  );
}
