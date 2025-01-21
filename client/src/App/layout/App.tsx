import { useEffect, useState } from "react"
import { Product } from "../models/Product"
import Catalog from "../../features/catalog/Catalog"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {  Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";



function App() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(()=> {
    fetch('https://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  const darkMode = true;
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
      <NavBar/>
      <Box sx={{
        minHeight: '100vh',
        background: darkMode ? '#121212' : '#eaeaea'
      }}>
        <Container maxWidth='xl' sx={{mt: 14}}>
          <Catalog products={products}/>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
