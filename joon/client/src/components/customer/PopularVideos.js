import React from "react";

function Customer(props) {
  return (
    <div>
      <CustomerInfo name={props.name} age={props.age} />
      <CustomerImage image={props.image} />
    </div>
  );
}

function CustomerInfo(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
}

function CustomerImage(props) {
  return (
    <div>
      <img src={props.image} alt="profile" />
    </div>
  );
}

export default Customer;
