import React, { Component } from 'react'
import Title from '../components/Title'


export default class extends Component {

    // state = {
    //     title: this.props.title,
    //     description: this.props.description
    // };
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title,
            description: this.props.description
        }
    }
    // updateState()
    // {
    //     this.setState({title: this.props.title, describe: this.props.description});
    // };
    
    render() {
        // this.updateState();
        return <h2>
            <Title title = {this.state.title} description = {this.state.description}/>
            <Title title = {"title2"} description = {"description2"}/>
            <Title title = {"title3"} description = {"description3"}/>
        </h2>
  }
}
