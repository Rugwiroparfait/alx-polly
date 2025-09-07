// types/poll.ts
export type QuestionType = 'text' | 'multiple-choice' | 'rating' | 'ranking' | 'date' | 'file' | 'custom';

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  description?: string;
  required: boolean;
  options?: string[];
  settings?: {
    min?: number;
    max?: number;
    [key: string]: any;
  };
}

export interface Poll {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  createdAt: Date;
  responses: PollResponse[];
}

export interface PollResponse {
  id: string;
  pollId: string;
  responses: Record<string, any>;
  submittedAt: Date;
}

// Simple in-memory storage
class PollStorage {
  private polls: Poll[] = [];
  private responses: PollResponse[] = [];

  createPoll(poll: Omit<Poll, 'id' | 'createdAt' | 'responses'>): Poll {
    const newPoll: Poll = {
      ...poll,
      id: Date.now().toString(),
      createdAt: new Date(),
      responses: []
    };
    this.polls.push(newPoll);
    return newPoll;
  }

  getPolls(): Poll[] {
    return this.polls;
  }

  getPoll(id: string): Poll | undefined {
    return this.polls.find(poll => poll.id === id);
  }

  submitResponse(pollId: string, responses: Record<string, any>): PollResponse {
    const response: PollResponse = {
      id: Date.now().toString(),
      pollId,
      responses,
      submittedAt: new Date()
    };
    this.responses.push(response);
    
    // Update poll with new response
    const poll = this.polls.find(p => p.id === pollId);
    if (poll) {
      poll.responses.push(response);
    }
    
    return response;
  }

  getPollResponses(pollId: string): PollResponse[] {
    return this.responses.filter(response => response.pollId === pollId);
  }
}

export const pollStorage = new PollStorage();
