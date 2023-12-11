import { FC } from 'react';
import classNames from 'classnames';

interface AvatarProps {
  size?: '2xSmall' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
  img?: string;
  name: string;
  appearance?: 'blue' | 'green' | 'purple' | 'gray' | 'orange' | 'red';
}

const Avatar: FC<AvatarProps> = ({ size = 'medium', img, name, appearance = 'gray' }) => {
  const avatarClasses = classNames(
    'flex items-center justify-center rounded-full',
    {
      'h-4 w-4 leading-4': size === '2xSmall',
      'h-6 w-6 leading-4': size === 'xSmall',
      'h-8 w-8 leading-5': size === 'small',
      'h-12 w-12 leading-6': size === 'medium',
      'h-16 w-16 leading-7': size === 'large',
      'h-24 w-24 leading-8': size === 'xLarge',
    },
    {
      'bg-blue-100 text-blue-500': appearance === 'blue',
      'bg-green-100 text-green-500': appearance === 'green',
      'bg-purple-100 text-purple-500': appearance === 'purple',
      'bg-gray-100 text-gray-500': appearance === 'gray',
      'bg-orange-100 text-orange-500': appearance === 'orange',
      'bg-red-100 text-red-500': appearance === 'red',
    }
  );

  const getInitials = () => {
    const initialsArray = name.split(' ');
    const firstInitial = name[0]?.charAt(0) || '';
    const secondInitial = initialsArray[1]?.charAt(0) || '';
    return `${ firstInitial }${ secondInitial }`;
  };

  return (
    <div className={ avatarClasses }>
      {img ? (
        <img className='h-full w-full rounded-full' src={ img } alt='User Avatar' />
      ) : (
        <span className='font-medium'>{getInitials()}</span>
      )}
    </div>
  );
};

export default Avatar;
