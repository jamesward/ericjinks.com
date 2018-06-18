import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import _get from 'lodash/get'

import Page from '../components/Page'

import MarkdownContent from '../components/MarkdownContent'
import PostHeader from '../components/PostHeader'

import {
  Title,
  Flex,
  Container,
  Section,
  BackgroundImage,
  TextContainer,
} from '../components/common'

export default ({ data: { post, jsPost }, ...props }) => {
  console.log(props)
  const {
    frontmatter: { title, date, image },
    rawMarkdownBody: content,
  } =
    post || jsPost

  return (
    <Page white>
      <Helmet title={title} />
      <PostHeader image={image} title={title} date={date} />
      <Section thin>
        <Container>
          <TextContainer style={{ margin: 'auto' }}>
            <MarkdownContent source={content} />
          </TextContainer>
        </Container>
      </Section>
    </Page>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }

    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      rawMarkdownBody
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }

    jsPost: javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
