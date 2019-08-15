import React, { useState, useContext } from "react"

import { PostsContext } from "../../providers/posts/posts.provider"

import {
  BlogLink,
  BlogTitle,
  ListContainer,
  ListHeader,
  ListItem,
  PointerIconContainer,
} from "./post-list.styles"

const PostList = ({ listData, listHeader }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { postSelected, selectPost } = useContext(PostsContext)

  return (
    <ListContainer>
      <ListHeader isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <PointerIconContainer isOpen={isOpen} />
        {listHeader}
      </ListHeader>
      {isOpen
        ? listData.allMarkdownRemark.edges
            .filter((edge, edgeIndex) => edgeIndex < 5)
            .map(({ node }) => (
              <ListItem key={node.id} onClick={() => selectPost(node.id)}>
                <BlogLink to={node.fields.slug}>
                  <BlogTitle isSelected={postSelected} nodeId={node.id}>
                    {node.frontmatter.title}
                    <br />
                    {node.frontmatter.date}
                  </BlogTitle>
                </BlogLink>
              </ListItem>
            ))
        : null}
    </ListContainer>
  )
}

export default PostList
