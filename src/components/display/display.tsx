import { FC } from 'react';
import './display.scss';

interface IDisplayProps {
    calc:string
    result:string
}

const Display: FC<IDisplayProps> = ({ calc, result }) => (
    <div className="display">
        {result ? (<span>{result}</span>) : ''}
        { calc || '0'}
    </div>
);

export default Display;
