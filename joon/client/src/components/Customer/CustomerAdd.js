import React, { useState } from "react";
import { post } from "axios";

function CustomerAdd() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addCustomer();
    // .then((response) => {
    //   console.log(response.data);
    // });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.value);
  };

  const handleValueChange = (e) => {
    setName(e.target.value.age);
    setAge(e.target.value.name);
  };

  const addCustomer = () => {
    const url = "/api/customers";
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", age);
    formData.append("age", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
  };

  return (
    <form action="" onSubmit={handleFormSubmit}>
      나이:{" "}
      <input type="text" name="age" value={age} onChange={handleValueChange} />
      <br />
      이름:{" "}
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleValueChange}
      />
      <br />
      사진:{" "}
      <input
        type="file"
        name="file"
        file={file}
        value={fileName}
        onChange={handleFileChange}
      />
      <br />
      <button type="submit">추가</button>
    </form>
  );
}

export default CustomerAdd;
