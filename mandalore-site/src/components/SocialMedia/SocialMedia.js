import React from 'react';
import './SocialMedia.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter, faInstagram, faYoutube, faSpotify, faApple } from '@fortawesome/free-brands-svg-icons';


function SocialMedia(props) {
    return (
        <div className="social-container">
            <div className="social-icons">
                <a href="https://www.facebook.com/TheMandaloreTN" target="blank"><FontAwesomeIcon icon={faFacebookSquare} size="2x"/></a>
                <a href="" target="blank"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                <a href="https://www.instagram.com/themandalorecd/" target="blank"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                <a href="https://www.youtube.com/channel/UCkXf-M0ryyv4h1o-C93TIwg" target="blank"><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
                <a href="https://open.spotify.com/artist/1qg9tf1XybT3SC78sWbKTd?si=2gfTZy_VRtWSnSHEOq8B1w&dl_branch=1" target="blank"><FontAwesomeIcon icon={faSpotify} size="2x"/></a>
                <a href=""><FontAwesomeIcon icon={faApple} size="2x"/></a>
                </div>
            </div>
    );
}

export default SocialMedia;