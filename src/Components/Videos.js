import React from 'react'

export class Videos extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			enlarged_video_link: "none"
		}

		this.onVideoClick = this.onVideoClick.bind(this);
		this.onEnlargedVideoClick = this.onEnlargedVideoClick.bind(this);
		this.a = this.a.bind(this);
	}

	a(event) {
		event.stopPropagation();
	}

	onVideoClick(event) {
		this.setState({ enlarged_video_link: event.target.id });
	}

	onEnlargedVideoClick(event) {
		this.setState({ enlarged_video_link: "none" });
	}

	overlay() {
		if (this.state.enlarged_video_link !== "none") {
			var video_link = require("./video/" + this.state.enlarged_video_link + ".mp4");
			return (
				<React.Fragment>
					<div id="overlay" onClick={this.onEnlargedVideoClick}></div>
					<div id="video_layer" onClick={this.onEnlargedVideoClick} >
						<video className="video center2" id="enlarged" controls autoPlay onClick={this.a}>
							<source src={video_link.default} type="video/mp4"></source>
						</video>
					</div>
				</React.Fragment>
			)
		}
	}

	render() {
		var videos = [];
		for (var i = 1; i < 7; i++) {
            videos[i] = require("./video/v" + i + ".mp4");
		}

		return (
			<React.Fragment>
				{this.overlay()}

				<div className="flex_container">
					<div className="video_column">
						<video className="video" width="270" height="220" id="v1" controls onClick={this.onVideoClick}>
							<source src={videos[1].default} type="video/mp4"></source>
						</video>
					</div>
					<div className="video_column">
						<video className="video" width="270" height="220" id="v2" controls onClick={this.onVideoClick}>
							<source src={videos[2].default} type="video/mp4"></source>
						</video>
					</div>
					<div className="video_column">
						<video className="video" width="270" height="220" id="v3" controls onClick={this.onVideoClick}>
							<source src={videos[3].default} type="video/mp4"></source>
						</video>
					</div>
					<div className="video_column">
						<video className="video" width="270" height="220" id="v4" controls onClick={this.onVideoClick}>
							<source src={videos[4].default} type="video/mp4"></source>
						</video>
					</div>
					<div className="video_column">
						<video className="video" width="270" height="220" id="v5" controls onClick={this.onVideoClick}>
							<source src={videos[5].default} type="video/mp4"></source>
						</video>
					</div>
					<div className="video_column">
						<video className="video" width="270" height="220" id="v6" controls onClick={this.onVideoClick}>
							<source src={videos[6].default} type="video/mp4"></source>
						</video>
					</div>
				</div>
            </React.Fragment>
        )
	}
}
export default Videos;