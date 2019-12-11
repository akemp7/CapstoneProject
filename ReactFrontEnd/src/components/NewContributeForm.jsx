
import React from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
// import { v4 } from 'uuid';
import YoutubeEmbedVideo from 'youtube-embed-video';
import Navbar from './Navbar';

class NewContributeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };

        this._summary = null;
        this.handleNewSubmission = this.handleNewSubmission.bind(this);
    }

    handleNewSubmission(event) {
        event.preventDefault();
        this.props.onNewContribution({summary: this._summary.value})
        this._summary.value = '';
        this.setState({ redirect: true});
    }

    render(){
        return(
            <div>
                <Navbar />
                <YoutubeEmbedVideo videoId="AkLnj5pJtDI" suggestions={false} />
    
                <form onSubmit= {handleNewSubmission}>
                    <textarea
                    id='summary'
                    placeholder='Summarize what happened in the video' 
                    ref={(input) => {this._summary = input; }} />
                    <button type="submit" className="btn-btn">Submit!</button>
                </form>
            </div>
        );
    }

}

NewContributeForm.propTypes = {
    onNewContribution: PropTypes.func
};

export default NewContributeForm;