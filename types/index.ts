export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "student" | "instructor" | "admin";
  createdAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  instructorId: string;
  instructor: User;
  category: string;
  level: "beginner" | "intermediate" | "advanced";
  duration: number; // in minutes
  rating: number;
  enrolledCount: number;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: number; // in minutes
  order: number;
  isCompleted?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Note {
  id: string;
  userId: string;
  lessonId: string;
  content: string;
  isAIGenerated: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  userId: string;
  user: User;
  lessonId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  replies?: Comment[];
}

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  description: string;
  dueDate: string;
  points: number;
  status?: "pending" | "submitted" | "graded";
  grade?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Exam {
  id: string;
  courseId: string;
  title: string;
  description: string;
  duration: number; // in minutes
  totalQuestions: number;
  passingScore: number;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface Question {
  id: string;
  examId?: string;
  questionBankId?: string;
  text: string;
  type: "multiple-choice" | "true-false" | "short-answer" | "essay";
  options?: string[];
  correctAnswer: string | string[];
  points: number;
  difficulty: "easy" | "medium" | "hard";
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  sender: User;
  receiverId: string;
  content: string;
  isRead: boolean;
  attachments?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface AIChat {
  id: string;
  userId: string;
  title: string;
  messages: ChatMessage[];
  createdAt: string;
  updatedAt: string;
}

export interface Theme {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  isDark: boolean;
}

export interface ProgressData {
  courseId: string;
  courseName: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
}

export interface PerformanceData {
  examId: string;
  examName: string;
  score: number;
  maxScore: number;
  date: string;
}
