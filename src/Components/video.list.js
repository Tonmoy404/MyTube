import React, { Component } from 'react';
import VideoListItem from './video.list.item';

class VideoList extends Component {
    render() { 
        const {items, handleChange } = this.props;
        
        return (
            <div className="col-md-4">
                <ul className="list-group col-md-4">
                    {
                        items.map((item) => (
                           
                            <VideoListItem 
                                imgUrl={item.snippet.thumbnails.high.url}
                                title={item.snippet.title}
                                videoId={item.id.videoId}
                                description={item.snippet.description}
                                handleChange={handleChange}
                            />
                    ))}
                </ul>
            </div>
        );
    }
}
 
export default VideoList;