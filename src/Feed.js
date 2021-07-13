import FeedCard from "./FeedCard";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";

const axios = require("axios");

function Feed() {

const [breeds, setBreeds] = useState([]);

  const fetchData = () => {
    axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then((response) => {
        // handle success
        console.log(response);
        setBreeds(
          response.data.filter((data) => {
            return data.image;
          })
        );
      })
      .catch((error) => {
        // handle error
        console.log(error);
        alert("error", error);
      });
  }

  useEffect(fetchData, []);
  
    return (
      <div>
        <h2>Feed</h2>
        {breeds.map((breed, index) => {
          return (
            <div key={index}>
          <Row>
            <FeedCard key={breed.id} breed={breed} image={breed.image.url} name={breed.name} description={breed.description}/>
          </Row>
        </div>
          )
        })}
        
      </div>
    );
}

export default Feed;