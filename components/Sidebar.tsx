'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { LayoutDashboard, Users, LogOut, Menu, Settings } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      role: 'all',
    },
    {
      href: '/dashboard/admin',
      label: 'Admin Panel',
      icon: Users,
      role: 'admin',
    },
    {
      href: '/dashboard/settings',
      label: 'Settings',
      icon: Settings,
      role: 'all',
    },
  ];

  const SidebarContent = () => (
    <div className="flex h-full flex-col bg-white dark:bg-gray-900">
      <div className="flex items-center gap-2 px-6 py-4">
        <Avatar>
          <AvatarImage src={session?.user?.image || ''} />
          <AvatarFallback>{session?.user?.name?.[0] || 'U'}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{session?.user?.name}</p>
          <p className="text-xs text-muted-foreground">
            {session?.user?.email}
          </p>
        </div>
      </div>
      <Separator />
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          if (
            item.role === 'all' ||
            (session?.user && session.user.role === item.role)
          ) {
            return (
              <Button
                key={item.href}
                asChild
                variant={isActive(item.href) ? 'secondary' : 'ghost'}
                className="w-full justify-start"
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            );
          }
          return null;
        })}
      </nav>
      <Separator />
      <div className="p-4">
        <Button
          onClick={() => signOut({ callbackUrl: '/auth/signin' })}
          variant="outline"
          className="w-full justify-start"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed left-4 top-4 z-40 md:hidden"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
      <div className="hidden h-screen w-64 border-r md:block">
        <SidebarContent />
      </div>
    </>
  );
};

export default Sidebar;
