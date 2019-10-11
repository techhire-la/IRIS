import ReactDOM from 'react-dom';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPrograms } from '../../actions/program';
import ProgramItem from './ProgramItem';
import {
    Image,
    Item,
    Responsive,
    Segment,
    Form,
    Button,
    TextArea
} from 'semantic-ui-react'

const Programs = ({ getPrograms, programs: { programs, loading } }) => {
// const Programs = ({ getPrograms}) => {


    useEffect(() => {
      getPrograms();
    }, [getPrograms]);

    // debugger
    // console.log("++++++++++++++++++++++++++++++++")
    // console.log("programs: " + typeof(programs))
    // console.log()
    programs.map(program => console.log(program))


    return (
      <Fragment>
            <h1 className='large text-primary'>Programs</h1>
            <p className='lead'>
              <i className='fab fa-connectdevelop' /> YPI's catalogue of program services
            </p>

            <div className='profiles'>

            <div className='profiles'>
              {programs.length > 0 ? (
                programs.map(program => (
                  <ProgramItem key={program._id} program={program} />
                ))
              ) : (
                <h4>No profiles found...</h4>
              )}
          </div>

            </div>
      </Fragment>
    );
    


};


Programs.propTypes = {
    getPrograms: PropTypes.func.isRequired,
    programs: PropTypes.object.isRequired
  };
  

  const mapStateToProps = state => ({
    programs: state.programs
  });
  
  export default connect(
    mapStateToProps,
    { getPrograms }
  )(Programs);

      // program: PropTypes.object.isRequired

      // {programs.length > 0 ? (
      //   programs.map(program => (
      //     <p key={program.id}> {program} </p>
      //   ))


      // {
      //   programs.map(program =><p id={program._id}>{program.name}</p>
      // }