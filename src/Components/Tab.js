import React from "react";

export class Tab extends React.Component {
    active = () => {
        if (this.props.tabs.id === this.props.activeTab) {
            return "navigation-item navigation-active"
        }
        else {
            return "navigation-item"
        }
    }

    render() {
        return (
            <div
                className = {this.active()}
                onClick = {this.props.changeTab.bind(this, this.props.tabs.id)}
            >
                {this.props.tabs.title}
            </div>
        );
    }
}

export default Tab;