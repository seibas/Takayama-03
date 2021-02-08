const { createFilePath } = require("gatsby-source-filesystem")
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = action 
    if (node.internal.type  === "Mdx") {
        const value = createFilePath({ node, getNode })
        createNodeField({ 
            name: "slug",
            node,
            value: `/events${value}`,
         })
    }
}