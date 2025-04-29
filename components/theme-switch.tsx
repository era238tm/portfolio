import clsx from 'clsx';
import { useTheme } from '@/contexts/theme-context';

export default function ThemeSwitch(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      {...props}
      className={clsx(
        props.className,
        theme === 'dark' ? 'icon-[solar--sun-bold]' : 'icon-[solar--moon-bold]'
      )}
      onClick={toggleTheme}
    ></button>
  )
}
