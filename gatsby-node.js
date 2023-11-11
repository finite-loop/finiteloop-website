// const path = require('path')

// exports.createPages = async ({ graphql, actions, reporter }) => {
//     const { createPage } = actions

//     // Define a template for Home Page
//     const homePage = path.resolve('./src/components/layout.js')

//     const result = await graphql(
//         `
//       {
//         allContentfulHomePage {
//             nodes {
//                 title {
//                   id
//                   title
//                 }
//                 body {
//                   raw
//                 }
//               }
//             }
//         }
//       }
//     `
//     )

//     if (result.errors) {
//         reporter.panicOnBuild(
//             `There was an error loading your Contentful posts`,
//             result.errors
//         )
//         return
//     }

//     const posts = result.data.allContentfulHomePage.nodes

//     // Create blog posts pages
//     // But only if there's at least one blog post found in Contentful
//     // `context` is available in the template as a prop and as a variable in GraphQL

//     if (posts.length > 0) {
//         posts.forEach((post, index) => {
//             createPage({
//                 path: `/`,
//                 component: homePage,
//             })
//         })
//     }
// }