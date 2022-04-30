import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <div className="container">
      <form className="my-1">
        <label className=" btn d-flex btn-danger w-25 rounded addPhoto">
          <input type="file" onChange={handleChange} />
          <span className="m-auto text-white ">Add</span>
        </label>
        <div className="text-start small">
          {error && <div className="text-danger small">{error}</div>}
          {file && <div className="small">{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
