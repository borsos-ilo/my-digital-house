import NavBar from "@/components/NavBar";
import  PostsList  from "@/components/PostsList";
import { useState } from "react";
import { motion } from "framer-motion";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [postCategory, setPostCategory]=useState<string | null>(null)

  // Select category on click, deselect on another click
  const handlePostCategory = (postCategoryId: string) => postCategory===postCategoryId ? setPostCategory(null) : setPostCategory(postCategoryId)
  
  return (
    <main className={`flex min-h-screen flex-col mx-28 my-5`}>
      <motion.h1 whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300, damping: 10 } }} className="font-arapey flex-1 text-6xl py-5">Mój cyfrowy ogród</motion.h1>
      <p className="border-l-2 flex-1 rounded-sm border-cyan-500 pl-5 font-hs italic text-lg">Nie mogłam żyć w żadnym ze światów, które były mi oferowane - w świecie moich rodziców, w świecie wojny, w świecie polityki. Musiałam stworzyć sobie swój własny świat - klimat, kraj, atmosferę, w którym mogę oddychać, rządzić, stwarzać się ponownie, kiedy zniszczyło mnie życie. Wierzę, że to jest powodem stojącym za każdym dziełem sztuki. - <a className="text-cyan-500 not-italic hover:underline decoration-cyan-500" href="https://pl.wikipedia.org/wiki/Ana%C3%AFs_Nin" target="_blank">Anaïs Nin</a></p>
      <NavBar onCategorySelect={handlePostCategory} selectedCategory={postCategory}/>
      <div className={"min-h-[500px]"}>
        <PostsList category={postCategory}/>
      </div>
      
      </main>
    
  );
}
