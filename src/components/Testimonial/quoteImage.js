import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const QuoteImage = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "quote.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return <Img className="quote-image" fluid={data.placeholderImage.childImageSharp.fluid} objectFit="cover" />
}

export default QuoteImage
