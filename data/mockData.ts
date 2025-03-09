import {
  User,
  Course,
  Lesson,
  Note,
  Comment,
  Assignment,
  Exam,
  Question,
  Message,
  AIChat,
  ChatMessage,
  ProgressData,
  PerformanceData,
} from "../types";

export const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "student",
    createdAt: "2023-01-15T10:00:00Z",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "instructor",
    createdAt: "2023-01-10T08:30:00Z",
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert@example.com",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "admin",
    createdAt: "2023-01-05T14:20:00Z",
  },
];

// Mock Courses
export const courses: Course[] = [
  {
    id: "1",
    title: "Introduction to Machine Learning",
    description:
      "Learn the fundamentals of machine learning algorithms and applications.",
    thumbnail:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    instructorId: "2",
    instructor: users[1],
    category: "Data Science",
    level: "beginner",
    duration: 1200,
    rating: 4.8,
    enrolledCount: 1250,
    price: 49.99,
    createdAt: "2023-02-01T09:00:00Z",
    updatedAt: "2023-02-15T11:30:00Z",
  },
  {
    id: "2",
    title: "Advanced Web Development",
    description:
      "Master modern web development techniques with React, Node.js, and more.",
    thumbnail:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    instructorId: "2",
    instructor: users[1],
    category: "Web Development",
    level: "advanced",
    duration: 1800,
    rating: 4.9,
    enrolledCount: 980,
    price: 79.99,
    createdAt: "2023-01-20T10:15:00Z",
    updatedAt: "2023-02-10T14:45:00Z",
  },
  {
    id: "3",
    title: "Data Visualization with Python",
    description:
      "Learn to create compelling visualizations using Python libraries like Matplotlib and Seaborn.",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    instructorId: "2",
    instructor: users[1],
    category: "Data Science",
    level: "intermediate",
    duration: 900,
    rating: 4.7,
    enrolledCount: 750,
    price: 59.99,
    createdAt: "2023-02-05T08:45:00Z",
    updatedAt: "2023-02-20T16:30:00Z",
  },
];

// Mock Lessons
export const lessons: Lesson[] = [
  {
    id: "1",
    courseId: "1",
    title: "Introduction to Machine Learning Concepts",
    description:
      "Overview of machine learning and its applications in the real world.",
    videoUrl: "https://www.youtube.com/watch?v=ukzFI9rgwfU",
    duration: 45,
    order: 1,
    isCompleted: true,
    createdAt: "2023-02-01T09:30:00Z",
    updatedAt: "2023-02-01T09:30:00Z",
  },
  {
    id: "2",
    courseId: "1",
    title: "Supervised Learning Algorithms",
    description:
      "Deep dive into supervised learning algorithms like linear regression and decision trees.",
    videoUrl: "https://www.youtube.com/watch?v=Gv9_4yMHFhI",
    duration: 60,
    order: 2,
    isCompleted: true,
    createdAt: "2023-02-02T10:00:00Z",
    updatedAt: "2023-02-02T10:00:00Z",
  },
  {
    id: "3",
    courseId: "1",
    title: "Unsupervised Learning Techniques",
    description:
      "Explore clustering and dimensionality reduction techniques in machine learning.",
    videoUrl: "https://www.youtube.com/watch?v=IUn8k5zSI6g",
    duration: 55,
    order: 3,
    isCompleted: false,
    createdAt: "2023-02-03T11:15:00Z",
    updatedAt: "2023-02-03T11:15:00Z",
  },
];

// Mock Notes
export const notes: Note[] = [
  {
    id: "1",
    userId: "1",
    lessonId: "1",
    content:
      "Machine learning is a subset of AI that focuses on algorithms that can learn from data.",
    isAIGenerated: false,
    createdAt: "2023-02-05T14:20:00Z",
    updatedAt: "2023-02-05T14:20:00Z",
  },
  {
    id: "2",
    userId: "1",
    lessonId: "1",
    content:
      "Key machine learning types: supervised, unsupervised, and reinforcement learning.",
    isAIGenerated: true,
    createdAt: "2023-02-05T14:25:00Z",
    updatedAt: "2023-02-05T14:25:00Z",
  },
  {
    id: "3",
    userId: "1",
    lessonId: "2",
    content:
      "Linear regression is used for predicting continuous values, while logistic regression is for classification.",
    isAIGenerated: false,
    createdAt: "2023-02-06T10:10:00Z",
    updatedAt: "2023-02-06T10:10:00Z",
  },
];

// Mock Comments
export const comments: Comment[] = [
  {
    id: "1",
    userId: "1",
    user: users[0],
    lessonId: "1",
    content: "Great explanation of the core concepts!",
    createdAt: "2023-02-05T15:30:00Z",
    updatedAt: "2023-02-05T15:30:00Z",
  },
  {
    id: "2",
    userId: "3",
    user: users[2],
    lessonId: "1",
    content: "Could you provide more examples of real-world applications?",
    createdAt: "2023-02-05T16:45:00Z",
    updatedAt: "2023-02-05T16:45:00Z",
    replies: [
      {
        id: "3",
        userId: "2",
        user: users[1],
        lessonId: "1",
        content: "Sure! I'll cover more examples in the next lesson.",
        createdAt: "2023-02-05T17:20:00Z",
        updatedAt: "2023-02-05T17:20:00Z",
      },
    ],
  },
];

export const assignments: Assignment[] = [
  {
    id: "1",
    courseId: "1",
    title: "Linear Regression Implementation",
    description:
      "Implement a linear regression model from scratch using Python.",
    dueDate: "2023-03-10T23:59:59Z",
    points: 100,
    status: "submitted",
    grade: 85,
    createdAt: "2023-02-15T09:00:00Z",
    updatedAt: "2023-02-15T09:00:00Z",
  },
  {
    id: "2",
    courseId: "1",
    title: "Decision Trees Analysis",
    description:
      "Analyze the performance of decision trees on the provided dataset.",
    dueDate: "2023-03-20T23:59:59Z",
    points: 150,
    status: "pending",
    createdAt: "2023-02-20T10:30:00Z",
    updatedAt: "2023-02-20T10:30:00Z",
  },
];

// Mock Exams
export const exams: Exam[] = [
  {
    id: "1",
    courseId: "1",
    title: "Midterm Exam",
    description: "Covers all topics from the first half of the course.",
    duration: 120,
    totalQuestions: 50,
    passingScore: 70,
    startDate: "2023-04-01T10:00:00Z",
    endDate: "2023-04-01T12:00:00Z",
    createdAt: "2023-03-01T11:00:00Z",
    updatedAt: "2023-03-01T11:00:00Z",
  },
  {
    id: "2",
    courseId: "1",
    title: "Final Exam",
    description: "Comprehensive exam covering all course material.",
    duration: 180,
    totalQuestions: 75,
    passingScore: 75,
    startDate: "2023-06-01T09:00:00Z",
    endDate: "2023-06-01T12:00:00Z",
    createdAt: "2023-03-15T14:30:00Z",
    updatedAt: "2023-03-15T14:30:00Z",
  },
];

// Mock Questions
export const questions: Question[] = [
  {
    id: "1",
    examId: "1",
    questionBankId: "1",
    text: "Which of the following is NOT a type of machine learning?",
    type: "multiple-choice",
    options: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Deterministic Learning",
    ],
    correctAnswer: "Deterministic Learning",
    points: 5,
    difficulty: "easy",
    category: "Machine Learning Basics",
    createdAt: "2023-03-05T09:15:00Z",
    updatedAt: "2023-03-05T09:15:00Z",
  },
  {
    id: "2",
    examId: "1",
    questionBankId: "1",
    text: "True or False: K-means is a supervised learning algorithm.",
    type: "true-false",
    correctAnswer: "False",
    points: 3,
    difficulty: "medium",
    category: "Clustering Algorithms",
    createdAt: "2023-03-05T09:30:00Z",
    updatedAt: "2023-03-05T09:30:00Z",
  },
  {
    id: "3",
    examId: "1",
    questionBankId: "2",
    text: "Explain the difference between precision and recall in classification models.",
    type: "essay",
    correctAnswer:
      "Precision measures the accuracy of positive predictions, while recall measures the ability to find all positive instances.",
    points: 10,
    difficulty: "hard",
    category: "Model Evaluation",
    createdAt: "2023-03-05T10:00:00Z",
    updatedAt: "2023-03-05T10:00:00Z",
  },
];

// Mock Messages
export const messages: Message[] = [
  {
    id: "1",
    senderId: "1",
    sender: users[0],
    receiverId: "2",
    content: "Hi, I have a question about the linear regression assignment.",
    isRead: true,
    createdAt: "2023-03-08T14:25:00Z",
    updatedAt: "2023-03-08T14:25:00Z",
  },
  {
    id: "2",
    senderId: "2",
    sender: users[1],
    receiverId: "1",
    content: "Sure, what's your question?",
    isRead: true,
    createdAt: "2023-03-08T14:30:00Z",
    updatedAt: "2023-03-08T14:30:00Z",
  },
  {
    id: "3",
    senderId: "1",
    sender: users[0],
    receiverId: "2",
    content:
      "Should we use the normal equation or gradient descent for the implementation?",
    isRead: false,
    createdAt: "2023-03-08T14:35:00Z",
    updatedAt: "2023-03-08T14:35:00Z",
  },
];

// Mock AI Chat Messages
export const chatMessages: ChatMessage[] = [
  {
    id: "1",
    role: "user",
    content: "Can you explain what a neural network is?",
    timestamp: "2023-03-10T09:00:00Z",
  },
  {
    id: "2",
    role: "assistant",
    content:
      'A neural network is a computational model inspired by the human brain. It consists of layers of interconnected nodes or "neurons" that process information. Each connection has a weight that adjusts as learning proceeds, allowing the network to learn patterns in data and make predictions.',
    timestamp: "2023-03-10T09:00:05Z",
  },
  {
    id: "3",
    role: "user",
    content: "What are the different types of neural networks?",
    timestamp: "2023-03-10T09:01:00Z",
  },
  {
    id: "4",
    role: "assistant",
    content:
      "There are several types of neural networks, each designed for specific tasks:\n\n1. Feedforward Neural Networks: The simplest type where information moves in one direction.\n2. Convolutional Neural Networks (CNNs): Specialized for processing grid-like data such as images.\n3. Recurrent Neural Networks (RNNs): Have connections that form cycles, allowing them to maintain memory of previous inputs.\n4. Long Short-Term Memory Networks (LSTMs): A type of RNN designed to remember long-term dependencies.\n5. Generative Adversarial Networks (GANs): Consist of two networks that compete against each other to generate new, synthetic data.\n\nEach type has its strengths and is suited for different applications.",
    timestamp: "2023-03-10T09:01:10Z",
  },
];

// Mock AI Chats
export const aiChats: AIChat[] = [
  {
    id: "1",
    userId: "1",
    title: "Neural Networks Explanation",
    messages: chatMessages,
    createdAt: "2023-03-10T09:00:00Z",
    updatedAt: "2023-03-10T09:01:10Z",
  },
];

// Mock Progress Data
export const progressData: ProgressData[] = [
  {
    courseId: "1",
    courseName: "Introduction to Machine Learning",
    progress: 66,
    completedLessons: 2,
    totalLessons: 3,
  },
  {
    courseId: "2",
    courseName: "Advanced Web Development",
    progress: 30,
    completedLessons: 3,
    totalLessons: 10,
  },
  {
    courseId: "3",
    courseName: "Data Visualization with Python",
    progress: 15,
    completedLessons: 1,
    totalLessons: 7,
  },
];

// Mock Performance Data
export const performanceData: PerformanceData[] = [
  {
    examId: "1",
    examName: "Machine Learning Midterm",
    score: 85,
    maxScore: 100,
    date: "2023-04-01",
  },
  {
    examId: "2",
    examName: "Web Development Quiz 1",
    score: 92,
    maxScore: 100,
    date: "2023-03-15",
  },
  {
    examId: "3",
    examName: "Python Data Structures Test",
    score: 78,
    maxScore: 100,
    date: "2023-02-20",
  },
];

// Helper function to get all data
export function getMockData() {
  return {
    users,
    courses,
    lessons,
    notes,
    comments,
    assignments,
    exams,
    questions,
    messages,
    aiChats,
    progressData,
    performanceData,
  };
}

// Helper function to get current user
export function getCurrentUser(): User {
  return users[0]; // Default to first user
}

export const recentChats = [
  {
    id: 1,
    unreadCount: 0,
    title: "Neural Networks Explanation",
    timestamp: "2 days ago",
  },
  {
    id: 2,
    unreadCount: 0,
    title: "Linear Regression Help",
    timestamp: "1 week ago",
  },
  {
    id: 4,
    unreadCount: 0,
    title: "React Hooks Questions",
    timestamp: "2 weeks ago",
  },
  {
    id: 5,
    unreadCount: 0,
    title: "React Hooks Questions",
    timestamp: "2 weeks ago",
  },
  {
    id: 6,
    unreadCount: 0,
    title: "React Hooks Questions",
    timestamp: "2 weeks ago",
  },
  {
    id: 7,
    unreadCount: 0,
    title: "Neural Networks Explanation",
    timestamp: "2 days ago",
  },
  {
    id: 8,
    unreadCount: 0,
    title: "Linear Regression Help",
    timestamp: "1 week ago",
  },
  {
    id: 9,
    unreadCount: 0,
    title: "React Hooks Questions",
    timestamp: "2 weeks ago",
  },
  {
    id: 10,
    unreadCount: 0,
    title: "Neural Networks Explanation",
    timestamp: "2 days ago",
  },
  {
    id: 11,
    unreadCount: 0,
    title: "Linear Regression Help",
    timestamp: "1 week ago",
  },
  {
    id: 12,
    unreadCount: 0,
    title: "React Hooks Questions",
    timestamp: "2 weeks ago",
  },
  {
    id: 13,
    unreadCount: 0,
    title: "Neural Networks Explanation",
    timestamp: "2 days ago",
  },
  {
    id: 14,
    unreadCount: 0,
    title: "Linear Regression Help",
    timestamp: "1 week ago",
  },
  {
    id: 15,
    unreadCount: 0,
    title: "React Hooks Questions",
    timestamp: "2 weeks ago",
  },
];

export const suggestedQuestions = [
  "Explain the concept of backpropagation",
  "What’s the difference between CNN and RNN?",
  "How do I implement a decision tree from scratch?",
  "Explain the concept of overfitting",
];
