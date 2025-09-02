import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type PollCardProps = {
  id: string;
  question: string;
  votes?: number;
};

export default function PollCard({ id, question, votes = 0 }: PollCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{question}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-neutral-600">{votes} votes</CardContent>
      <CardFooter>
        <Link href={`/polls/${id}`} className="underline text-sm">View & vote</Link>
      </CardFooter>
    </Card>
  );
}


