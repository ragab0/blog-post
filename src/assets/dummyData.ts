import { Post } from "@/types/blog";

// Temporary mock data
export const mockPosts: Post[] = [
  {
    id: "1",
    title: "Welcome to my blogpost - article I",
    content: "Lorem ipsum dolor sit amet...",
    author: {
      id: "1",
      name: "Ragab Eid",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D35AQGNzyAZGmsxZA/profile-framedphoto-shrink_200_200/B4DZUzRe_nGkAY-/0/1740321976649?e=1741993200&v=beta&t=3hlKvfFpAV2kEyiGHfdsBBq_n_UNwp0umKT0xAcQGMs",
    },
    createdAt: new Date().toISOString(),
    comments: [],
  },
];

export const mockPost: Post = {
  id: "2",
  title: "Hello and Welcome to my blogpost - article II",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  author: {
    id: "2",
    name: "Eid Ragab",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D35AQGNzyAZGmsxZA/profile-framedphoto-shrink_200_200/B4DZUzRe_nGkAY-/0/1740321976649?e=1741993200&v=beta&t=3hlKvfFpAV2kEyiGHfdsBBq_n_UNwp0umKT0xAcQGMs",
  },
  createdAt: new Date().toISOString(),
  comments: [
    {
      id: "1",
      content: "Great article! Thanks for sharing.",
      author: {
        id: "2",
        name: "Ragab Eid",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4D35AQGNzyAZGmsxZA/profile-framedphoto-shrink_200_200/B4DZUzRe_nGkAY-/0/1740321976649?e=1741993200&v=beta&t=3hlKvfFpAV2kEyiGHfdsBBq_n_UNwp0umKT0xAcQGMs",
      },
      createdAt: new Date().toISOString(),
    },
  ],
};
