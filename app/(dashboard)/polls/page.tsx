"use client";
import Link from "next/link";
import { BarChart3, Clock, Eye, Plus, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Poll, pollStorage } from "@/types/poll";
import { createDemoPoll } from "@/utils/demo-data";

export default function PollsPage() {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load polls from storage
    let allPolls = pollStorage.getPolls();
    
    // If no polls exist, create a demo poll
    if (allPolls.length === 0) {
      createDemoPoll();
      allPolls = pollStorage.getPolls();
    }
    
    setPolls(allPolls);
    setIsLoading(false);
  }, []);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const getPollStatus = (poll: Poll) => {
    // For now, all polls are active. In a real app, you'd have status logic
    return 'active';
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-texture">
        <div className="container-max py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading your polls...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-texture">
      <div className="container-max py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-navy-900 tracking-wide mb-2">Your Polls</h1>
              <p className="text-gray-600">Create, manage, and analyze your polls</p>
            </div>
            <Link href="/polls/new">
              <Button size="lg" className="px-6">
                <Plus className="w-4 h-4 mr-2" />
                Create New Poll
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Polls</p>
                    <p className="text-2xl font-bold text-navy-900">{polls.length}</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-cyan-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Responses</p>
                    <p className="text-2xl font-bold text-navy-900">
                      {polls.reduce((sum, poll) => sum + poll.responses.length, 0)}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient">
              <CardContent className="p-6">
      <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Active Polls</p>
                    <p className="text-2xl font-bold text-navy-900">
                      {polls.filter(poll => getPollStatus(poll) === 'active').length}
                    </p>
                  </div>
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Polls Grid */}
          {polls.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {polls.map((poll) => (
                <Card key={poll.id} className="card-gradient hover:shadow-lg transition-all duration-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{poll.title}</CardTitle>
                        <CardDescription className="text-sm text-gray-600 mb-4">
                          {poll.description || "No description provided"}
                        </CardDescription>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        getPollStatus(poll) === 'active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {getPollStatus(poll)}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        {poll.questions.length} questions
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {poll.responses.length} responses
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        Created {formatDate(poll.createdAt)}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link href={`/polls/${poll.id}`} className="flex-1">
                        <Button variant="secondary" className="w-full">
                          <Eye className="w-4 h-4 mr-2" />
                          View Poll
                        </Button>
                      </Link>
                      <Button variant="secondary" size="sm">
                        <BarChart3 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-12">
              <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No polls yet</h3>
              <p className="text-gray-500 mb-6">Create your first poll to get started</p>
              <Link href="/polls/new">
                <Button size="lg">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Poll
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}