import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SL2 = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "sirley-lamont/sl2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.fileName.childImageSharp.fluid} objectFit="cover" />
}

export default SL2
