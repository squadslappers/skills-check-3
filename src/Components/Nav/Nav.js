import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends Component{
    constructor(props){
        super(props)
    }



    render(){
        console.log(this.props)
        return(
            <div>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/new'>New Post</Link>
                <Link to='/'>Logout</Link>
                {/* {this.props.user.username[1]} */} */}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(Nav);