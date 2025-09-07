"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Question, QuestionType, pollStorage } from "@/types/poll";

import { 
  Plus, 
  Trash2, 
  Eye, 
  Save, 
  Type, 
  CheckSquare, 
  Star, 
  List, 
  Image, 
  Calendar,
  Settings,
  Copy
} from "lucide-react";

export default function NewPollPage() {
  const router = useRouter();
  const [pollTitle, setPollTitle] = useState("");
  const [pollDescription, setPollDescription] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionType, setCurrentQuestionType] = useState<QuestionType>('text');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questionTypes = [
    { type: 'text', label: 'Text Response', icon: Type, description: 'Open-ended text answers' },
    { type: 'multiple-choice', label: 'Multiple Choice', icon: CheckSquare, description: 'Select one or multiple options' },
    { type: 'rating', label: 'Rating Scale', icon: Star, description: 'Rate on a scale (1-5, 1-10, etc.)' },
    { type: 'ranking', label: 'Ranking', icon: List, description: 'Rank options in order of preference' },
    { type: 'date', label: 'Date/Time', icon: Calendar, description: 'Select dates or times' },
    { type: 'file', label: 'File Upload', icon: Image, description: 'Upload images or documents' },
    { type: 'custom', label: 'Custom Field', icon: Settings, description: 'Create your own question type' }
  ];

  const addQuestion = () => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type: currentQuestionType,
      title: "",
      description: "",
      required: true,
      options: currentQuestionType === 'multiple-choice' || currentQuestionType === 'ranking' ? [''] : undefined,
      settings: currentQuestionType === 'rating' ? { min: 1, max: 5 } : {}
    };
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, ...updates } : q));
  };

  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const addOption = (questionId: string) => {
    const question = questions.find(q => q.id === questionId);
    if (question && question.options) {
      updateQuestion(questionId, { options: [...question.options, ''] });
    }
  };

  const updateOption = (questionId: string, optionIndex: number, value: string) => {
    const question = questions.find(q => q.id === questionId);
    if (question && question.options) {
      const newOptions = [...question.options];
      newOptions[optionIndex] = value;
      updateQuestion(questionId, { options: newOptions });
    }
  };

  const removeOption = (questionId: string, optionIndex: number) => {
    const question = questions.find(q => q.id === questionId);
    if (question && question.options && question.options.length > 1) {
      const newOptions = question.options.filter((_, index) => index !== optionIndex);
      updateQuestion(questionId, { options: newOptions });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!pollTitle.trim()) {
      alert('Please enter a poll title');
      return;
    }

    if (questions.length === 0) {
      alert('Please add at least one question');
      return;
    }

    // Validate questions
    for (const question of questions) {
      if (!question.title.trim()) {
        alert(`Please enter a title for the ${questionTypes.find(t => t.type === question.type)?.label} question`);
        return;
      }
      
      if ((question.type === 'multiple-choice' || question.type === 'ranking') && 
          (!question.options || question.options.some(opt => !opt.trim()))) {
        alert(`Please fill in all options for the "${question.title}" question`);
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Create the poll
      const newPoll = pollStorage.createPoll({
        title: pollTitle,
        description: pollDescription,
        questions: questions.map(q => ({
          ...q,
          options: q.options?.filter(opt => opt.trim()) // Remove empty options
        }))
      });

      // Redirect to the poll
      router.push(`/polls/${newPoll.id}`);
    } catch (error) {
      console.error('Error creating poll:', error);
      alert('Failed to create poll. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderQuestionBuilder = (question: Question) => {
    const IconComponent = questionTypes.find(t => t.type === question.type)?.icon || Type;
    
    return (
      <Card key={question.id} className="card-gradient mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <IconComponent className="w-5 h-5 text-cyan-600" />
              <CardTitle className="text-lg">
                {questionTypes.find(t => t.type === question.type)?.label}
              </CardTitle>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">
                <Copy className="w-4 h-4" />
              </Button>
              <Button 
                variant="secondary" 
                size="sm" 
                onClick={() => deleteQuestion(question.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={`title-${question.id}`}>Question Title *</Label>
            <Input
              id={`title-${question.id}`}
              value={question.title}
              onChange={(e) => updateQuestion(question.id, { title: e.target.value })}
              placeholder="Enter your question..."
              className="text-base"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor={`desc-${question.id}`}>Description (Optional)</Label>
            <Textarea
              id={`desc-${question.id}`}
              value={question.description || ''}
              onChange={(e) => updateQuestion(question.id, { description: e.target.value })}
              placeholder="Add more context or instructions..."
              className="min-h-[80px] text-base"
            />
          </div>

          {(question.type === 'multiple-choice' || question.type === 'ranking') && (
            <div className="space-y-3">
              <Label>Options</Label>
              {question.options?.map((option, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={option}
                    onChange={(e) => updateOption(question.id, index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    className="flex-1"
                  />
                  {question.options && question.options.length > 1 && (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => removeOption(question.id, index)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                variant="secondary"
                size="sm"
                onClick={() => addOption(question.id)}
                className="w-full"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Option
              </Button>
            </div>
          )}

          {question.type === 'rating' && (
            <div className="space-y-3">
              <Label>Rating Scale</Label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`min-${question.id}`}>Minimum</Label>
                  <Input
                    id={`min-${question.id}`}
                    type="number"
                    value={question.settings?.min || 1}
                    onChange={(e) => updateQuestion(question.id, { 
                      settings: { ...question.settings, min: parseInt(e.target.value) || 1 }
                    })}
                    className="text-base"
                  />
                </div>
                <div>
                  <Label htmlFor={`max-${question.id}`}>Maximum</Label>
                  <Input
                    id={`max-${question.id}`}
                    type="number"
                    value={question.settings?.max || 5}
                    onChange={(e) => updateQuestion(question.id, { 
                      settings: { ...question.settings, max: parseInt(e.target.value) || 5 }
                    })}
                    className="text-base"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={question.required}
                onChange={(e) => updateQuestion(question.id, { required: e.target.checked })}
                className="rounded border-gray-300 text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-sm text-gray-600">Required question</span>
            </label>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <main className="min-h-screen bg-texture">
      <div className="container-max py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-navy-900 tracking-wide mb-2">Create Your Poll</h1>
            <p className="text-gray-600">Design any type of poll with complete creative freedom</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Poll Settings */}
            <Card className="card-gradient mb-8">
              <CardHeader>
                <CardTitle className="text-xl">Poll Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="poll-title">Poll Title *</Label>
                  <Input
                    id="poll-title"
                    value={pollTitle}
                    onChange={(e) => setPollTitle(e.target.value)}
                    placeholder="What's your poll about?"
                    className="text-base"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="poll-description">Description</Label>
                  <Textarea
                    id="poll-description"
                    value={pollDescription}
                    onChange={(e) => setPollDescription(e.target.value)}
                    placeholder="Provide context or instructions for your poll..."
                    className="min-h-[100px] text-base"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Question Type Selector */}
            <Card className="card-gradient mb-8">
              <CardHeader>
                <CardTitle className="text-xl">Add Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                  {questionTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <button
                        key={type.type}
                        type="button"
                        onClick={() => setCurrentQuestionType(type.type as QuestionType)}
                        className={`p-4 rounded-brand border-2 transition-all duration-200 ${
                          currentQuestionType === type.type
                            ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <IconComponent className="w-6 h-6 mx-auto mb-2" />
                        <div className="text-sm font-medium">{type.label}</div>
                        <div className="text-xs text-gray-500 mt-1">{type.description}</div>
                      </button>
                    );
                  })}
                </div>
                
                <Button type="button" onClick={addQuestion} className="w-full" size="lg">
                  <Plus className="w-4 h-4 mr-2" />
                  Add {questionTypes.find(t => t.type === currentQuestionType)?.label} Question
                </Button>
              </CardContent>
            </Card>

            {/* Questions List */}
            {questions.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">
                  Your Questions ({questions.length})
                </h2>
                {questions.map(renderQuestionBuilder)}
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4 justify-center">
              <Button type="submit" size="lg" className="px-8" disabled={isSubmitting}>
                <Save className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Creating...' : 'Create Poll'}
              </Button>
              <Button type="button" variant="secondary" size="lg" className="px-8">
                <Eye className="w-4 h-4 mr-2" />
                Preview Poll
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}