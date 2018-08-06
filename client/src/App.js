import React, {Component} from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Layout from './components/layouts/Layouts';
import store from './stores/store';
import NewsArticle from './components/containers/NewsArticle';
import NewsSubmit from './components/containers/NewsSubmit';
import Authentication from './components/containers/Authentication';


class App extends Component {
    render() {
        return (
          <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/news/:id" component={NewsArticle} />
                    <Route path='/submit' component={NewsSubmit}/>
                    <Route path='/authentication' component={Authentication}/>

                </Layout>
            </BrowserRouter>
          </Provider>
        );
    }
}

export default App;