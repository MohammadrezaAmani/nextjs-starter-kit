import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  if (typeof date === "string") {
    date = new Date(date);
  }
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function getRandomColor(): string {
  const colors = [
    "bg-primary-100 text-primary-800",
    "bg-secondary-100 text-secondary-800",
    "bg-success-100 text-success-800",
    "bg-warning-100 text-warning-800",
    "bg-danger-100 text-danger-800",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}
