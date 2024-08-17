import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChakraProvider>
        <NavBar/> 
        <ItemListContainer greeting={"Welcome to my Shop!"}/>
      </ChakraProvider>
    </>
  )
}

export default App
