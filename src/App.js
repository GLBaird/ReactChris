import React, {Component} from 'react'
import PostBoard from './PostBoard'

class App extends Component {
    render() {
        let {title, subtitle} = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <hr/>
                <PostBoard/>
            </div>
        );
    }
}

export default App;