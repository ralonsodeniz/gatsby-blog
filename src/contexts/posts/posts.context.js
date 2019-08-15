import { createContext } from "react"

const PostsContext = createContext({
  postSelected: "",
  selectPost: () => {},
})

export default PostsContext
