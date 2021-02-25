import logo from './logo.svg';
import React from "react";
import Body from "./Components/Body.js";
import TabList from "./Components/TabList.js"
import ScrollToTopButtion from './Components/ScrollToTopButton.js';
import SimpleReactLightbox from 'simple-react-lightbox'
import './App.css';


export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 1,
        };

        this.changeTab = (id) => {
            this.setState({
                activeTab: id
            })
        };
    }

    render() {

        const tabs = [
            {
                id: 1,
                title: 'Text'
            },
            {
                id: 2,
                title: 'Images'
            },
            {
                id: 3,
                title: 'Videos'
            },
            {
                id: 4,
                title: 'Table'
            },
            {
                id: 5,
                title: 'Email'
            }
        ];

        return (
            <React.StrictMode>
                <SimpleReactLightbox>
                    <div className="App">
                        <div className="navigation">
                            <TabList tabs={tabs}
                                activeTab={this.state.activeTab}
                                changeTab={this.changeTab}                            
                            />
                        </div>
                        <div className="body">
                            <Body activeTab={this.state.activeTab} />
                        </div>
                        <ScrollToTopButtion />
                    </div>  
                </SimpleReactLightbox>
            </React.StrictMode>
        );
	}
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
