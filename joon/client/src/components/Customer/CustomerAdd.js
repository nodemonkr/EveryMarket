import React, { useState } from "react";
import Axios from "axios";

function CustomerAdd() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addCustomer().then((response) => {
      console.log(response.data);
    });
    // window.location.reload();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.value);
  };

  const handleValueChange = (e) => {
    e.preventDefault();
    if (e.target.name === "age") {
      setAge(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    }
  };

  const addCustomer = () => {
    const url = "/api/customers";
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);
    formData.append("age", age);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return Axios.post(url, formData, config);
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
