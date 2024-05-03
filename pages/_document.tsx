import { Html, Head, Main, NextScript } from "next/document";
import TopNav from "@/components/TopNav";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <TopNav/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
