"use client";
import { BarChart3, CheckCircle, Clock, Eye, List, Share2, Star, Users, Vote } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Poll, Question, pollStorage } from "@/types/poll";

export default function PollDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [poll, setPoll] = useState<Poll | null>(null);
  const [responses, setResponses] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const pollId = params.id as string;
    const foundPoll = pollStorage.getPoll(pollId);
    if (foundPoll) {
      setPoll(foundPoll);
    } else {
      // Poll not found, redirect to polls list
      router.push('/polls');
    }
  }, [params.id, router]);

  const handleResponseChange = (questionId: string, value: any) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!poll) return;

    // Validate required questions
    for (const question of poll.questions) {
      if (question.required && !responses[question.id]) {
        alert(`Please answer the required question: "${question.title}"`);
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Submit response
      pollStorage.submitResponse(poll.id, responses);
      setIsSubmitted(true);
      setShowResults(true);
    } catch (error) {
      console.error('Error submitting response:', error);
      alert('Failed to submit response. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderQuestion = (question: Question) => {
    const response = responses[question.id];

    switch (question.type) {
      case 'text':
        return (
          <Textarea
            value={response || ''}
            onChange={(e) => handleResponseChange(question.id, e.target.value)}
            placeholder="Enter your answer..."
            className="min-h-[100px]"
            required={question.required}
          />
        );

      case 'multiple-choice':
        return (
          <div className="space-y-2">
            {question.options?.map((option, index) => (
              <label key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={response === option}
                  onChange={(e) => handleResponseChange(question.id, e.target.value)}
                  className="text-cyan-500 focus:ring-cyan-500"
                  required={question.required}
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        );

      case 'rating':
        const min = question.settings?.min || 1;
        const max = question.settings?.max || 5;
        return (
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{min}</span>
              <span>{max}</span>
            </div>
            <div className="flex gap-2">
              {Array.from({ length: max - min + 1 }, (_, i) => {
                const value = min + i;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => handleResponseChange(question.id, value)}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                      response === value
                        ? 'border-cyan-500 bg-cyan-500 text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 'ranking':
        return (
          <div className="space-y-2">
            <p className="text-sm text-gray-600 mb-3">Drag to reorder (or select in order of preference):</p>
            {question.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200">
                <span className="text-sm text-gray-500 w-8">#{index + 1}</span>
                <span className="flex-1 text-gray-700">{option}</span>
                <input
                  type="number"
                  min="1"
                  max={question.options?.length}
                  value={response?.[option] || index + 1}
                  onChange={(e) => {
                    const newResponse = { ...response };
                    newResponse[option] = parseInt(e.target.value);
                    handleResponseChange(question.id, newResponse);
                  }}
                  className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                />
              </div>
            ))}
          </div>
        );

      case 'date':
        return (
          <Input
            type="date"
            value={response || ''}
            onChange={(e) => handleResponseChange(question.id, e.target.value)}
            required={question.required}
          />
        );

      case 'file':
        return (
          <div className="space-y-3">
            <Input
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  handleResponseChange(question.id, file.name);
                }
              }}
              required={question.required}
            />
            {response && (
              <p className="text-sm text-green-600">✓ File selected: {response}</p>
            )}
          </div>
        );

      default:
        return (
          <Input
            value={response || ''}
            onChange={(e) => handleResponseChange(question.id, e.target.value)}
            placeholder="Enter your answer..."
            required={question.required}
          />
        );
    }
  };

  const renderResults = () => {
    if (!poll) return null;

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-navy-900">Poll Results</h3>
        {poll.questions.map((question) => (
          <Card key={question.id} className="card-gradient">
            <CardHeader>
              <CardTitle className="text-lg">{question.title}</CardTitle>
              {question.description && (
                <CardDescription>{question.description}</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {poll.responses.map((response, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Response #{index + 1}</p>
                    <p className="text-gray-800">
                      {question.type === 'rating' 
                        ? `${response.responses[question.id]} / ${question.settings?.max || 5}`
                        : question.type === 'ranking'
                        ? Object.entries(response.responses[question.id] || {})
                            .sort(([,a], [,b]) => (a as number) - (b as number))
                            .map(([option]) => option)
                            .join(' → ')
                        : response.responses[question.id] || 'No response'
                      }
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  if (!poll) {
    return (
      <main className="min-h-screen bg-texture">
        <div className="container-max py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading poll...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-texture">
      <div className="container-max py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-navy-900">{poll.title}</h1>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={() => setShowResults(!showResults)}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  {showResults ? 'Hide' : 'Show'} Results
                </Button>
              </div>
            </div>
            
            {poll.description && (
              <p className="text-gray-600 text-lg mb-6">{poll.description}</p>
            )}

            {/* Poll Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Users className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Responses</p>
                <p className="text-xl font-bold text-navy-900">{poll.responses.length}</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Vote className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Questions</p>
                <p className="text-xl font-bold text-navy-900">{poll.questions.length}</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Clock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Created</p>
                <p className="text-sm font-medium text-navy-900">
                  {new Date(poll.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Results View */}
          {showResults && renderResults()}

          {/* Poll Form */}
          {!isSubmitted && !showResults && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {poll.questions.map((question, index) => (
                <Card key={question.id} className="card-gradient">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {index + 1}. {question.title}
                      {question.required && <span className="text-red-500 ml-1">*</span>}
                    </CardTitle>
                    {question.description && (
                      <CardDescription>{question.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    {renderQuestion(question)}
                  </CardContent>
                </Card>
              ))}

              <div className="flex justify-center pt-6">
                <Button type="submit" size="lg" className="px-8" disabled={isSubmitting}>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Submitting...' : 'Submit Response'}
                </Button>
              </div>
            </form>
          )}

          {/* Success Message */}
          {isSubmitted && !showResults && (
            <Card className="card-gradient text-center py-12">
              <CardContent>
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-navy-900 mb-2">Thank you!</h2>
                <p className="text-gray-600 mb-6">Your response has been recorded successfully.</p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={() => setShowResults(true)} size="lg">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Results
                  </Button>
                  <Button variant="secondary" onClick={() => router.push('/polls')} size="lg">
                    Back to Polls
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}