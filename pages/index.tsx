import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import  PostsList  from "@/components/PostsList";
import { useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [postCategory, setPostCategory]=useState<string | null>(null)

  // Select category on click, deselect on another click
  const handlePostCategory = (postCategoryId: string) => postCategory===postCategoryId ? setPostCategory(null) : setPostCategory(postCategoryId)
  console.log("in index: " + postCategory)
  return (
    <main className={`flex min-h-screen justify-around flex-col mx-28 my-10`}>
      <h1 className={`font-pd text-6xl`}>Mój cyfrowy dom</h1>
      <p className="border-l-2 border-cyan-500 p-2 font-pd italic text-lg">Nie mogłam żyć w żadnym ze światów, które były mi oferowane - w świecie moich rodziców, w świecie wojny, w świecie polityki. Musiałam stworzyć sobie swój własny świat - klimat, kraj, atmosferę, w którym mogę oddychać, rządzić, stwarzać się ponownie, kiedy zniszczyło mnie życie. Wierzę, że to jest powodem stojącym za każdym dziełem sztuki. - <a className="text-cyan-500 not-italic hover:underline decoration-cyan-500 after:content-['_↗'] ..." href="https://pl.wikipedia.org/wiki/Ana%C3%AFs_Nin" target="_blank">Anaïs Nin</a></p>
      <NavBar onCategorySelect={handlePostCategory} selectedCategory={postCategory}/>
      <PostsList category={postCategory}/>
      </main>
    
  );
}
