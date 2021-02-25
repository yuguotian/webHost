import React from "react";
import Text from './Text.js';
import Images from './Images.js';
import Videos from './Videos.js';
import Table from './Table.js';
import Email from './Email.js';

export class Body extends React.Component {
	currentContent(activeTab) {
		switch (activeTab) {
			case 1:
				return <Text />;
				break;
			case 2:
				return <Images />;
				break;
			case 3:
				return <Videos />;
				break;
			case 4:
				return <Table />;
				break;
			case 5:
				return <Email />;
				break;
			default:
				return <Text />;
		}
	}

	render() {
		return (
			this.currentContent(this.props.activeTab)
		)
	}
}

export default Body;