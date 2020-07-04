import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Unsplash from "../components/unsplash"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <h1 className="heading">Gatsby Unsplash Images</h1>
      <Unsplash />
    </div>
  </Layout>
)

export default IndexPage
