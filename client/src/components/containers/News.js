import React, {Component} from 'react';
import NewsItemListing from '../presentation/NewsItemListing';
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/actions'


class News extends Component {

    componentDidMount(){

        this.props.dispatch(fetchNews());
    }
    render() {

        const newsItem =  this.props.news.map((news, i) =>{
            return(<li key={i}> <NewsItemListing data={news} /></li> );
            });
            console.log('items', newsItem);

        return (
            <div>
                <h2> News Items</h2>

                    {(this.props.news.length > 0) ? <ul>{newsItem}</ul> : <div> Sorry,we have no news</div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        news: state.news.news
    }
}


export default connect(mapStateToProps)(News)