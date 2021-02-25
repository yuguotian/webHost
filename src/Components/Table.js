import React, { Component } from 'react'

export class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {
                    title: "SBMTD Bus Tracker", link: 'https://github.com/yuguotian/CS184Project',
                    description: "A bus tracker project that provides the Santa Barara's bus info map, helps you to find the  real bus information and guides to your destinations!",
                    year: 2020
                },
                {
                    title: "Web Wallpaper", link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1832685091',
                    description: "A web wallpaper project with the Mouse (Cursor) Follow, notepad, timer and many some other functionalities.",
                    year: 2019
                }
            ]
        }
    }

    renderData() {
        return this.state.projects.map((project) => {
            const { title, link, description, year} = project
            return (
                <tr>
                    <td><a href={link}>{title}</a></td>
                    <td>{description}</td>
                    <td>{year}</td>
                </tr>
            )
        })
    }

    renderHeader() {
        let header = Object.keys(this.state.projects[0]).filter(function (name) {
            if (name === "link") {
                return false;
            }
            return true;
        })

        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }


    render() {
        return (
            <div>
                <h1 id ='title' align = "left">My projects</h1>
                <table id = 'projects' border = "1">
                    <tbody>
                        <tr>{this.renderHeader()}</tr>
                        {this.renderData()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table;