/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// to create the file path for our markdown remark node we need a function called createFilePath from the plugin source filesystem we have used to acces the files using graphql queries
const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  // this will track when a node is created and then we can use the properties inside the object that is created, for example the node that is being created, and do something with it
  // actions are actions that gatsby gives to us in order to interact with it
  const { createNodeField } = actions // createNodeField allows us to create a new field inside a node, we want it to create the field path to our MarkdownRemark node so we can access it through url
  if (node.internal.type === `MarkdownRemark`) {
    // inside the node property we have the internal.type that tells us the type of the node that is being created, in our case we are interested on the MarkdownRemarks
    // slug is some kind of file path or navigation path inside the application that allows us to route to it
    // createFilePath takes an object as the argument
    // The first thing it takes is a node as the first property. the node property essentially just points to the actual node that we're trying to convert into a file path. like when gatsby create a path to the pages inside pages directory using the name of the file
    // We're also going to pass it the method that it needs to fetch the node.
    // we get the getNode function from on createNode and we're gonna pass that as the second argument
    // it is just a function that allows you to pull the actual node object representation of a file or an edge.
    // when we looked at our actual graphQL we saw that we had nodes and then we have these edges, getNode is just a way to get this literal node object
    // Third Field is an optional field which is called base path and base path is something that you add when you want to add a base path to the URL.
    // we dont need it now
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node, // node represents the node where we want to create the new field
      name: `slug`, // name is the name of the field
      value: slug, // value is the value of the field, in this case the filepath we have created before
    })
  }
}

// createPages is another method we need to create the pages related to the markdowns
// it gets two arguments we want to destructure
// graphql to make queries and actions that, same as the ones from onCreateNode, allows us to interact with gatsby node api
exports.createPages = ({ graphql, actions }) => {
  // from actions we need createPage
  const { createPage } = actions // allows us to build the pages inside our application based on whatever properties we pass to it
  // from createPages we want to return a graphql query that gives us back all the markdownremarks and then we iterate over them and just call createpage in each of them
  return (
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `) // in the react frontend we dont need the () and we just do graphql`` because we can use ies6 and pass literal strings without the ()
      // graphql will return the result of the query inside of a promise
      .then(result => {
        // from the result we want the edges, and from the edges we want to iterate through all the nodes inside each edge and crete the page
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            // we pass an object that defines what createPages needs to create the page with the markdownremark
            path: node.fields.slug, // what path leads to this page we are creating
            component: path.resolve("./src/templates/blog-post.js"), // here we have to pass the react component template we are going to use to the new blog posts. we are going to keep this component template separate from the front end component since this ones are only going to be used inside our gatsby-node.js backend code
            // component awaits a relative path so we need to use path library from node
            context: {
              // this is the property we use to pass the template blog component the value of the slug variable we need to make the graphql query
              slug: node.fields.slug,
            },
          })
        })
      })
  )
}
