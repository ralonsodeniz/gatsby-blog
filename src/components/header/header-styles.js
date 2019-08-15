import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderContainer = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  grid-area: header;
`

export const HeaderDiv = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: center;
`

export const HeaderTitle = styled.h1`
  margin: 0;
`

export const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`
