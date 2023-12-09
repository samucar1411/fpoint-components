import { FC, ReactNode, SVGProps } from 'react';
import classNames from 'classnames';

interface IconButtonProps {
  variant?: 'default' | 'ghost' | 'bare';
  appearance?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  intent?: 'none' | 'success' | 'critical';
  disabled?: boolean;
  onClick?: () => void;
  icon:  ReactNode | ((props: SVGProps<SVGSVGElement>) => React.ReactElement | null);
}

const IconButton: FC<IconButtonProps> = ({
  variant = 'default',
  appearance = 'primary',
  size = 'medium',
  intent = 'none',
  disabled = false,
  onClick,
  icon,
}) => {
  const buttonClasses = classNames(
    'rounded-md',
    'p-2',
    'flex items-center justify-center',
    {
      'bg-blue-500 text-white hover:bg-blue-700 focus:bg-blue-700 focus:ring focus:ring-blue-300':
        variant === 'default' && appearance === 'primary',
      'bg-white text-content drop-shadow-sm border border-gray-500 hover:border-gray:600 hover:text-gray-500 active:border-gray:600 focus:ring focus:ring-blue-300':
        variant === 'default' && appearance === 'secondary',
    },
    {
      'h-8 w-8': size === 'small',
      'h-10 w-10': size === 'medium',
      'h-12 w-12': size === 'large',
    },
    {
      'text-blue-500 bg-neutral-50 hover:bg-neutral-100 hover:text-blue-600 focus:text-blue-700 focus:bg-neutral-200':
        variant === 'ghost' && appearance === 'primary',
      'text-content bg-neutral-50 hover:bg-neutral-100 hover:text-gray-600 focus:text-gray-700 focus:bg-neutral-200':
        variant === 'ghost' && appearance === 'secondary',
    },
    {
      'text-blue-500 bg-neutral-50 hover:text-blue-600 focus:text-blue-700':
        variant === 'bare' && appearance === 'primary',
      'text-content bg-neutral-50 hover:text-gray-500 focus:text-gray-600':
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
      'opacity-50 cursor-not-allowed': disabled === true,
    }
  );

  return (
    <button className={ buttonClasses } onClick={ onClick } disabled={disabled}>
     {typeof icon === 'function' ? icon({}) : icon}
    </button>
  );
};

export default IconButton;
