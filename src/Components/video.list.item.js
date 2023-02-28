import React, { Component } from "react";
import "../Components/Css/index.css";

class VideoListItem extends Component {
	render() {
		const {  title, videoId, imgUrl, discription, handleSelect } = this.props;
		
		return (
			<li 
				onClick={()=> {handleSelect(videoId, title, discription)}}
				className="list-group-item media videolist"
				style={{ width: '100%'}}
				>
				<div style={{width: '50%'}}>
					<img
						className="mr-3"
						src={imgUrl}
					/>
				</div>
				<div className="media-body">
					{title}

				</div>
				
				</li>
		);
	}
}

export default VideoListItem;
