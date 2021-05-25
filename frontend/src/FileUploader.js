import React, { useState } from "react";
import './Postfeed.css'
export default function FileUploader() {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };

  const handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: formData
    });
  };

  return (
    <div>
      <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} width="300" height="300" />
        ) : 
        (
          <>
			<i className="fa fa-camera-retro fa-3x test"></i>
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none",  }}
        onChange={handleChange}
      />
      <br />
      <button className = 'btn' onClick={handleUpload}>Upload</button>
    </div>
  );
}
