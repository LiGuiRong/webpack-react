import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';

class App extends Component {
    componentDidMount() {
        axios.get('http://localhost:3002/mock/test.json').then(res => {
            console.log(res.data);
        });
    }

    render() {
        return <div>react frame content.</div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
