import styled from 'styled-components'
import Navbar from '../_components/Navbar'
import Home from './home'
import Products from './Products'
import { About } from './About'
import Contact from './Contact'

const Layout = () => {
  return (
    <MainContainer>
      <Navbar />
      <Home />
      <Products />
      <About />
      <Contact />
    </MainContainer>
  )
}


const MainContainer = styled.div`
    height: 100%;
`
export default Layout