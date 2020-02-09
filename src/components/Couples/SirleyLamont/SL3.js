import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SL3 = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "sirley-lamont/sl3.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.fileName.childImageSharp.fluid} objectFit="cover" />
}

export default SL3
