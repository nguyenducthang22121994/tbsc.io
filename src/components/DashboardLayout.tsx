import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navItems = [
    { label: 'Tổng quan', href: '#' },
    { label: 'Tiền', href: '#' },
    { label: 'iPower', href: '#' },
    { label: 'Cổ phiếu', href: '#', active: true },
    { label: 'Trái phiếu', href: '#' },
    { label: 'Quỹ', href: '#' },
    { label: 'Phái sinh', href: '#' },
    { label: 'Khác', href: '#', hasDropdown: true },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col">
      {/* Top Navigation */}
      <header className="border-b border-[var(--card-border)] bg-[var(--card-bg)]">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-3 text-sm font-medium transition-colors relative ${
                    item.active
                      ? 'text-[var(--primary)] border-b-2 border-[var(--primary)]'
                      : 'text-[var(--text-muted)] hover:text-white'
                  }`}
                >
                  <span className="flex items-center">
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                  </span>
                </Link>
              ))}
            </div>
            {/* Right side icons/user info could go here */}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
