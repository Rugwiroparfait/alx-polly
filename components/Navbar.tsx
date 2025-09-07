import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container-max h-16 px-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-navy-900 tracking-wide">
          ALX Polly
        </Link>
        <nav className="flex items-center gap-6">
          <Link 
            href="/polls" 
            className="text-sm font-medium text-gray-700 hover:text-navy-900 transition-colors"
          >
            Polls
          </Link>
          <Link 
            href="/polls/new" 
            className="text-sm font-medium text-gray-700 hover:text-navy-900 transition-colors"
          >
            New Poll
          </Link>
          <Button variant="secondary" size="sm">
            Sign in
          </Button>
        </nav>
      </div>
    </header>
  );
}


