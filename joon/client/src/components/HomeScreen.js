import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Customer from "./Customer";
// import Axios from "axios";

function HomeScreen() {
  //3100포트 노드 서버에서 id.name.age.image 값 가져오기
  const [customers, setCustomers] = useState("");

  useEffect(() => {
    callApi()
      .then((res) => console.log(res)) // useEffect를 통해 callApi 함수 실행
      .catch((err) => console.log("this is error " + err));
  }, []);

  async function callApi() {
    const response = await fetch("/api/customers"); // express rest api의 해당 주소로 접근
    const body = await response.json(); // 해당 주소의 데이터를 json 화
    setCustomers(response.data.id);
    return body;
  }

  return (
    <div>
      {customers
        ? customers.map((c) => {
            return (
              <Customer key={c.id} name={c.name} age={c.age} image={c.image} />
            );
          })
        : ""}
      <Container>i am screen</Container>
    </div>
  );
}

export default HomeScreen;

const Container = styled.div`
  flex: 0.8;
`;
