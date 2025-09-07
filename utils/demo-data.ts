import { pollStorage } from "@/types/poll";

// utils/demo-data.ts

export function createDemoPoll() {
  // Check if demo poll already exists
  const existingPolls = pollStorage.getPolls();
  const demoPoll = existingPolls.find(poll => poll.title === "Team Lunch Preferences");
  
  if (demoPoll) {
    return demoPoll;
  }

  // Create demo poll
  const demoPollData = {
    title: "Team Lunch Preferences",
    description: "Help us decide where to go for our monthly team lunch. Your input will help us choose the best option for everyone.",
    questions: [
      {
        id: "q1",
        type: "multiple-choice" as const,
        title: "Which cuisine do you prefer?",
        description: "Select your preferred type of cuisine",
        required: true,
        options: ["Italian", "Mexican", "Asian", "Mediterranean", "American"]
      },
      {
        id: "q2", 
        type: "rating" as const,
        title: "How important is dietary restrictions accommodation?",
        description: "Rate from 1 (not important) to 5 (very important)",
        required: true,
        settings: { min: 1, max: 5 }
      },
      {
        id: "q3",
        type: "text" as const,
        title: "Any specific dietary requirements or preferences?",
        description: "Please share any allergies, restrictions, or preferences",
        required: false
      }
    ]
  };

  return pollStorage.createPoll(demoPollData);
}
