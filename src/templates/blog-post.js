// this will be the default template for all of our blog posts
// we are not using .jsx because gatsby uses .js for react components too, its just a matter of consistency
// we dont keep this component in the component folder because this is not a component we are going to use in our application but only in the building process to build our markdownremark pages
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark // we create a post const with the html and the frontmatter title
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />{" "}
        {/* dangerouslySetInnerHTML is the preferred way for gatsby to set the body of the markdownRemark as the body of the blog */}
      </div>
    </Layout>
  )
}

// remember when we do an export const query to graphql just before the component declaration gatsby knows that we want to pass the returned object from the query as props to the component
// we can do the same using the hook useStaticQuery as we did in the index.js
// what we want to query for is the individual markdown remark related to the slug that we get
// we are going to get that slug manually by passing in it as a parameter that our graphql will use.
export const query = graphql`
  query($slug: String!) {
    # we declare a parameter for our query named slug that is type string and is mandatory
    markdownRemark(fields: { slug: { eq: $slug } }) {
      # we want from markdownRemark the one that has the field slug with the equeal value of the slug variable we pass to the graphql
      html
      frontmatter {
        title
      }
    }
  }
`
