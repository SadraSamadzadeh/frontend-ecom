import styled from 'styled-components'
import Home from './home'
import Navbar from '../_components/Navbar'

const Layout = () => {
  return (
    <MainContainer>
      <Navbar />
      <Home />
    </MainContainer>
  )
}


const MainContainer = styled.div`
    height: 100%;
`
export default Layout