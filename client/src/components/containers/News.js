import React, {Component} from 'react';
import NewsItemListing from '../presentation/NewsItemListing';
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/newsActions'


class News extends Component {

    componentDidMount(){

        this.props.dispatch(fetchNews());
    }
    render() {

        const newsItem =  this.props.news.map((news, i) =>{
            return(<li key={i}> <NewsItemListing data={news} /></li> );
            });
            console.log('items', this.props);

        return (
            <div>
                <h2> News Items</h2>

                    {(this.props.news.length > 0) ? <ul>{newsItem}</ul> : <div> Sorry,we have no news</div>}
            </div>
        )
    }
}
//specify exactly which slice of the state we want to provide to our component
const mapStateToProps = state => {
    return {
        news: state.news.news

    }
}

//connect() allows us to specify which data we are listening to(through mapStateToProps), and which component we are providing data.
//Connect the data in mapStateToProps()(the items portion of the state) to the (News) component.
 //Abd the News component can access the state with this.props.news
 //
export default connect(mapStateToProps)(News)