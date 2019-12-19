import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <p>Ops..., você tem certeza que tinha algo por aqui ?</p>
  </Layout>
)

export default NotFoundPage
