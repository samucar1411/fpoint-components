import { FC, ReactNode, SVGProps } from 'react';
import classNames from 'classnames';

interface BadgeProps {
  label: string;
  intent: 'neutral' | 'informative' | 'positive' | 'negative' | 'warning';
  leadingIcon?: ReactNode | ((props: SVGProps<SVGSVGElement>) => React.ReactElement | null);
  trailingIcon?: ReactNode | ((props: SVGProps<SVGSVGElement>) => React.ReactElement | null);
}

export const Badge: FC<BadgeProps> = ({ label, intent, leadingIcon, trailingIcon }) => {
  const badgeClasses = classNames(
    'h-6 px-2 justify-start items-center gap-1 inline-flex rounded',
    {
      'bg-zinc-200 text-gray-800': intent === 'neutral',
      'text-blue-800 bg-blue-200': intent === 'informative',
      'text-green-800 bg-green-200': intent === 'positive',
      'text-red-800 bg-red-200': intent === 'negative',
      'text-yellow-800 bg-yellow-200': intent === 'warning',
    }
  );

  return (
    <div className={badgeClasses}>
      {leadingIcon && <span className='h-4 w-4'>{typeof leadingIcon === 'function' ? leadingIcon({}) : leadingIcon}</span>}
      <span className='text-sm leading-normal tracking-tight'>{ label }</span>
      {trailingIcon && <span className='h-4 w-4'>{typeof trailingIcon === 'function' ? trailingIcon({}) : trailingIcon}</span>}
    </div>
  );
};

