import { React, useState } from "react";
import {
  Button,
  Avatar,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  Link,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  AdminPanelSettings,
  AccountCircle,
  LockOpen,
} from "@mui/icons-material"; 
import { motion } from "framer-motion";
import Theme from "../CustomTheme";
import {auth} from '../firebase-config'
//import { ThemeContext } from "@emotion/react";
import { useEffect } from "react";

const Login = () => {
  const [username,setUsername] = useState("");
  const [pass,setPassword] = useState("");
  const [isShown, setIsSHown] = useState(false);
  const navigate = useNavigate();
  const landing = () => {
    navigate("/");
  };

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };
  
  
  useEffect(()=>{
    if((localStorage.getItem("Password") === "admin") && (localStorage.getItem("Username") === "adminacad")){
      navigate("/acad-head-controll"); 
    }
    if((localStorage.getItem("Password1") === "admin") && (localStorage.getItem("Username1") === "adminreg")){
      navigate("/reg-controll"); 
    }
    console.log(localStorage.getItem("Username1"));
    console.log(localStorage.getItem("Password1"));
  })

  const validate = async ()=>{
    if(username.length !== 0 && pass.length !== 0){
      if(pass === "admin" && username === "adminacad"){
        //window.Authentication = true;
        localStorage.setItem("Password","admin");
        localStorage.setItem("Username","adminacad");
        navigate("/acad-head-controll");  
      }
      else if(pass === "admin" && username === "adminreg"){
        //window.Authentication = true;
        localStorage.setItem("Password1","admin");
        localStorage.setItem("Username1","adminreg");
        navigate("/reg-controll");
      }
      else{
        alert("Invalid credential");
        console.log(auth);
      }
    }
    else if(username=== ""|| pass === ""){
      alert("Please fill out the form");
    }
  }

  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://i.imgur.com/6FSp1eg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            {/* <Appbar /> */}
            <Box
              sx={{
                my: 20,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#800000" }}>
                <AdminPanelSettings />
              </Avatar>
              <Typography variant="h6">
                Please sign-in using your Username and Password.
              </Typography>
              <Box
                component="form"
                noValidate
                // onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  onChange ={(e)=>setUsername(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  id="Username"
                  label="Username"
                  placeholder="Username..."
                  name="name"
                  type="text"
                  autoFocus
                  color="pupMaroon"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  onChange ={(e)=>setPassword(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  placeholder="Password..."
                  type={isShown ? "text" : "password"}
                  id="password"
                  color="pupMaroon"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LockOpen />
                      </InputAdornment>
                    ),
                  }}
                />
                <Box>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Show Password"
                      onChange={togglePassword}
                    />
                  </FormGroup>
                </Box>
                <Button
                  onClick={validate}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="pupMaroon"
                  sx={{ mt: 3, mb: 2 }}
                  component={motion.div}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  Sign In
                </Button>

                <Button
                  type="button"
                  fullWidth
                  variant="outlined"
                  color="pupMaroon"
                  //onClick={landing}
                  sx={{ mb: 4 }}
                  component={motion.div}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  Cancel
                </Button>
                <Box>
                  By using this service, you understood and agree to the PUP
                  Online Services{" "}
                  <Link
                    href="https://www.pup.edu.ph/terms/"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                  >
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://www.pup.edu.ph/privacy/"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                  >
                    Privacy Statement
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Login;
