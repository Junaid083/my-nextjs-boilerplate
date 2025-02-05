# Next.js Authentication Boilerplate

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) featuring authentication, role-based authorization, and MongoDB integration.

## Features

- 🔐 Authentication with NextAuth.js
- 👥 Role-based authorization (Admin/Employee)
- 📊 MongoDB integration
- 🎨 Styled with Tailwind CSS and shadcn/ui
- 📱 Responsive design
- 🌙 Dark mode support

## Getting Started

### Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- MongoDB database (local or Atlas)
- Required environment variables set up

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=your_database_name
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```
