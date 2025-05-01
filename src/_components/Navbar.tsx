import styled from 'styled-components'
import { theme } from '../style/theme'
import { useLocation } from 'react-router';

const Navbar = () => {
   const param = useLocation();

   const isActive = (item : string) : boolean => {
     if (param.pathname == '/') {
      if (item == 'Home') return true;
     }
     return param.pathname.split('/')[1] == item.toLowerCase();
   }
   const navbarItems = ["Home", "Products", "About", "Contact"]
  return (
    <MainContainer>
      <Icon>

      </Icon>
      <NavItems>
         {navbarItems.map((item, index) => (
            <Item active={isActive(item)} href={item == 'Home' ? "/" : item.toLowerCase()} key={index}>
               {item}
            </Item>
         ))}
      </NavItems>
      <Login>
         Login
      </Login>
    </MainContainer>
  )
}


const MainContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: ${p => p.theme.colors.dark20}
   width: 100%;
   height: 103px;
   padding: 0 162px 0 162px;

`
const Item = styled.a<{active? : boolean}>`
   cursor: pointer;
   padding: 14px 24px 14px 24px;
   color: ${p => p.theme.colors.gray50};
   border-radius: 10px;
   border: 1px solid ${({active}) => (active ? theme.colors.dark20 : 'transparent')};
   background-color: ${({active}) => (active ? theme.colors.dark08: '')}

`
const Login = styled.button`
   padding: 14px 24px 14px 24px;
   border-radius: 10px;
   background-color: ${p => p.theme.colors.secondary};
   border: none;
   cursor: pointer;
      &:hover {
         background-color: ${p => p.theme.colors.secondaryDarker}
      }
   transition: background-color 0.3s ease;
`
const NavItems = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 40px;
`
const Icon = styled.div`

`
export default Navbar