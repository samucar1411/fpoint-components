import { FC, useState } from 'react';
import classNames from 'classnames';

interface ToggleProps {
  defaultChecked?: boolean;
  label?: string;
  helperText?: string;
  disabled?: boolean;
}

export const Toggle: FC<ToggleProps> = ({
  defaultChecked = false,
  label,
  helperText,
  disabled = false,
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const [initialLabel] = useState(label);
  const [initialHelperText] = useState(helperText);

  const handleChange = () => {
    if (!disabled) {
      setIsChecked(!isChecked);
    }
  };

  const containerClasses = classNames(
    'relative',
    'inline-flex',
    'items-center',
    'cursor-pointer',
    'gap-3',
    { 'opacity-50 cursor-not-allowed': disabled }
  );

  const labelClasses = classNames('text-gray-800 text-sm leading-normal tracking-tight', { 'text-gray-500': disabled });

  const helperTextClasses = classNames('text-gray-600 text-xs font-medium leading-tight tracking-tight', { 'text-gray-500': disabled });

  return (
    <label className={containerClasses}>
      <input
        type='checkbox'
        value=''
        className='sr-only peer'
        checked={isChecked}
        onChange={handleChange}
      />
      <div
        className={`w-9 h-5 p-[2px] bg-gray-100 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full ring-offset-2 ${
          isChecked ? 'peer-checked:bg-blue-500' : ''
        }`}
      >
        <div
          className={`after:absolute after:top-[50%] after:bg-neutral-50 after:rounded-full after:h-4 after:w-4 after:transition-all transform -translate-y-1/2 ${
            isChecked ? 'after:translate-x-4' : ''
          }`}
        ></div>
      </div>
      <div className='flex flex-col'>
        <span className={labelClasses}>{initialLabel}</span>
        <span className={helperTextClasses}>{initialHelperText}</span>
      </div>
    </label>
  );
};
