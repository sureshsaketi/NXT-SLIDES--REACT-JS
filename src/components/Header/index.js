import './index.css'

import {HeaderContainer, LogoImage, NextSlidesHeading} from './styledComponents'

const Header = () => (
  <HeaderContainer>
    <LogoImage
      src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
      alt="nxt slides logo"
    />
    <NextSlidesHeading>Nxt Slides</NextSlidesHeading>
  </HeaderContainer>
)
export default Header
