import { React, useState, useEffect } from "react";
import {
  AppBar,
  ThemeProvider,
  createTheme,
  Typography,
  Toolbar,
  Box,
  TextField,
  Paper,
  Button,
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import img from "../../Img/seal.png";
import Sidebar from "../../Components/Acadhead/Sidebar";
import Theme from "../../CustomTheme";
import { db } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  query,
  orderBy,
  deleteDoc,
  onSnapshot
} from "firebase/firestore";

// table header syle
const styleTableHead = createTheme({
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#880000",
          color: "#ffffff",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          textAlign: "center",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          textTransform: "uppercase",
        },
      },
    },
  },
});

// table body style
const styleTableBody = createTheme({
  palette: {
    red: {
      main: "#ba000d",
      contrastText: "#ffffff",
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          whiteSpace: "nowrap",
          textAlign: "center",
        },
      },
    },
  },
});

const Announcement = () => {
  const [announce, setAnnounce] = useState("");
  const announceCollection = collection(db, "acadAnnouncement");
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    if((localStorage.getItem("Password1") !== "admin") && (localStorage.getItem("Username1") !== "adminreg")){
      navigate("/admin");
    }
  })
  const insert = async () => {
    if (announce.length > 0) {
      if (window.confirm('Are you sure you wish to add this announcement ?')){
        await addDoc(announceCollection, {
          announcement: announce,
          timestamp: serverTimestamp(),
        });
        setAnnounce("");
      }    
    } else {
      alert("Please fill all the reqiured fields!");
    }
  };

  useEffect(() => {
    tableQueryAnnouncement();
  }, []);

  const directDelete = async(email) => {
    const userDoc = doc(db, "acadAnnouncement", email)
    if (window.confirm('Are you sure you wish to delete this announcement ?')){
      await deleteDoc(userDoc);
    }
    
  }

  // Announcement Table
  const tableQueryAnnouncement = async () => {
    const acadQueueCollection = collection(db, "acadAnnouncement");
    const q = query(acadQueueCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setUserData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="pupMaroon">
            <Toolbar>
              <Sidebar />
              <Box px={2}>
                <img src={img} alt="" height={50} width={50} />
              </Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                color="white"
              >
                Announcement
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

        {/* Announcement textfield */}
        <Box p={5}>
          <TextField
            id="outlined-multiline-flexible"
            label="Announcement"
            multiline
            value = {announce}
            maxRows={4}
            fullWidth
            height="100px"
            color="pupMaroon"
            onChange={(e) => {
              setAnnounce(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      "&:hover": { backgroundColor: "#ffd700" },
                    }}
                  >
                    <CampaignIcon onClick={insert} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Announcement table */}
        <Box px={5}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <ThemeProvider theme={styleTableHead}>
                <TableHead>
                  <TableRow>
                    <TableCell>Action</TableCell>
                    <TableCell>Announcement</TableCell>
                  </TableRow>
                </TableHead>
              </ThemeProvider>
              <ThemeProvider theme={styleTableBody}>
                {/* Table Body */}
                <TableBody>
                {userData.map((queue, index) => (
                  <TableRow  key={index}>
                    <TableCell>
                      <Button variant="contained" color="red" onClick={()=>{directDelete(queue.id)}}>
                        Remove
                      </Button>
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      {queue.announcement}
                    </TableCell>
                  </TableRow>
                ))}
                </TableBody>
              </ThemeProvider>
            </Table>
          </TableContainer>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Announcement;
