import Link from "next/link";

import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <div>
        <Link href="/about">About Us</Link>
      </div>
      <div>
        <Link href="/blog">Blog</Link>
      </div>
    </main>
  );
}
