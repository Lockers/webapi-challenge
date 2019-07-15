import React from 'react';
import { Project } from './Project'
import Styled from 'styled-components'

const Div = Styled.div`
  display: flex;
  max-width: 850px;
  margin: 10 auto;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const Projects = (props) => {
    
    return (
        <Div>
            {props.projects.map(project => {
                return <Project project={project} key={project.id} deleteProject={props.deleteProject} getSingleProject={props.getSingleProject} />
           })}
        </Div>
    )
}