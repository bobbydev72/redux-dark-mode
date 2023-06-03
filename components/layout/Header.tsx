import Link from 'next/link';
import { ThemeSwitcher } from '../ui/buttons/ThemeSwitcher';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 dark:bg-slate-800 bg-white border-b dark:border-slate-700 py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="uppercase dark:text-white">
            Redux Dark Theme
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
