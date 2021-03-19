//components
import Header from './components/Header';
import Characters from './components/Characters';
import ThemeContext from './context/ThemeContext';

function App() {
  return (
    <ThemeContext>
      <Header />
      <Characters />
    </ThemeContext>
  );
}

export default App;
