//This will show the youtube video and have an area to input summary 
import React from 'react';
import YoutubeEmbedVideo from 'youtube-embed-video';

function Contribute(){
    return(
        <div>
            <YoutubeEmbedVideo videoId="AkLnj5pJtDI" suggestions={false} />
        </div>
    );
}

export default Contribute;