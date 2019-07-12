import React from 'react';
import Styled from 'styled-components'

const Div = Styled.div`
    display: flex;
    margin: 20px auto;
    padding: 10px;
    justify-content: center;
    border: 1px dodgerblue solid;
    flex-direction: column;
    height: auto;
    width: auto;
`

export const SingleProject = (props) => {
    return (
        <Div>
            <p>{props.singleProject.name}</p>
            <p>{props.singleProject.description}</p>
            {
                props.singleProject.forEach(project => {
                    return <p>{project.actions}</p>
                })
            }
        </Div>
    )
}