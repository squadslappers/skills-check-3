import React, {Component} from 'react';
import Post from '../Post/Post';

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            search: '',
            checkbox: true,
            posts: []
        }
    }

    searchFN=(event)=>{
        console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    checkboxFN=()=>{
        console.log(this.state.checkbox)
        this.setState({
            checkbox: !this.state.checkbox
        })
    }

    render(){
        this.state.posts.map((post, index) => {
            return (
                <Post key={index} post={post}/>
            )
        })
        return(
            <div id='dash-main'>
                <input
                    name='search'
                    placeholder='search'
                    onChange={(event) => {this.searchFN(event)}}
                    />
                <button
                    className='button'>
                    Search</button>
                <button
                    className='button'>
                    Reset</button>
                <input
                    type='checkbox'
                    onChange={this.checkboxFN}/>
            </div>
        )
    }
}

export default Dashboard