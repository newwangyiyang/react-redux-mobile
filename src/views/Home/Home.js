import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import {NavLink} from 'react-router-dom';
import styles from './Home.css';
import {connect} from 'react-redux';
class Home extends Component{
    render() {
        return (
            <div styleName="Home">
                <h1 onClick={() => this.props.wayNum('ADD')}>this is home page</h1>
                <h1 onClick={() => this.props.wayNum('REDUCE')}>{this.props.fs.num}</h1>
                <div>
                    <NavLink to="/">首页</NavLink>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        fs: state
    }),
    dispatch => ({
       wayNum(type) {
           dispatch({type});
       } 
    })
)(CSSModules(Home, styles));