import { Component } from "react";
import { connect } from 'react-redux';

class Article extends Component {
    render() {
        const {articles} = this.props;
        return(
            <article>
                <ul>
                    {articles.map(art => {
                        return (
                            <li key={art.id}>
                                <a href={art.url}>
                                    {art.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </article>
        )
    };
};

const mapStoreToProps = (state) => {
    return {
        articles: state.articleReducer.results
    }
};

export default connect(mapStoreToProps) (Article);