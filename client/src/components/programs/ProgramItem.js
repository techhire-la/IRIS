import React from 'react';
import ReactDOM from 'react-dom';
// import { Image, Item, Responsive, Segment, Form, Radio, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


// const ProgramItem = (props) => (

const ProgramItem =({
    program: {
        name
    }
})=>{
    return(
        <div>
            <h2>{name}</h2>
        </div>
    )
}

// const ProgramItem = ({
//   program: {
//     name
//   }
// }) => {
//   return (
//     <div className='profile bg-light'>
//       <div>
//         <h2>{name}</h2>
//     </div>
//   );
// };

ProgramItem.propTypes = {
  program: PropTypes.object.isRequired
};


export default ProgramItem;
