import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Page from '../components/Page'
import marked from 'marked'
import projects from '../projects/projects'
import { Title, Flex, Container, Section, BackgroundImage, Button } from '../components/common'

const Header = styled(Section)`
  overflow: hidden;
  position: relative;
  mix-blend-mode: lighten;
  height: 35vw;
  max-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Projects = ({ match, globalX, globalY }) => {
  const project = projects.find(x => x.id === match.params.id)
  return (
    <Page>
      <Header>
        <BackgroundImage
          style={{
            transform: `scale(1.1) translate(${-globalX * 5}px, ${-globalY * 5}px)`
          }}
          image={project.image}
        />
        <Container>
          <Flex>
            <Title>{project.title}</Title>
          </Flex>
        </Container>
      </Header>
      <Section>
        <Container>
          <div dangerouslySetInnerHTML={{__html: marked(project.content)}} />
          {project.external && (
            <Button href={project.external} target='_blank'>View</Button>
          )}
        </Container>
      </Section>
      <Helmet>
        <title>Projects</title>
      </Helmet>
    </Page>
  )
}

export default Projects
