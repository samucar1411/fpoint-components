import { FC } from 'react';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  appearance?: 'primary' | 'secondary' | 'white';
}

const Loader: FC<LoaderProps> = ({ size = 'medium', appearance = 'primary' }) => {
  const getSize = () => {
    switch (size) {
      case 'small':
        return 'w-6 h-6';
      case 'large':
        return 'w-12 h-12';
      default:
        return 'w-8 h-8';
    }
  };

  const getColor = () => {
    switch (appearance) {
      case 'primary': 
        return '#3062D4'
      case 'secondary':
        return '#4A545E';
      default:
        return 'white';
    }
  };

  const getStrokeColor = () => {
    switch (appearance) {
      case 'white':
        return '#666666';
      default:
        return 'white';
    }
  };

  return (
    <svg
      className={`animate-spin ${getSize()}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="opacity-25" cx="10" cy="10" r="7" stroke={getStrokeColor()} strokeWidth="2" />
      <path
        d="M10 17C13.866 17 17 13.866 17 10"
        stroke={getColor()}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>

  );
};

export default Loader;
