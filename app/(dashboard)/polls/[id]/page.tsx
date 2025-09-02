type Params = { params: { id: string } };

export default function PollDetailPage({ params }: Params) {
  const { id } = params;
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Poll #{id}</h1>
      <p className="text-neutral-600">This is a placeholder for the poll details and voting UI.</p>
    </main>
  );
}


