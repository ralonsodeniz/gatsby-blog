import React, { createContext, useState } from "react"

export const PostsContext = createContext({
  postSelected: "",
  selectPost: () => {},
})

const PostProvider = ({ children }) => {
  const [postSelected, setPostSelected] = useState("")

  const selectPost = nodeId => setPostSelected(nodeId)

  return (
    <PostsContext.Provider
      value={{
        postSelected,
        selectPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}

export default PostProvider
