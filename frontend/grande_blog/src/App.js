import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#303030',
    },
    secondary:{
      main:'#424242',
    },
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme} className="App">
      <HomePage/>
    </MuiThemeProvider>
  );
}

export default App;
