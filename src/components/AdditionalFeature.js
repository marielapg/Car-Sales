import React from 'react';
import { connect } from 'react-redux';
import {addFeature} from "../actions/index";

const AdditionalFeature = props => {
  const buyPart = item => {
    if (!props.car.features.includes(item)) {
      props.addFeature(item)
    }
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick ={() => buyPart (props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps ={
  addFeature
}
export default connect (state => state, mapDispatchToProps)(AdditionalFeature);
