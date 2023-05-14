import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';
import { Router } from './routes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
