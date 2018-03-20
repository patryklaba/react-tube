import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import API from './API';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.handleVideoSelect = this.handleVideoSelect.bind(this);
        this.videoSearch = this.videoSearch.bind(this);
        this.videoSearch('');
    }

    videoSearch(term) {
        API( { q: term || '' }, (videos) => {
            this.setState( {
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    handleVideoSelect(video) {
        console.log('clicked');
        this.setState({
            selectedVideo: video
        });
    }

    render() {
        const throttleVideoSearch = _.debounce(this.videoSearch, 300);
        return(
            <div className="AppWrapper">
                <SearchBar onVideoSearch={throttleVideoSearch} />
                <div className="ContentWrapper">
                    <VideoList 
                        videos={this.state.videos}
                        onVideoSelect={this.handleVideoSelect}
                        />
                    <VideoDetail video={this.state.selectedVideo} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));