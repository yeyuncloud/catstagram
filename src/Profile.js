import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const axios = require("axios");

function Profile () {
  const [images, setImages] = useState([]);

  const urlParams = useParams();

  const data = () => {
    axios
    .get("https://api.thecatapi.com/v1/images/search?breed_id={urlParams.id}&limit=5")
    .then((response) => {
      // handle success
      console.log(response);
      setImages(response.data);
    })
    .catch((error) => {
      // handle error
      console.log(error);
      alert("error", error);
    });
  }

  useEffect(data, []);

    return (
        <div>
          <h2>{urlParams.id} Profile</h2>
          {images.map((image, index) => {
              return <div key={index}>
              <div><img src={image.url} alt="cat photos" width='1000px'></img></div>
              </div>
          })}
        </div>
    );
}


export default Profile;