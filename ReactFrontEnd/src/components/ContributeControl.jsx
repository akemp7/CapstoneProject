import React from 'react';
import Contribute from './Contribute';
import Navbar from './Navbar';
import PropTypes from 'prop-types';

function ContributeControl (props) {
    return (
        <div>
            <Navbar />
            <div>
                {props.contributeList.map((summ) =>
                    <Contribute summary = {summ.summary}
                    key={summ.id} />
                    )}
            </div>
        </div>
    );
}

ContributeControl.propTypes = {
    contributeList: PropTypes.array
};

export default ContributeControl;