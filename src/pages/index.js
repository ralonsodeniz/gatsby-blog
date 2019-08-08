import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby" // graphql allow us to query in order to get what we want from the markdown files
import styled from "styled-components"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// we create a styled component that uses Link componen from gatsby and takes out the text decoration it gets from link since it is a kind of anchor tag
const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blueviolet;
`

export default ({ data }) => {
  // this is another way to get the query using the useStaticQuery from gatsby, the object we get is the same
  const hookedData = useStaticQuery(graphql`
    query {
      # if we want to sort our posts in a different order regarding to a certain parameter we use the sort method that is inside graphql
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount # number of nodes of the allMarkdownRemark's edges array
        edges {
          node {
            id
            frontmatter {
              date
              description
              title
            }
            fields {
              # we get the slug from fields so we can link the markdown pages in the index
              slug
            }
            excerpt
          }
        }
      }
    }
  `)

  console.log("HOOKEDDATA", hookedData)
  console.log("DATA", data)

  // now with this data we have from the query we can build our own index page with the preview of the posts
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1> Raúl's Thoughts</h1>
        {/* the structure of the object we get from the query matches exactly the structure of the query, all we need to check is the type of the elements, for example edges in an array of objecs (nodes)  */}
        <h4>Posts: {hookedData.allMarkdownRemark.totalCount}</h4>
        {// we are going to map all the nodes from the edges, we need to deconstruct the node inside each edge element inside edges array and return an html with the title, date and the exceprt
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title} - {node.frontmatter.date}
              </BlogTitle>
            </BlogLink>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

// using export default () => is the same as const IndexPage = () => and then in the end of the component export default IndexPage

// we create the query as an export const. we copy inside the query we had in the graphql playground that give us the markdown
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            # we get the slug from fields so we can link the markdown pages in the index
            slug
          }
          excerpt
        }
      }
    }
  }
`
// Gatsby is smart enough to know that if you export out some thing that has this graphql statement this is probably a query that you want to use and pass into whatever component you're exporting out by default.
// we get access to the query as an object called data that is passed as props, so we can deconstruct it in the declaration of the component ({data})
