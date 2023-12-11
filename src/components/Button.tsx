import { FC, ReactNode, SVGProps } from 'react';
import classNames from 'classnames';

import Loader from './Loader';

interface ButtonProps {
  variant?: 'default' | 'ghost' | 'bare';
  appearance?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  intent?: 'none' | 'success' | 'critical';
  label: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  leadingIcon?: ReactNode | ((props: SVGProps<SVGSVGElement>) => React.ReactElement | null);
  trailingIcon?: ReactNode | ((props: SVGProps<SVGSVGElement>) => React.ReactElement | null);
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = 'default',
  appearance = 'primary',
  size = 'medium',
  intent = 'none',
  label,
  disabled = false,
  loading = false,
  onClick,
  leadingIcon,
  trailingIcon,
  fullWidth
}) => {
  const buttonClasses = classNames(
    'rounded-lg',
    'gap-2',
    'flex',
    'font-medium',
    {
      'py-2 px-4 bg-blue-500 text-white hover:bg-blue-700 focus:bg-blue-700 focus:ring focus:ring-blue-300':
        variant === 'default' && appearance === 'primary',
      'py-2 px-4 bg-white text-coolGray-500 drop-shadow-sm border border-coolGray-300 hover:border-coolGray:600 hover:text-gray-500 active:border-coolGray:600 focus:ring focus:ring-blue-300':
        variant === 'default' && appearance === 'secondary',
    },
    {
      'px-3 py-1 text-sm leading-normal tracking-wider h-8': size === 'small',
      'text-sm leading-normal tracking-wide h-10': size === 'medium',
      'text-base leading-7 tracking-wide h-12': size === 'large',
    },
    {
      'py-2 px-4 text-blue-500 bg-neutral-50 hover:bg-neutral-100  focus:text-blue-700 focus:bg-neutral-200':
        variant === 'ghost' && appearance === 'primary',
      'py-2 px-4 text-content bg-neutral-50 hover:bg-neutral-100 hover:text-gray-800 focus:text-gray-600 focus:bg-neutral-200':
        variant === 'ghost' && appearance === 'secondary',
    },
    {
      'p-0 h-auto drop-shadow-sm text-blue-500 bg-neutral-50 hover:text-blue-800 focus:text-blue-700 focus:ring focus:ring-blue-300':
        variant === 'bare' && appearance === 'primary',
      'h-auto text-content bg-neutral-50 hover:text-gray-800 focus:text-gray-600 focus:ring focus:ring-blue-300':
        variant === 'bare' && appearance === 'secondary',
    },
    {
      'py-2 px-4 text-white border-green-500 bg-green-500 hover:bg-green-600 focus:bg-green-700':
        variant === 'default' && appearance === 'primary' && intent === 'success',
      'py-2 px-4 border border-red-500 text-white bg-red-500 hover:bg-red-600 focus:bg-red-600':
      variant === 'default' && appearance === 'primary' && intent === 'critical',
      'py-2 px-4 bg-white text-green-500 drop-shadow-sm border border-gray-500 hover:border-gray:600 hover:text-green-600 active:border-gray:600 focus:ring focus:ring-blue-300':
        variant === 'default' && appearance === 'secondary' && intent === 'success',
      'py-2 px-4 bg-white text-red-500 drop-shadow-sm border border-gray-500 hover:border-gray:600 hover:text-red-600 active:border-gray:600 focus:ring focus:ring-blue-300':
      variant === 'default' && appearance === 'secondary' && intent === 'critical',
    },
    {
      'opacity-50 cursor-not-allowed': disabled || loading === true
    },
    {
      'w-full' : fullWidth === true
    } 
  );

  const getLoaderColor = () => {
    if ((variant === 'bare' || variant === 'ghost') && appearance === 'secondary') {
      return 'secondary';
    }
  
    if (variant === 'bare' || variant === 'ghost') {
      return 'primary';
    }
  
    switch (appearance) {
      case 'primary':
        return 'white';
      case 'secondary':
        return 'secondary';
      default:
        return 'white';
    }
  };
  

  return (
    <button className={ buttonClasses } onClick={ onClick } disabled={ disabled }>
      { leadingIcon && <span> {typeof leadingIcon === 'function' ? leadingIcon({}) : leadingIcon}</span>}
      {loading && <Loader size='small' appearance={getLoaderColor()} /> }
      <span className='w-full text-center'>{ label }</span>
      { trailingIcon && <span>{typeof trailingIcon === 'function' ? trailingIcon({}) : trailingIcon}</span>}
    </button>
  );
};

export default Button;
