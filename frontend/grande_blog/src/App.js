import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#303030',
    },
    secondary:{
      main:'#424242',
    },
    background:{
      default: '#fafafa',
    },
  }
});


function App() {
  return (
    <MuiThemeProvider theme={theme} className="App">
      <CssBaseline/>
      <HomePage/>
    </MuiThemeProvider>
  );
}

export default App;
