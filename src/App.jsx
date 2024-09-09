import { useState } from 'react'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import MainLayout from './layout/MainLayout'
import { ProductData } from './data/ProductData'
import { MainRouter } from './routes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChakraProvider>
        <MainRouter />
      </ChakraProvider>
    </>
  )
}

export default App

{/*         <MainLayout>
          <ItemListContainer productos={ProductData}/>
        </MainLayout> */}