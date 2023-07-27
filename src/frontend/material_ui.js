```javascript
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Define a custom theme for Material UI
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#red',
    },
    background: {
      default: '#fff',
    },
  },
});

// Create a Material UI Theme Provider component
const MaterialUIThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MaterialUIThemeProvider;
```