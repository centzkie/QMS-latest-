import { React, useState, useEffect } from "react";
import {
  AppBar,
  ThemeProvider,
  Typography,
  Toolbar,
  Box,
  Button,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  createTheme,
  Tooltip,
  TextField,
  InputAdornment,
  IconButton,
  Checkbox
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import img from "../../Img/seal.png";
import Sidebar from "../../Components/Acadhead/Sidebar";
import Theme from "../../CustomTheme";
import { db } from "../../firebase-config";
import { collection, onSnapshot, query, orderBy, where, getDocs, doc, deleteDoc, getDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

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
    yellow: {
      main: "#ffab00",
      contrastText: "#000000",
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

const Report = () => {
  const [qlUserData, setQluserData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [tableMap, setTableMap] = useState(true);
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(true);
  const [isDisable, setIsDisable] = useState(true);
  const current = new Date();
  const [date,setDate] = useState(`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`);
  const userCollectionArchieve = collection(db, "acadArchieve");
  
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("Password") !== "admin" &&
      localStorage.getItem("Username") !== "adminacad"
    ) {
      navigate("/admin");
    }
  });

  useEffect(() => {
    tableQueryHistory();
  }, []);

  const tableQueryHistory = async () => {
    const acadQueueCollection = collection(db, "acadSummaryreport");
    const q = query(acadQueueCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setQluserData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  };
  const checkPoint = async()=>{
    let acadQueueCollection = collection(db, "acadSummaryreport");
    let q = query(acadQueueCollection, where("name", "==", search));
    let unsub = onSnapshot(q, (snapshot) =>
      setSearchData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  }
  const tableQuerySearch = async () => {
    checkPoint();
    let j = 0;
    let q = query(
      collection(db, "acadSummaryreport"),
      where("name", "==", search)
    );
    let querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      j++;
    });
    if(search.length === 0){
      alert("Please fill required field");
    }
    else{
      if(j === 0){
        setTableMap(true);
        setIsDisable(true);
        alert("No data found");
      }
      else{
        setTableMap(false);
        setIsDisable(false);
      }
    }
  };
  
  const viewAll=()=>{
    setTableMap(true);
  }
  const deleteSingleData = async (id) => {
    const docRef = doc(db, "acadSummaryreport", id);
    const snapshot = await getDoc(docRef);
    await addDoc(userCollectionArchieve, {
      status: snapshot.data().status,
      name: snapshot.data().name,
      transaction: snapshot.data().transaction,
      email: snapshot.data().email,
      studentNumber: snapshot.data().studentNumber,
      address: snapshot.data().address,
      contact: snapshot.data().contact,
      userType: snapshot.data().userType,
      yearSection: snapshot.data().yearSection,
      ticket: snapshot.data().ticket,
      timestamp: snapshot.data().timestamp,
      date: snapshot.data().date
    });

    const userDoc = doc(db, "acadSummaryreport", id)
    await deleteDoc(userDoc);
  }

  const deleteAll= ()=>{
    
    if(window.confirm("Are you sure you want to delete ?")){
      moveAllData();
    };
  }

  const moveAllData=async()=>{
    let docRef = doc(db, "acadSummaryreport", "ddwd");
    let snapshot = await getDoc(docRef);

    qlUserData.map(async(queue) => (
      docRef = doc(db, "acadSummaryreport", queue.id),
      snapshot = await getDoc(docRef),
      await addDoc(userCollectionArchieve, {
        status: snapshot.data().status,
        name: snapshot.data().name,
        transaction: snapshot.data().transaction,
        email: snapshot.data().email,
        studentNumber: snapshot.data().studentNumber,
        address: snapshot.data().address,
        contact: snapshot.data().contact,
        userType: snapshot.data().userType,
        yearSection: snapshot.data().yearSection,
        ticket: snapshot.data().ticket,
        timestamp: snapshot.data().timestamp,
        date: snapshot.data().date
      }),
      await deleteDoc(doc(db, "acadSummaryreport", queue.id))
    ))
  }

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
                Summary Report
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Box
          py={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            type="email"
            id="Username"
            label="StudentNo/Contact"
            required
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            color="pupMaroon"
            placeholder="Ex. 2020-23129-SM-0/09458744562"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchOutlinedIcon
                     onClick={tableQuerySearch}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              width: {
                xs: "100%",
                md: "100%",
                lg: "95%",
              },
              bgcolor: "white",
            }}
          />
        </Box>
        <Box mx={5} sx={{ display: "flex", justifyContent: "end" }}>
        <Button disable = {isDisable} onClick = {deleteAll} variant="outlined" color="pupMaroon">
            Delete All
        </Button>
        <Button onClick={viewAll}variant="outlined" color="pupMaroon">
            View All
        </Button>
        <Button variant="outlined" color="pupMaroon">
            Print
        </Button>
        </Box>
        <Box px={5} py={2} mb={5}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <ThemeProvider theme={styleTableHead}>
                <TableHead>
                  <TableRow>        
                    <TableCell>Action</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Ticket</TableCell>
                    <TableCell>Transaction</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Student Number</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Type of User</TableCell>
                    <TableCell>Year&Section</TableCell>
                    <TableCell>Contact Number</TableCell>
                    <TableCell>Address</TableCell>
                  </TableRow>
                </TableHead>
              </ThemeProvider>
              {tableMap === true && (
              <>
              <ThemeProvider theme={styleTableBody}>
                {/* Table Body */}
                <TableBody>
                  {qlUserData.map((queue, index) => (
                    <TableRow key={index}>
                      <TableCell>
                      <Button variant="contained" color="success"  onClick={()=>{deleteSingleData(queue.id)}}>
                        Delete
                      </Button>
                      </TableCell>
                      <TableCell>{queue.status}</TableCell>
                      <TableCell>{queue.date}</TableCell>
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        {queue.ticket}
                      </TableCell>
                      <Tooltip title={queue.transaction} arrow>
                        <TableCell
                          sx={{
                            maxWidth: "200px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {queue.transaction}
                        </TableCell>
                      </Tooltip>

                      <TableCell>{queue.name}</TableCell>
                      <TableCell>{queue.studentNumber}</TableCell>
                      <TableCell>{queue.email}</TableCell>
                      <TableCell>{queue.userType}</TableCell>
                      <TableCell>{queue.yearSection}</TableCell>
                      <TableCell>{queue.contact}</TableCell>
                      <TableCell>{queue.address}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </ThemeProvider>
              </>
              )}
              {tableMap === false && (
              <>
              <ThemeProvider theme={styleTableBody}>
                {/* Table Body */}
                <TableBody>
                  {searchData.map((queue, index) => (
                    <TableRow key={index}>
                      <TableCell>
                      <Button variant="contained" color="success"  onClick={()=>{deleteSingleData(queue.id)}}>
                        Delete
                      </Button>
                      </TableCell>  
                      <TableCell>{queue.status}</TableCell>
                      <TableCell>{queue.date}</TableCell>
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        {queue.ticket}
                      </TableCell>
                      <Tooltip title={queue.transaction} arrow>
                        <TableCell
                          sx={{
                            maxWidth: "200px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {queue.transaction}
                        </TableCell>
                      </Tooltip>
                      <TableCell>{queue.name}</TableCell>
                      <TableCell>{queue.studentNumber}</TableCell>
                      <TableCell>{queue.email}</TableCell>
                      <TableCell>{queue.userType}</TableCell>
                      <TableCell>{queue.yearSection}</TableCell>
                      <TableCell>{queue.contact}</TableCell>
                      <TableCell>{queue.address}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </ThemeProvider>
              </>
              )}
            </Table>
          </TableContainer>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Report;
