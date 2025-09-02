import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="h-16 border-b border-neutral-200 bg-white">
      <div className="max-w-5xl mx-auto h-full px-4 flex items-center justify-between">
        <Link href="/" className="font-semibold">alx-polly</Link>
        <nav className="flex items-center gap-3">
          <Link href="/polls" className="text-sm text-neutral-700 hover:underline">Polls</Link>
          <Link href="/polls/new" className="text-sm text-neutral-700 hover:underline">New Poll</Link>
          <Button variant="ghost">Sign in</Button>
        </nav>
      </div>
    </header>
  );
}


