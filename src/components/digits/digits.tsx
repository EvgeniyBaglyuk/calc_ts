import { FC } from 'react';
import './digits.scss';

interface IDigitsProps {
    createDigits:() => JSX.Element[];
    updateCalc: (data:string) => void
    calculate:() => void;
}

const Digits:FC<IDigitsProps> = ({ createDigits, updateCalc, calculate }) => (
    <div className="digits">
        {createDigits()}
        <button type="button" onClick={() => updateCalc('0')}>0</button>
        <button type="button" onClick={() => updateCalc('.')}>.</button>
        <button type="button" onClick={calculate}>=</button>
    </div>
);

export default Digits;
