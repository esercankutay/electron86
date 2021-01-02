import { hot } from 'react-hot-loader';
import * as React from 'react';
import  './index.css'


class App extends React.Component{
    render(){
        return <div>Hello from React!</div>
    }
}

export default hot(module)(App);
