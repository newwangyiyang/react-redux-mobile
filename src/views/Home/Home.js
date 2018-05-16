import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Home.css';
import {connect} from 'react-redux';
import { getData, test } from '../../redux/Home/action'
class Home extends Component{
    render() {
        return (
            <div styleName="Home">
                <h1 onClick={() => this.props.getData()}>标题</h1>
                <h1 onClick={() => this.props.test('我想你')}>{this.props.home.data}</h1>
            </div>
        )
    }
}

export default connect(
    state => ({
        home: state.home
    }),
    {
        getData,
        test
    }
)(CSSModules(Home, styles));