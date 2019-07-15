import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Div = Styled.div`
  display: flex;
  max-width: 850px;
  border: 1px solid red;
  margin: 10 auto;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: auto;
  padding: 10px;
  margin: 10px;
  width: 28%;
 `

export const Project = (props) => {
    return (
        <Link to={`/projects/${props.project.id}`}>
            <Div onClick={() => props.getSingleProject(props.project.id)}>
                <p>Name:</p>
                <p>{props.project.name}</p>
                <p>Description: {props.project.description}</p>
                <p>Completed: {props.project.completed}</p>
                <button onClick={() => props.deleteProject(props.project.id)}>Delete Project</button>
            </Div>
        </Link>
    )
}