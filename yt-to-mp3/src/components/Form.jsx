import React, {useState} from "react";

const Form = ({getLink}) => {
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (link !== "") {
      getLink(link);
      setLink("");
    } else {
      alert("Invalid Link!");
    }
  };

  return (
    <form className="AppForm" onSubmit={handleSubmit}>
      <h1><i className="fa-brands fa-square-youtube"></i>
      Youtube to MP3 Converter</h1>
      <input
      type="text"
      className="link-input"
      placeholder="Youtube Link"
      value={link}
      onChange={(e) => setLink(e.target.value)}>
      </input>
      <button type="submit" className="submit-btn">Convert</button>
      <div>{link}</div>
    </form>
    
  );
};

export default Form;