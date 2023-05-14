import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/defaultTheme';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>
        <h1>Hello world</h1>
      </div>
    </ThemeProvider>
  )
}

export default App
