import { FC, ReactNode, SVGProps } from 'react';
import classNames from 'classnames';

interface ButtonProps {
  variant?: 'default' | 'ghost' | 'bare';
  appearance?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  intent?: 'none' | 'success' | 'critical';
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  leadingIcon?: ReactNode | ((props: SVGProps<SVGSVGElement>) => React.ReactElement | null);
  trailingIcon?: ReactNode | ((props: SVGProps<SVGSVGElement>) => React.ReactElement | null);
}

const Button: FC<ButtonProps> = ({
  variant = 'default',
  appearance = 'primary',
  size = 'medium',
  intent = 'none',
  label,
  disabled = false,
  onClick,
  leadingIcon,
  trailingIcon,
}) => {
  const buttonClasses = classNames(
    'rounded-md',
    'py-2',
    'px-4',
    'gap-2',
    'flex',
    {
      'bg-blue-500 text-white hover:bg-blue-700 focus:bg-blue-700 focus:ring focus:ring-blue-300':
        variant === 'default' && appearance === 'primary',
      'bg-white text-content drop-shadow-sm border border-gray-500 hover:border-gray:600 hover:text-gray-500 active:border-gray:600 focus:ring focus:ring-blue-300':
        variant === 'default' && appearance === 'secondary',
    },
    {
      'px-3 py-1 text-sm leading-normal tracking-tight h-8': size === 'small',
      'text-sm leading-normal tracking-tight h-10': size === 'medium',
      'text-base leading-7 tracking-tight h-12': size === 'large',
    },
    {
      'text-blue-500 bg-neutral-50 hover:bg-neutral-100 hover:text-blue-600 focus:text-blue-700 focus:bg-neutral-200':
        variant === 'ghost' && appearance === 'primary',
      'text-content bg-neutral-50 hover:bg-neutral-100 hover:text-gray-600 focus:text-gray-700 focus:bg-neutral-200':
        variant === 'ghost' && appearance === 'secondary',
    },
    {
      'px-0 py-0 text-blue-500 bg-neutral-50 hover:text-blue-600 focus:text-blue-700':
        variant === 'bare' && appearance === 'primary',
      'px-0 py-0 text-content bg-neutral-50 hover:text-gray-500 focus:text-gray-600':
        variant === 'bare' && appearance === 'secondary',
    },
    {
      'text-white border-green-500 bg-green-500 hover:bg-green-600 focus:bg-green-700':
        variant === 'default' && appearance === 'primary' && intent === 'success',
      'border border-red-500 text-white bg-red-500 hover:bg-red-600 focus:bg-red-600':
      variant === 'default' && appearance === 'primary' && intent === 'critical',
      'bg-white text-green-500 drop-shadow-sm border border-gray-500 hover:border-gray:600 hover:text-green-600 active:border-gray:600 focus:ring focus:ring-blue-300':
        variant === 'default' && appearance === 'secondary' && intent === 'success',
      'bg-white text-red-500 drop-shadow-sm border border-gray-500 hover:border-gray:600 hover:text-red-600 active:border-gray:600 focus:ring focus:ring-blue-300':
      variant === 'default' && appearance === 'secondary' && intent === 'critical',
    },
    {
      'opacity-50 cursor-not-allowed': disabled === true
    }
  );

  return (
    <button className={ buttonClasses } onClick={ onClick } disabled={ disabled }>
      { leadingIcon && <span> {typeof leadingIcon === 'function' ? leadingIcon({}) : leadingIcon}</span>}
      { label }
      { trailingIcon && <span>{typeof trailingIcon === 'function' ? trailingIcon({}) : trailingIcon}</span>}
    </button>
  );
};

export default Button;
