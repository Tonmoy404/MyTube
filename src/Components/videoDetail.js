import React, { Component } from 'react';

class VideoDetail extends Component {
    
    render() { 
        const { videoId, title, description} = this.props;

        return (
            <div className='col-md-8'> 
                <div className='video'>
                    <iframe 
                        className='embed-responsive-item' 
                        src={`https://www.youtube.com/embed/${videoId}`}
                        style={{ height: '480px', width: '740px'}} 
                    />
                </div>
                    <div className='details' style={{ mt: '10px', padding: "10px", border: "1px solid #ddd", borderRadius: '4px'}}>
                    <h4>{title} </h4>
                    <div><p>{ description}</p></div>
                </div> 
            </div>
        );
    }
}
 
export default VideoDetail;