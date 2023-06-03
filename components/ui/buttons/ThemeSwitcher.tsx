type TestProps = {
  onClick?: () => void;
};

export const ThemeSwitcher: React.FC<TestProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center text-center w-[42px] h-[42px] border border-slate-500 rounded-md dark:text-white"
    >
      D
    </button>
  );
};
