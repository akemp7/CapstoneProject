import React from 'react';
import PropTypes from 'prop-types';

class Contribute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: null,
        };
    }

    render() {
        return (
            <div>
                <p>Summary: {this.props.summary}</p>
            </div>
        );
    }
}

Contribute.propTypes = {
    summary: PropTypes.string,
};

export default Contribute;