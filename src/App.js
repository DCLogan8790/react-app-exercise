// 2b
import Exercise from './exercise/Exercise'
import Bonus from './bonus/Bouns'

function App() {
  return (
    <div>
      {/* 2c */}
      <Exercise />
      {/* 3a */}
      <Exercise good='Great' bad='Terrible' />
      <Bonus />
    </div>
  );
}

export default App;
