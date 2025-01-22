import { useState } from "react"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {  Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";



function App() {


  const [darkMode, setDarkMode] = useState(false)

  const changeDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
};
  const palleteType = darkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#121212' : '#eaeaea'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <NavBar darkMode={darkMode} changeDarkMode={changeDarkMode}/>
      <Box sx={{
        minHeight: '100vh',
        background: darkMode ? 'radial-gradient(circle, #1e3aBa, #111B27)' : 'radial-gradient(circle, #beacf9, #f0f9ff)', py: 6
      }}>
        <Container maxWidth='xl' sx={{mt: 8}}>
          <Outlet/>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
