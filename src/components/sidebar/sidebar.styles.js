import styled from "styled-components"

export const SidebarContaienr = styled.aside`
  padding-right: 1.0875rem;
  grid-area: sidebar;
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(50px, 0.25fr) 1fr;
  grid-template-areas:
    "about"
    "lastestPosts"; */
`
export const AboutContainer = styled.div`
  grid-area: about;
`

export const LastestPostsContainer = styled.div`
  grid-area: lastestPosts;
`
