import React from 'react';
import Contribute from './Contribute';
import Navbar from './Navbar';
import PropTypes from 'prop-types';

function ContributeControl (props) {
    return (
        <div>
            <Navbar />
            <div>
                {Object.keys(props.contributeList).map((summ) => {
                    var newSumm = props.contributeList[summ];
                    return(
                            <Contribute summary = {newSumm.summary}
                            key={newSumm.id} />
                    );
                    })}
            </div>
        </div>
    );
}

ContributeControl.propTypes = {
    contributeList: PropTypes.array
};

export default ContributeControl;