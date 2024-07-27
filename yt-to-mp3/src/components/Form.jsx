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
    <div>
      <div>
      <h1 className="title"><i className="fa-brands fa-square-youtube"></i>
      Youtube to MP3 Converter</h1>
      </div>
      <div className="Form">
          <form className="AppForm" onSubmit={handleSubmit}>
          <input
          type="text"
          className="link-input"
          placeholder="Youtube Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}>
          </input>
          <button type="submit" className="submit-btn">Convert</button>
        </form>
      </div>
    </div>
    
    
    
  );
};

export default Form;