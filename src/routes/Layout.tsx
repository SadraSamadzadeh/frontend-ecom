import styled from 'styled-components'
import Navbar from '../_components/Navbar'
import { Outlet } from 'react-router'


const Layout = () => {
  return (
    <MainContainer>
      <Navbar />
      <Outlet />
    </MainContainer>
  )
}


const MainContainer = styled.div`
    height: 100%;
`
export default Layout