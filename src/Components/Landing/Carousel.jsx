import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";

import img1 from "../../Img/img1.jpg";
import img2 from "../../Img/img2.jpg";
import img3 from "../../Img/img3.jpg";
import img4 from "../../Img/img4.jpg";
import img5 from "../../Img/img5.jpg";
import img6 from "../../Img/img6.jpg";
import img7 from "../../Img/img7.jpg";
import img8 from "../../Img/img8.jpg";
import img9 from "../../Img/img9.jpg";
import img10 from "../../Img/img10.jpg";

function ImgCarousel(props) {
  var items = [
    {
      name: "Image 1",
      image: img1,
    },
    {
      name: "Image 2",
      image: img2,
    },
    {
      name: "Image 3",
      image: img3,
    },
    {
      name: "Image 4",
      image: img4,
    },
    {
      name: "Image 5",
      image: img5,
    },
    {
      name: "Image 6",
      image: img6,
    },
    {
      name: "Image 7",
      image: img7,
    },
    {
      name: "Image 8",
      image: img8,
    },
    {
      name: "Image 9",
      image: img9,
    },
    {
      name: "Image 10",
      image: img10,
    },
  ];

  return (
    <Box>
      <Carousel animation="slide">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}

function Item(props) {
  return (
    // sx={{ height: { lg: "400px", md: "500px", sm: "250px" } }}
    <Paper>
      <img
        src={props.item.image}
        alt=""
        style={{
          width: "100%",
          maxHeight: "550px",
          objectFit: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectPosition: "center center",
        }}
      />
    </Paper>
  );
}

export default ImgCarousel;
