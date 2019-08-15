import PropTypes from "prop-types"
import React, { useContext } from "react"

import { PostsContext } from "../../providers/posts/posts.provider"

import {
  HeaderContainer,
  HeaderDiv,
  HeaderLink,
  HeaderTitle,
} from "./header-styles"

const Header = ({ siteTitle }) => {
  const { selectPost } = useContext(PostsContext)

  return (
    <HeaderContainer>
      <HeaderDiv>
        <HeaderTitle>
          <HeaderLink to="/" onClick={() => selectPost("main")}>
            {siteTitle}
          </HeaderLink>
        </HeaderTitle>
      </HeaderDiv>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
