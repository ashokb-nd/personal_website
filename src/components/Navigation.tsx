'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { portfolioData } from '@/data/portfolio';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/teaching', label: 'Teaching' },
  ...(portfolioData.art ? [{ href: '/art', label: 'Art' as const }] : []),
  ...(portfolioData.photography ? [{ href: '/photography', label: 'Photography' as const, external: true }] : []),
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="text-center py-8">
      <div className="flex justify-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm ${
              pathname === item.href
                ? 'font-semibold text-slate-900'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}