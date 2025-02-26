declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string | null;
      email: string | null;
      image: string | null;
      role: string;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    image?: string;
  }
}
