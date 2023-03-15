import { FC, useState } from 'react';
import './App.scss';
import Display from '../display/display';
import Operators from '../operators/operators';
import Digits from '../digits/digits';
/* eslint no-eval: 0 */

const App: FC = () => {
    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');

    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = (value:string) => {
        if (
            (ops.includes(value) && calc === '')
            || (ops.includes(value) && ops.includes(calc.slice(-1)))
        ) {
            return;
        }

        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    };

    const createDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i += 1) {
            digits.push(
                <button
                    type="button"
                    key={i}
                    onClick={() => updateCalc(i.toString())}
                >
                    {i}
                </button>,
            );
        }
        return digits;
    };

    const calculate = () => {
        setCalc(eval(calc).toString());
    };

    const deleteLast = () => {
        if (calc === '') {
            return;
        }

        const value = calc.slice(0, -1);
        setCalc(value);
    };

    return (
        <div className="app">
            <div className="calculator">
                <Display calc={calc} result={result} />
                <Operators deleteLast={deleteLast} updateCalc={updateCalc} />
                <Digits updateCalc={updateCalc} calculate={calculate} createDigits={createDigits} />
            </div>
        </div>
    );
};

export default App;
