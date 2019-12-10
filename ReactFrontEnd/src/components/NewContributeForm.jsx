//This will show the youtube video and have an area to input summary 
import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import YoutubeEmbedVideo from 'youtube-embed-video';
import Navbar from './Navbar';

function NewContributeForm(props){
    let _summary = null;

    function handleNewSubmission(event) {
        event.preventDefault();
        props.onNewContribution({summary: _summary.value, id: v4()})

        _summary.value='';
    }

    return(
        <div>
            <Navbar />
            <YoutubeEmbedVideo videoId="AkLnj5pJtDI" suggestions={false} />

            <form onSubmit= {handleNewSubmission}>
                <textarea
                id='summary'
                placeholder='Summarize what happened in the video' 
                ref={(input) => {_summary = input; }} />
                <button type="submit" className="btn-btn">Submit!</button>
            </form>
        </div>
    );
}

NewContributeForm.propTypes = {
    onNewContribution: PropTypes.func
};

export default NewContributeForm;