import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewPollPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Create a new poll</h1>
      <form className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="question">Question</Label>
          <Input id="question" placeholder="What should we have for lunch?" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="options">Options</Label>
          <Textarea id="options" placeholder={"One option per line\nPizza\nSushi\nBurgers"} />
        </div>
        <div>
          <Button type="submit">Create poll</Button>
        </div>
      </form>
    </main>
  );
}


