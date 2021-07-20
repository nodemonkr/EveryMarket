import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Customer from "./Customer/Customer";
import Axios from "axios";

function HomeScreen() {
  const [customers, setCustomers] = useState("");

  //5000포트 노드 서버에서 id.name.age.image 값 가져옵니다
  useEffect(() => {
    callApi()
      //callApi를 호출하여 setCustomers에 값을 넣어주었습니다
      .then((res) => setCustomers(res))
      .catch((err) => console.log("this is error " + err));
  }, []);

  const callApi = async () => {
    const response = await fetch("http://localhost:5000/api/customers");
    const body = await response.json();
    return body;
  };

  return (
    <div>
      {customers
        ? customers.map((c) => {
            return (
              <Customer key={c.id} name={c.name} age={c.age} image={c.image} />
            );
          })
        : ""}
    </div>
  );
}

export default HomeScreen;

const Container = styled.div`
  flex: 0.8;
`;
