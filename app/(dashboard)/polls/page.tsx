import Link from "next/link";

export default function PollsListPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Polls</h1>
        <Link href="/polls/new" className="underline">Create new</Link>
      </div>
      <p className="text-neutral-600">No polls yet. Create your first poll.</p>
    </main>
  );
}


