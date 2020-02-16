import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const RA3 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "roshni-allwyn/ra3.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} objectFit="cover" />
}

export default RA3
