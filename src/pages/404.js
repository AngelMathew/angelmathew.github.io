import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div style={{"textAlign":"center","marginTop":"2rem"}}>
    <h1>404: Not Found</h1>
    <Link to="/">Go back to home</Link>
    </div>
  </Layout>
)

export default NotFoundPage
