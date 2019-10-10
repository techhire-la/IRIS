import ReactDOM from 'react-dom';
import axios from 'axios';

import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPrograms } from '../../actions/program';
import Program from './Program';
import {
    Image,
    Item,
    Responsive,
    Segment,
    Form,
    Button,
    TextArea
} from 'semantic-ui-react'

// const Programs = ({ getPrograms, programs: { programs, loading } }) => {
const Programs = ({ getPrograms}) => {


    useEffect(() => {
      getPrograms();
    }, [getPrograms]);


    // console.log("Programs")
    // console.log(getPrograms)


    return (
        <div>
            <h1>PROGRAMS</h1>
        </div>
        
      );
    


};


Programs.propTypes = {
    getPrograms: PropTypes.func.isRequired,
  };
  

  const mapStateToProps = state => ({
    programs: state.programs
  });
  
  export default connect(
    mapStateToProps,
    { getPrograms }
  )(Programs);

      // program: PropTypes.object.isRequired
