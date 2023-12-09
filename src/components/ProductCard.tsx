import { CubeOutline, CurrencyDollarCircle } from '@untitled-ui/icons-react';
import { FC } from 'react';
import Button from './Button';

interface Props {
    name: string;
    description: string;
    id: string;
    price: string;
    image: string;
}

export const ProductCard: FC<Props> = ({ name, description, id, price, image}) => {
  return (
    <div className='bg-white p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 inline-flex'>
        <div className='gap-8 flex flex-col justify-start'>
            <div className='self-stretch h-28 flex-col justify-center items-center gap-2.5 flex'>
                <img className='w-44 h-28 object-cover' src={ image } alt={ name }/>
            </div>

            <div className='flex-col justify-start items-start gap-1 flex w-56'>
                <h5 className='text-gray-800 text-sm font-medium leading-tight tracking-tight'>{ name }</h5>
                <p className='text-gray-600 text-xs font-medium  leading-none tracking-tight'>{ description }</p>
            </div>
        </div>

        <div className='w-56 h-px relative '>
            <div className='w-56 h-px left-0 top-0 absolute bg-gray-200' />
        </div>

        <div className='self-stretch h-12 flex-col justify-start items-start gap-3 flex'>
            <div className='self-stretch justify-between items-start inline-flex'>
                <div className='justify-start items-start gap-1 flex'>
                    <CubeOutline />
                    <p className='text-gray-600 text-xs font-normal leading-tight'>Product ID</p>
                </div>
                <div className='justify-start items-center gap-1 flex'>
                    <div className='text-gray-800 text-xs font-semibold leading-tight tracking-tight'>{ id }</div>
                </div>
            </div>

            <div className='self-stretch justify-between items-start inline-flex'>
                <div className='justify-start items-start gap-1 flex'>
                    <CurrencyDollarCircle />
                    <p className='text-gray-600 text-xs font-normal leading-tight'>Precio</p>
                </div>
                <div className='justify-start items-center gap-1 flex'>
                    <div className='text-gray-800 text-xs font-semibold leading-tight tracking-tight'>{ price }</div>
                </div>
            </div>
        </div>

        <div className='w-full justify-center'>
         <Button 
            label='Ver Detalles'
            appearance='secondary'
            size='small'
        />
        </div>
    
    </div>

    
  )
}
