import { useState } from 'react';
import UserProfile from './UserProfile';

function App() {
  // Состояние для хранения ID пользователя (Task 3)
  const [userId, setUserId] = useState(1);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lab 3.2: Data Fetching with useEffect</h1>
      
      <div style={{ marginBottom: '20px' }}>
        {/* Кнопки для смены ID (Task 3) */}
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setUserId(3)}>User 3</button>
        <button onClick={() => setUserId(Math.floor(Math.random() * 10) + 1)}>
          Random User
        </button>
      </div>

      {/* Передаем userId как проп (Task 3) */}
      <UserProfile userId={userId} />

      <footer style={{ marginTop: '20px', fontSize: '0.8em' }}>
        <p>Current User ID: {userId}</p>
        {/* Комментарий: userId в dependency array заставляет useEffect 
            запускать новый fetch при каждом изменении ID. [cite: 141, 244] */}
      </footer>
    </div>
  );
}

export default App;