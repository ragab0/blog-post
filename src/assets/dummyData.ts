import { Post } from "@/types/blog";

// Temporary mock data
export const mockPosts: Post[] = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    content: "Lorem ipsum dolor sit amet...",
    author: {
      id: "1",
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    createdAt: new Date().toISOString(),
    comments: [],
  },
];

export const mockPost: Post = {
  id: "1",
  title: "Getting Started with React and TypeScript",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  author: {
    id: "1",
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  createdAt: new Date().toISOString(),
  comments: [
    {
      id: "1",
      content: "Great article! Thanks for sharing.",
      author: {
        id: "2",
        name: "Jane Smith",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      },
      createdAt: new Date().toISOString(),
    },
  ],
};
