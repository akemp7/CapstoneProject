//This will show the youtube video and have an area to input summary 
import React from 'react';
import YoutubeEmbedVideo from 'youtube-embed-video';
import Navbar from './Navbar';

function Contribute(){
    return(
        <div>
            <Navbar />
            <YoutubeEmbedVideo videoId="AkLnj5pJtDI" suggestions={false} />

            <form>
                <textarea
                id='summary'
                placeholder='Summarize what happened in the video' />
                <button type="submit" className="btn-btn">Submit!</button>
            </form>
        </div>
    );
}

export default Contribute;