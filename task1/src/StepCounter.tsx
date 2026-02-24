import { useState } from 'react';

// Описание входных данных (Task 1)
interface StepCounterProps {
  initialValue?: number; // Начальное значение [cite: 159]
  step?: number;        // Шаг [cite: 160]
}

const StepCounter = ({ initialValue = 0, step = 1 }: StepCounterProps) => {
  // Управление состоянием (useState) [cite: 139, 161]
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState<number[]>([]); // История изменений [cite: 167]
  const [operationCount, setOperationCount] = useState(0); // Счетчик операций [cite: 168]

  const handleUpdate = (isIncrement: boolean) => {
    const newValue = isIncrement ? count + step : count - step;
    setCount(newValue);
    setHistory(prev => [newValue, ...prev]); // Task 2: сохраняем историю [cite: 171]
    setOperationCount(prev => prev + 1);    // Task 2: инкремент операций [cite: 172]
  };

  const reset = () => { // Кнопка сброса (Task 2) [cite: 177]
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2>Count: {count}</h2>
      <p>Operations: {operationCount}</p>
      
      <button onClick={() => handleUpdate(true)}>Increment (+{step})</button>
      <button onClick={() => handleUpdate(false)}>Decrement (-{step})</button>
      <button onClick={reset}>Reset</button>

      <h4>History (Last 5):</h4>
      <ul>
        {/* Отображаем последние 5 значений (Task 2) [cite: 176] */}
        {history.slice(0, 5).map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default StepCounter;