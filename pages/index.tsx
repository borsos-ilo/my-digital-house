import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import  PostsList  from "@/components/PostsList";
import { useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [postCategory, setPostCategory]=useState<string | null>(null)
  const handlePostCategory = (postCategoryId: string) => {
    setPostCategory(postCategoryId)
  }
  return (
    <main className={`flex min-h-screen flex-col justify-between p-28`}>
      <h1 className={`font-pd text-6xl`}>Mój cyfrowy dom</h1>
      <p className="border-l-2 border-cyan-500 p-2 font-pd italic text-balance">Nie mogłam żyć w żadnym ze światów, które były mi oferowane - w świecie moich rodziców, w świecie wojny, w świecie polityki. Musiałam stworzyć sobie swój własny świat - klimat, kraj, atmosferę, w którym mogę oddychać, rządzić, stwarzać się ponownie, kiedy zniszczyło mnie życie. Wierzę, że to jest powodem stojącym za każdym dziełem sztuki. - <a className="text-cyan-500 not-italic hover:underline decoration-cyan-500 after:content-['_↗'] ..." href="https://pl.wikipedia.org/wiki/Ana%C3%AFs_Nin" target="_blank">Anaïs Nin</a></p>
      <NavBar onCategorySelect={handlePostCategory}/>
      <PostsList category={postCategory}/>
      </main>
    
  );
}
