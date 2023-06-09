import { dummyCardsProps } from '../../types/modules/cards';

export const Card: React.FC<dummyCardsProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {icon}
          </svg>
        </span>
      </div>
      <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        {title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        {description}
      </p>
    </div>
  );
};
