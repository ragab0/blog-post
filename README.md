# Blog Platform 📝

A modern blog platform built with React, TypeScript, and Vite. Features user authentication, post management, and a beautiful UI using Shadcn/ui components.

## 🚀 Features

- 👤 User authentication (login/register)
- 📝 Create, read, update, and delete blog posts
- 🎨 Modern UI with [dark mode, skeletons, loaders, toasters, dialogs,]
- 🔒 Protected routes
- 🚩 Public routes (to prevent prevent access to login/register pages)
- ⚡ Fast performance with Vite
- 🔍 Type safety with TypeScript
<!-- - 💬 Comment on posts -->

## 🛠️ Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **UI Components**: Shadcn/ui
- **State Management**: Redux Toolkit
- **Form Handling**: React Hook Form with Yup validation
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/ragab0/blog-platform.git
cd blog-platform
```

2. Install dependencies:

```bash
npm install
```

3. Create environment files:

Create `.env.development` and `.env.production` files in the root directory with the following content:

```env
VITE_API_URL=your_api_url_here
```

4. Start the development server:

```bash
npm run dev
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components
├── hooks/          # Custom React hooks
├── lib/           # Utility functions and configurations
├── pages/         # Page components
├── store/         # Redux store and slices
├── types/         # TypeScript type definitions
├── validations/   # Form validation schemas
└── App.tsx        # Root component
```

## 🔐 Authentication

The platform uses token-based authentication. The token is stored in localStorage and managed through the auth slice in Redux.

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icons
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
