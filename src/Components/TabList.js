import React from "react";
import Tab from "./Tab"

export class TabList extends React.Component {
	render() {
		return(
			<div className="tabList">
				{this.props.tabs.map((tabs) => (
					<Tab tabs={tabs} activeTab={this.props.activeTab} changeTab={this.props.changeTab} />

				))}
			</div>
	)}
}

export default TabList;