import { FC } from 'react';
import './operators.scss';

interface IOperatorsProps {
    deleteLast: () => void;
    updateCalc: (data:string) => void
}

const Operators :FC<IOperatorsProps> = ({ deleteLast, updateCalc }) => (
    <div className="operators">
        <button type="button" onClick={() => updateCalc('/')}>/</button>
        <button type="button" onClick={() => updateCalc('*')}>*</button>
        <button type="button" onClick={() => updateCalc('+')}>+</button>
        <button type="button" onClick={() => updateCalc('-')}>-</button>
        <button type="button" onClick={deleteLast}>DEL</button>
    </div>
);

export default Operators;
