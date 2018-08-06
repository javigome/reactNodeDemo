import React, { Component} from 'react';
import NewsItemDetail from '../presentation/NewsItemDetail';
import { connect } from 'react-redux';
import { fetchNewsItem } from '../../actions/newsActions';

class NewsArticle extends Component {


    componentDidMount(){

        this.props.dispatch(fetchNewsItem(this.props.match.params.id));
        console.log(this.props);
    }

    render(){

        return (
                   <div>
                       <h2>News Story</h2>
                       <ul>
                           { !this.props.newsItemLoading ? <NewsItemDetail data={this.props.newsItem} /> : <div>Loading</div>}
                       </ul>
                   </div>
               )
           }
       }

       const mapStateToProps = state => {
           return {
               newsItem: state.news.newsItem,
               newsItemLoading: state.news.newsItemLoading
           }
       }
export default connect(mapStateToProps)(NewsArticle)