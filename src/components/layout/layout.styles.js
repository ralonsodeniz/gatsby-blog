import styled from "styled-components"

export const LayoutContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  padding-top: 0;
  display: grid;
  grid-template-columns: 1fr 25vh;
  grid-template-rows: auto;
  grid-template-areas:
    "header header"
    "main sidebar"
    "footer footer";

  main {
    grid-area: main;
    padding: 0px 1.0875rem 1.45rem;
  }

  footer {
    grid-area: footer;
    padding: 0px 1.0875rem 1.45rem;
  }
`
