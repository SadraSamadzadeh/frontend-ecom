import styled from 'styled-components'
import Home from './home'

const Layout = () => {
  return (
    <MainContainer>
      {/* <Navbar /> */}
      <Home />
    </MainContainer>
  )
}


const MainContainer = styled.div`
    border-radius: 10px;
    background-color: ${p => p.theme.colors.backgroundLighter};
    border: 1px solid ${p => p.theme.colors.primaryLighter};
    height: 100%;
`
export default Layout