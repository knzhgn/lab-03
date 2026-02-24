import StepCounter from './StepCounter';

function App() {
  return (
    <>
      <h1>Lab 3.1: Counters</h1>
      {/* Первый счетчик: от 0 с шагом 1 [cite: 185] */}
      <StepCounter initialValue={0} step={1} />
      
      {/* Второй счетчик: от 10 с шагом 5 [cite: 186] */}
      <StepCounter initialValue={10} step={5} />
      
      {/* Комментарий: Props передаются родителем, State - внутренние данные [cite: 188] */}
    </>
  );
}

export default App;