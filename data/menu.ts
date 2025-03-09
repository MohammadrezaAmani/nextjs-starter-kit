import {
  LayoutDashboard,
  BookOpen,
  Video,
  FileText,
  MessageSquare,
  BrainCircuit,
  ClipboardList,
  Award,
  HelpCircle,
  Settings,
  Bookmark,
  Lightbulb,
  GraduationCap,
  Calendar,
} from "lucide-react";

export const menuItems = [
  { to: "/dashboard", Icon: LayoutDashboard, label: "Dashboard" },
  {
    to: "/courses",
    Icon: BookOpen,
    label: "Courses",
    subMenu: [
      { to: "/courses", Icon: Bookmark, label: "My Courses" },
      { to: "/courses/explore", Icon: Lightbulb, label: "Explore" },
    ],
  },
  { to: "/video-chat", Icon: Video, label: "Video Chat" },
  { to: "/notes", Icon: FileText, label: "Notes" },
  { to: "/messages", Icon: MessageSquare, label: "Messages", badge: 2 },
  { to: "/ai-chat", Icon: BrainCircuit, label: "AI Chat" },
  {
    to: "/assignments",
    Icon: ClipboardList,
    label: "Assignments",
    badge: 3,
    subMenu: [
      {
        to: "/assignments/pending",
        Icon: Calendar,
        label: "Pending",
        badge: 3,
      },
      {
        to: "/assignments/completed",
        Icon: GraduationCap,
        label: "Completed",
      },
    ],
  },
  { to: "/exams", Icon: Award, label: "Exams" },
  { to: "/help", Icon: HelpCircle, label: "Help & Support" },
  { to: "/settings", Icon: Settings, label: "Settings" },
];
export const mobileMenuItems = [
  { to: "/dashboard", Icon: LayoutDashboard, label: "Dashboard" },
  {
    to: "/assignments",
    Icon: ClipboardList,
    label: "Assignments",
    badge: 3,
  },
  { to: "/exams", Icon: Award, label: "Exams" },
  { to: "/settings", Icon: Settings, label: "Settings" },
];
