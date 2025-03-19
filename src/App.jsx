import { ThemeProvider, useTheme } from './themes/ThemeContext';
import RoutesApp from './routes/RoutesApp';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

const ThemedApp = () => {
  const { theme } = useTheme(); 

  return (
    <section className={`App ${theme}`}>
      <RoutesApp />
    </section>
  );
};

export default App;
