import Link from "next/link";
import { BarChart3, Clock, Plus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PollsListPage() {
  return (
    <main className="min-h-screen bg-texture">
      <div className="container-max py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-navy-900 tracking-wide">Your Polls</h1>
            <p className="text-gray-600 mt-2">Manage and analyze your polling campaigns</p>
          </div>
          <Link href="/polls/new">
            <Button size="lg" className="px-6">
              <Plus className="w-4 h-4 mr-2" />
              Create New Poll
            </Button>
          </Link>
        </div>
        
        <div className="max-w-4xl">
          <Card className="text-center py-16 card-gradient">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-brand-lg mx-auto mb-6 flex items-center justify-center">
                <BarChart3 className="w-10 h-10 text-gray-400" />
              </div>
              <CardTitle className="text-2xl">No polls yet</CardTitle>
              <CardDescription className="text-lg">
                Create your first poll to start gathering insights from your audience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Link href="/polls/new">
                  <Button size="lg" className="px-8">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Your First Poll
                  </Button>
                </Link>
                <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mt-8">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Unlimited polls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Real-time results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>Rich analytics</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}


