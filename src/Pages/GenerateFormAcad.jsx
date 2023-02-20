import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import Form from "../Components/Acadhead/Form";
import Appbar from "../Components/Landing/Appbar";import Requirements from "../Components/Acadhead/Requirements";
import Footer from "../Components/Landing/Footer";
import { useNavigate } from "react-router-dom";
const GenerateFormAcad = () => {

  const navigate = useNavigate();

  if(sessionStorage.getItem("Enable")){
    navigate("/generateform-acad");
  }
  else{
    navigate("/");
  }
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Appbar />
          <Form />
          <Requirements />
          <Divider>
            <Typography color="#939393" textAlign="center">
              © Group-7
            </Typography>
          </Divider>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default GenerateFormAcad;
