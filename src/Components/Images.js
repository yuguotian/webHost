import React from "react";
import { SRLWrapper } from 'simple-react-lightbox';

export class Images extends React.Component {
    render() {
        var imgs = [];
        for (var i = 1; i < 21; i++) {
            imgs[i] = require("./img/landscape" + i + ".jpg");
        }

        for (var j = 1; j < 4; j++) {
            imgs[20 + j] = require("./img/anime" + j + ".jpg");
        }

        const options = {
            settings: {
                hideControlsAfter: true
            },
            buttons: {
                backgroundColor: 'rgba(30,30,36,0.8)',
                iconColor: 'rgba(255, 255, 255, 0.8)',
                iconPadding: '10px',
                showAutoplayButton: false,
                showCloseButton: true,
                showDownloadButton: false,
                showFullscreenButton: false,
                showNextButton: false,
                showPrevButton: false,
                showThumbnailsButton: false,
                size: '40px'
            },
            caption: {
                showCaption: false
            },
            thumbnails: {
                showThumbnails: false
            },
            progressBar: {
                showProgressBar: false
            }
		}

        return (
            <SRLWrapper options={options}> 
                <div className="flex_container">
                    <div className="c">
                        <img className="photo" src={imgs[1].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[2].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[3].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[4].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[5].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[6].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[7].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[8].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[9].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[10].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[11].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[12].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[13].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[14].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[15].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[16].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[17].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[18].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[19].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[20].default} alt="Landscape" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[21].default} alt="Anime" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[22].default} alt="Anime" />
                    </div>
                    <div className="c">
                        <img className="photo" src={imgs[23].default} alt="Anime" />
                    </div>
                </div>
            </SRLWrapper>
        )
    };
}
export default Images;