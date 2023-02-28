import React, { Component } from "react";
import VideoDetail from "./Components/videoDetail";
import axios from "axios";
import SearchBar from "./Components/searchbar";
import VideoList from "./Components/video.list";

class App extends Component {
	state = {
		searchTerm: "",
		data: {},
		videoId: "",
		title: "",
		description: "",
	};

	handleChange = ({target: {value: searchTerm}}) => this.setState({ ...this.state, searchTerm })


	handleSelect = (videoId, title, description) =>
		{
			console.log(videoId, title, description)
			this.setState({ ...this.state, videoId, title, description });
		}
		

	componentDidUpdate(prevProps, prevState) { 
		const getYoutubeVideos = () => {

			console.log(this.state.searchTerm);

			const baseUrl = "https://www.googleapis.com/youtube/v3/search";
			const key = "AIzaSyBU7YI_CXZPLGngyCvBH0sQqeckGMNoKOE";
			const type = "video";
			const part = "snippet";
			const q = this.state.searchTerm;

			const url = `${baseUrl}?key=${key}&type=${type}&part=${part}&q=${q}`;

			axios.get(url)
				.then((response) =>
					this.setState({ ...this.state, data: response.data })
				)
				.catch((error) => console.log(error));
		};

		if (prevState.searchTerm !== this.state.searchTerm) getYoutubeVideos();
	}

	render() {

		console.log(this.state.searchTerm);
		return (
			<div className="container">
				<SearchBar
					handleChange={this.handleChange}
					searchTerm={this.state.searchTerm}
				/>
				<div className="row">
					<VideoDetail
						videoId={this.state.videoId}
						title={this.state.title}
						description={this.state.description}
					/>

					<VideoList items={this.state.data.items || []} handleChange={this.handleChange} />
				</div>
			</div>
		);
	}
}

export default App;
