import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Navbar from './Navbar';

function NewSearchForm() {
    return(
        <div>
            <Navbar />
            <form>
                <input type='text'
                id='word'
                placeholder='Search By Word' />
                <button type='submit'>Search</button>
            </form>
        </div>
    );
}

export default NewSearchForm;