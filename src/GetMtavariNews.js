import React from 'react';
import ReactPlayer from 'react-player/lazy'

class MtavariNews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: null,
            videoId: null,

            errorMessage: null,
            b: null
        };
    }

    componentDidMount() {
            this.fetchMtavariNews()
    }

    fetchMtavariNews() {
        const url = 'https://youtube.googleapis.com/youtube/v3/playlistItems'
        const part = 'part=contentDetails%2C%20id%2C%20snippet%2C%20status'
        const maxResults = 'maxResults=5'
        const playlistId = 'playlistId=PLqcIpeZWxYsh3G12IpOAAKAR0XVnAIDuY'
        const key = 'key=AIzaSyBg5ghXhpR69NmKBRH2NQjqBlH-I59I6sM'

        // GET async/await fetch
        fetch(`${url}?${part}&${maxResults}&${playlistId}&${key}`)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
               // console.log(data.items) // see everything

                data.items.map((item) => {
                    const { snippet: { title }, snippet: { resourceId: { videoId } } } = item

                    this.setState({
                        items: data.items,
                        videoId: videoId
                    })

                })
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    render() {
            const {items, videoId } = this.state;
        console.log(items)
            return (
                <div>

                    <ul>
                        
                    </ul>

                        <ReactPlayer controls url={`https://www.youtube.com/watch?v=${videoId}`} />

                </div>
            );
    }
}

export { MtavariNews }; 

