import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderImage = () => {


  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ebm-logo.png" }) {
        childImageSharp {
            fixed(width: 116, height: 104) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
}

export default HeaderImage
