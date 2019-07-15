import React from 'react';
import { Route } from 'react-router-dom';
import Styled from 'styled-components';
import { Projects } from './components/Projects';
import axios from 'axios'
import { SingleProject } from './components/SingleProject'

const Div = Styled.div`
  display: flex;
  max-width: 850px;
  
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: column;
`

class App extends React.Component {
  state = {
    projects: [],
    actions: [],
    singleProject: []
  }
  componentDidMount() {
    this.getAllProjects()
    this.getActions(1)
    this.getSingleProject(1)
  }
  getAllProjects = () => {
    axios
      .get(`http://localhost:8000/projects/`)
      .then(res => {
        this.setState({ projects: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }
 
  getSingleProject = (id) => {
    axios
      .get(`http://localhost:8000/projects/${id}`)
      .then(res => {
        this.setState({ singleProject: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }
  getActions = (id) => {
    axios
      .get(`http://localhost:8000/actions/${id}`)
      .then(res => {
        this.setState({ actions: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }
  addProject = (event) => {
    event.preventDefault()
    const name = event.target['name'].value
    const description = event.target['description'].value

    const newProject = {
      name: name,
      description: description,
      completed: false
    }

    axios
      .post('http://localhost:8000/projects', newProject)
      .then(res => {
        const newproj = res.data
        this.setState({projects: [...this.state.projects, newproj] })
      })
      .catch(err => {
      console.log(err)
    })
  }

  deleteProject = (id) => {
    axios
      .delete(`http://localhost:8000/projects/${id}`)
      .then(res => {
      this.getAllProjects()
      })
      .catch(err => {
      console.log(err)
    })
  }

  render(){
    return (
      <Div>
        <form onSubmit={this.addProject}>
          <label>Name
            <input
              type='text'
              name='name'
            />
          </label>
          <label>Description
            <input
              type='text'
              name='description'
            />
          </label>
          <button>Add Project</button>
        </form>
        <Route exact path='/projects/:id' render={(props) => <SingleProject {...props} singleProject={this.state.singleProject} />} />
          <Route exact path='/' render={(props) => <Projects {...props} projects={this.state.projects} deleteProject={this.deleteProject} getSingleProject={this.getSingleProject} />} />
      </Div>
    );
  }
}

export default App;
