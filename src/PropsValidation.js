import React from 'react';
import PropTypes from 'prop-types';
export class PropsValidation extends React.Component{
    
    render(){
        return(
            <div>
                <h1>Props Validation</h1>
                <hr/>
                <p>Name : {this.props.name}</p>
                <p>Preferred City : </p>

                {this.props.city.map(
                        (cityname, iIndex) =>
                            <p key={iIndex}>{cityname}</p>
                    )}

                <p>Age : {this.props.age}</p>
            </div>
        );
    }
}

function withinRange(props, propName, componentName) {
    componentName = componentName || 'ANONYMOUS';
  
    if (props[propName]) {
      let value = props[propName];
      if (typeof value === 'number') {
          return (value >= 18 && value <= 60) ? null : new Error(propName + ' in ' + componentName + " is not within 18 to 60");
      }
    }
  
    // assume all ok
    return null;
  }

PropsValidation.defaultProps = {
    name: 'Steve',
    city: ['Bangalore','Chennai'],
    age: 18
  }

PropsValidation.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.array,
    age: withinRange    //PropTypes.number,
 }