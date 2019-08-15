import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PostList from "../post-list/post-list.ccomponent"

import {
  SidebarContaienr,
  AboutContainer,
  LastestPostsContainer,
} from "./sidebar.styles"

const Sidebar = () => {
  const postsData = useStaticQuery(graphql`
    query {
      # if we want to sort our posts in a different order regarding to a certain parameter we use the sort method that is inside graphql
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        totalCount # number of nodes of the allMarkdownRemark's edges array
        edges {
          node {
            fields {
              # we get the slug from fields so we can link the markdown pages in the index
              slug
            }
            id
            frontmatter {
              date
              title
            }
          }
        }
      }
    }
  `)

  return (
    <SidebarContaienr>
      <AboutContainer>This is the about the blog information</AboutContainer>
      <LastestPostsContainer>
        <PostList
          listHeader={`Posts count: ${postsData.allMarkdownRemark.totalCount}`}
          listData={postsData}
        />
      </LastestPostsContainer>
    </SidebarContaienr>
  )
}

export default Sidebar
