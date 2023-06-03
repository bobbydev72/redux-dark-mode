import { useDispatch, useSelector } from 'react-redux';
import { themeSelector } from '../../../redux/theme/selectors';
import { setTheme } from '../../../redux/theme/actionCreators';
import Image from 'next/image';

export const ThemeSwitcher: React.FC = ({}) => {
  const theme = useSelector(themeSelector);

  const dispatch = useDispatch();

  const switchTheme = () => {
    const nextTheme = theme === '' ? 'dark' : '';
    dispatch(setTheme(nextTheme));
  };

  return (
    <button
      onClick={switchTheme}
      className="flex items-center justify-center text-center w-[42px] h-[42px] border dark:border-slate-700 rounded-md dark:text-white"
    >
      <Image
        src={`/assets/icons/${theme !== '' ? 'sun' : 'moon'}.svg`}
        width={20}
        height={20}
        alt={`${theme !== '' ? 'Sun' : 'Moon'} icon`}
      />
    </button>
  );
};
