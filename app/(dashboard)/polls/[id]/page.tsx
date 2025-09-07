"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Vote, 
  BarChart3, 
  Users, 
  Clock, 
  Share2, 
  Eye, 
  Star,
  Calendar,
  Image,
  Type,
  CheckSquare,
  List
} from "lucide-react";

type Params = { params: { id: string } };

type QuestionType = 'text' | 'multiple-choice' | 'rating' | 'ranking' | 'date' | 'file' | 'custom';

interface Question {
  id: string;
  type: QuestionType;
  title: string;
  description?: string;
  required: boolean;
  options?: string[];
  settings?: any;
}

export default function PollDetailPage({ params }: Params) {
  const { id } = params;
  const [responses, setResponses] = useState<Record<string, any>>({});
  
  // Mock poll data with multiple question types
  const poll = {
    id,
    title: "Employee Satisfaction Survey",
    description: "Help us improve our workplace by sharing your honest feedback",
    questions: [
      {
        id: "1",
        type: "multiple-choice" as QuestionType,
        title: "How satisfied are you with your current role?",
        description: "Please select the option that best describes your satisfaction level",
        required: true,
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"]
      },
      {
        id: "2", 
        type: "rating" as QuestionType,
        title: "Rate your work-life balance",
        description: "On a scale of 1-10, how would you rate your work-life balance?",
        required: true,
        settings: { min: 1, max: 10 }
      },
      {
        id: "3",
        type: "text" as QuestionType,
        title: "What's the best part about working here?",
        description: "Share what you love most about our company culture",
        required: false
      },
      {
        id: "4",
        type: "ranking" as QuestionType,
        title: "Rank these benefits by importance",
        description: "Drag to reorder from most important (top) to least important (bottom)",
        required: true,
        options: ["Health Insurance", "Flexible Hours", "Remote Work", "Professional Development", "Gym Membership"]
      },
      {
        id: "5",
        type: "date" as QuestionType,
        title: "When would you prefer our next team building event?",
        description: "Select your preferred date range",
        required: false
      }
    ]
  };

  const updateResponse = (questionId: string, value: any) => {
    setResponses(prev => ({ ...prev, [questionId]: value }));
  };

  const renderQuestion = (question: Question) => {
    const getIcon = (type: QuestionType) => {
      switch (type) {
        case 'text': return Type;
        case 'multiple-choice': return CheckSquare;
        case 'rating': return Star;
        case 'ranking': return List;
        case 'date': return Calendar;
        case 'file': return Image;
        default: return Type;
      }
    };

    const IconComponent = getIcon(question.type);

    return (
      <Card key={question.id} className="mb-6 card-gradient">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <IconComponent className="w-5 h-5 text-cyan-600" />
            <CardTitle className="text-xl text-navy-900">{question.title}</CardTitle>
            {question.required && <span className="text-red-500 text-sm">*</span>}
          </div>
          {question.description && (
            <CardDescription className="text-base">{question.description}</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {question.type === 'text' && (
            <Textarea
              value={responses[question.id] || ''}
              onChange={(e) => updateResponse(question.id, e.target.value)}
              placeholder="Share your thoughts..."
              className="min-h-[100px]"
            />
          )}

          {question.type === 'multiple-choice' && (
            <div className="space-y-3">
              {question.options?.map((option, index) => (
                <label key={index} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-brand hover:border-cyan-300 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-transparent cursor-pointer transition-all duration-300 group">
                  <input 
                    type="radio" 
                    name={`question-${question.id}`}
                    value={option}
                    onChange={(e) => updateResponse(question.id, e.target.value)}
                    className="text-cyan-500 focus:ring-cyan-500" 
                  />
                  <span className="text-gray-900 font-medium group-hover:text-navy-900">{option}</span>
                </label>
              ))}
            </div>
          )}

          {question.type === 'rating' && (
            <div className="space-y-4">
              <div className="flex justify-center space-x-2">
                {Array.from({ length: question.settings?.max || 5 }, (_, i) => i + 1).map((rating) => (
                  <button
                    key={rating}
                    onClick={() => updateResponse(question.id, rating)}
                    className={`w-12 h-12 rounded-brand border-2 transition-all duration-200 ${
                      responses[question.id] === rating
                        ? 'border-cyan-500 bg-cyan-50 text-cyan-600'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <Star className={`w-6 h-6 mx-auto ${responses[question.id] === rating ? 'fill-current' : ''}`} />
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{question.settings?.min || 1}</span>
                <span>{question.settings?.max || 5}</span>
              </div>
            </div>
          )}

          {question.type === 'ranking' && (
            <div className="space-y-3">
              <p className="text-sm text-gray-600 mb-4">Drag to reorder (most important at top)</p>
              {question.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-brand bg-gray-50">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                    {index + 1}
                  </div>
                  <span className="text-gray-900 font-medium">{option}</span>
                </div>
              ))}
            </div>
          )}

          {question.type === 'date' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <Input
                    type="date"
                    onChange={(e) => updateResponse(question.id, { ...responses[question.id], start: e.target.value })}
                    className="text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                  <Input
                    type="date"
                    onChange={(e) => updateResponse(question.id, { ...responses[question.id], end: e.target.value })}
                    className="text-base"
                  />
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <main className="min-h-screen bg-texture">
      <div className="container-max py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-navy-900 tracking-wide mb-2">{poll.title}</h1>
            <p className="text-gray-600">{poll.description}</p>
          </div>
          
          <form className="space-y-6">
            {poll.questions.map(renderQuestion)}
            
            <Card className="card-gradient">
              <CardContent className="py-6">
                <div className="flex gap-4 justify-center">
                  <Button size="lg" className="px-8">
                    <Vote className="w-4 h-4 mr-2" />
                    Submit Responses
                  </Button>
                  <Button variant="secondary" size="lg" className="px-8">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>

          {/* Results Preview */}
          <Card className="mt-8 card-gradient">
            <CardHeader>
              <CardTitle className="text-xl text-navy-900 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Live Results Preview
              </CardTitle>
              <CardDescription>
                Results will appear here once responses are submitted
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Very Satisfied</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-40 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000" style={{ width: '65%' }}></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12 font-semibold">65%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Satisfied</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-40 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-3 rounded-full transition-all duration-1000" style={{ width: '25%' }}></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12 font-semibold">25%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Neutral</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-40 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-gray-400 to-gray-500 h-3 rounded-full transition-all duration-1000" style={{ width: '10%' }}></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12 font-semibold">10%</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>247 responses</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>5 days left</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm">
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="secondary" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      View Results
                    </Button>
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