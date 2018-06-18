import React from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'

import Page from '../components/Page'
import Card from '../components/Card'
import { Container, Section } from '../components/common'

const Projects = ({ data }) => {
  let jsProjects = _get(data, 'jsProjects.edges', [])
  let mdProjects = _get(data, 'mdProjects.edges', [])
  let projects = [...jsProjects, ...mdProjects].map(({ node }) => ({
    ...node,
    frontmatter: {
      ...node.frontmatter,
      image: _get(node, 'frontmatter.image.childImageSharp.resize.src'),
    },
  }))

  return (
    <Page>
      <Section thin>
        <Container>
          {projects.map(project => (
            <Card
              key={project.frontmatter.title}
              title={project.frontmatter.title}
              to={project.fields.slug}
              image={project.frontmatter.image}
              brightness={project.frontmatter.brightness}
            />
          ))}
        </Container>
      </Section>
      <Helmet title="Projects" />
    </Page>
  )
}

export default Projects

export const pageQuery = graphql`
  query projectsIndexQuery {
    jsProjects: allJavascriptFrontmatter(
      filter: { fields: { slug: { glob: "/projects/**" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }

    mdProjects: allMarkdownRemark(
      filter: { fields: { slug: { glob: "/projects/**" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            image {
              childImageSharp {
                resize(width: 1200) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
