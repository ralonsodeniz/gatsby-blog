import styled from "styled-components"
import { Link } from "gatsby"

import PointerIcon from "../../assets/pointer.svg"

export const ListContainer = styled.ul`
  list-style: none outside;
  margin: 10px 0px 0px;
  padding: 0;
`
export const ListItem = styled.li`
  margin-left: 20px;
`

export const ListHeader = styled.h5`
  cursor: pointer;
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
  ${({ isOpen }) => (isOpen ? `opacity: 1` : `opacity: 0.5`)};

  &:target,
  &:hover {
    opacity: 1;
  }
`

export const BlogLink = styled(Link)`
  text-decoration: none;
`

export const BlogTitle = styled.h5`
  margin-bottom: 20px;
  color: blueviolet;
  ${({ isSelected, nodeId }) =>
    isSelected === nodeId ? `opacity: 1` : `opacity: 0.5;`}

  &:focus,
  &:hover {
    opacity: 1;
  }
`

export const PointerIconContainer = styled(PointerIcon)`
  ${({ isOpen }) => !isOpen && `transform: rotate(-90deg)`};
`
