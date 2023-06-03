import Link from 'next/link';
import { ThemeSwitcher } from '../ui/buttons/ThemeSwitcher';
import { useDispatch, useSelector } from 'react-redux';
import { themeSelector } from '../../redux/theme/selectors';
import { setTheme } from '../../redux/theme/actionCreators';

export const Header: React.FC = () => {
  const theme = useSelector(themeSelector);

  const dispatch = useDispatch();

  function switchTheme() {
    const nextTheme = theme === '' ? 'dark' : '';
    dispatch(setTheme(nextTheme));
  }

  return (
    <header className="sticky top-0 dark:bg-slate-800 bg-white border-b dark:border-slate-700 py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="uppercase dark:text-white">
            Redux Dark Theme
          </Link>
          <ThemeSwitcher onClick={switchTheme} />
        </div>
      </div>
    </header>
  );
};
