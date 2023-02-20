import { React, useState, useEffect } from "react";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  ThemeProvider,
  createTheme,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Pagination,
  Paper,
  Tooltip,
} from "@mui/material";
import {
  collection,
  getDocs,where,
  doc,
  getDoc,
  query,
  orderBy,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  addDoc,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "../../firebase-config";

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
          maxWidth: "200px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
    },
  },
});

const AdminQueueline = () => {
  const [qlUserData, setQluserData] = useState([]);
  const [prioData, setPrioData] = useState([]);
  const userCollection = collection(db, "acadNowserving");
  const [isDisable, setIsDisable] = useState(false  );

  useEffect(() => {
    const checkTime = async() => {
      let check = 0;
      const coll = collection(db, "acadNowserving");
      const snapshot = await getCountFromServer(coll);
      check = snapshot.data().count;

      if (check >=2){
        setIsDisable(true);
      }
      else if (check<=1){
        setIsDisable(false);
      }
      console.log(isDisable);
    } 
    const intervalId = setInterval(checkTime,3000);
    return () => clearInterval(intervalId);
  },[]);
  
  useEffect(() => {
    tableQueryQueue();
    tableQueryPriority();
  }, []);

  // QueueLinetable Query
  const tableQueryQueue = async () => {
    const acadQueueCollection = collection(db, "acadQueuing");

    const q = query(acadQueueCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setQluserData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  
    return unsub;
  };
  const tableQueryPriority = async () => {
    const acadQueueCollection1 = collection(db, "acadPriority");
    const q = query(acadQueueCollection1, orderBy("timestamp", "asc"));
    const sub = onSnapshot(q, (snapshot) =>
      setPrioData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  
    return sub;
  };

  const directDeleteUser = async (email) => {
    const userDoc = doc(db, "acadQueuing", email);
    await deleteDoc(userDoc);
  };
  const directDeleteUser1 = async (id) => {
    const userDoc = doc(db, "acadPriority", id);
    await deleteDoc(userDoc);
  };

  const moveUser = async (id) => {
    const docRef = doc(db, "acadQueuing", id);
    const snapshot = await getDoc(docRef);
    await addDoc(userCollection, {
      name: snapshot.data().name,
      transaction: snapshot.data().transaction,
      email: snapshot.data().email,
      studentNumber: snapshot.data().studentNumber,
      address: snapshot.data().address,
      contact: snapshot.data().contact,
      userType: snapshot.data().userType,
      yearSection: snapshot.data().yearSection,
      ticket: snapshot.data().ticket,
      timestamp: serverTimestamp(),
    });
    
    directDeleteUser(id);
  };

  const moveUser1 = async (id) => {
    const docRef = doc(db, "acadPriority", id);
    const snapshot = await getDoc(docRef);
    await addDoc(userCollection, {
      name: snapshot.data().name,
      transaction: snapshot.data().transaction,
      email: snapshot.data().email,
      studentNumber: snapshot.data().studentNumber,
      address: snapshot.data().address,
      contact: snapshot.data().contact,
      userType: snapshot.data().userType,
      yearSection: snapshot.data().yearSection,
      ticket: snapshot.data().ticket,
      timestamp: serverTimestamp(),
    });
    
    directDeleteUser1(id);
  };

  const addUser = async (id) => {
    moveUser(id);
  };
  const addUser1 = async (id) => {
    moveUser1(id);
  };
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          padding: "15px",
          fontSize: "1.2rem",
        }}
      >
        Queue Line
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          height: "320px",
          margin: "auto",
          "&::-webkit-scrollbar": {
            width: "2px",
          },
        }}
      >
        <Table sx={{ tableLayout: "auto", height: "maxContent" }}>
          <ThemeProvider theme={styleTableHead}>
            <TableHead sx={{ position: "sticky", top: 0 }}>
              <TableRow>
                <TableCell>Actions</TableCell>
                <TableCell>Ticket</TableCell>
                <TableCell>Transactions</TableCell>
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
          <ThemeProvider theme={styleTableBody}>
            {/* Table Body */}
            <TableBody>

              {prioData.map((queue, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Button
                      disabled={isDisable}
                      variant="contained"
                      onClick={() => {
                        addUser1(queue.id);
                      }}
                    >
                      Serve Now
                    </Button>
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    {queue.ticket}
                  </TableCell>

                  <Tooltip title={queue.transaction} arrow>
                    <TableCell>{queue.transaction}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.name} arrow>
                    <TableCell>{queue.name}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.studentNumber} arrow>
                    <TableCell>{queue.studentNumber}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.email} arrow>
                    <TableCell>{queue.email}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.userType} arrow>
                    <TableCell>{queue.userType}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.yearSection} arrow>
                    <TableCell>{queue.yearSection}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.contact} arrow>
                    <TableCell>{queue.contact}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.address} arrow>
                    <TableCell>{queue.address}</TableCell>
                  </Tooltip>
                </TableRow>
              ))} 
              {qlUserData.map((queue, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Button
                      variant="contained"
                      disabled={isDisable}
                      onClick={() => {
                        addUser(queue.id);
                      }}
                    >
                      Serve Now
                    </Button>
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    {queue.ticket}
                  </TableCell>

                  <Tooltip title={queue.transaction} arrow>
                    <TableCell>{queue.transaction}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.name} arrow>
                    <TableCell>{queue.name}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.studentNumber} arrow>
                    <TableCell>{queue.studentNumber}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.email} arrow>
                    <TableCell>{queue.email}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.userType} arrow>
                    <TableCell>{queue.userType}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.yearSection} arrow>
                    <TableCell>{queue.yearSection}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.contact} arrow>
                    <TableCell>{queue.contact}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.address} arrow>
                    <TableCell>{queue.address}</TableCell>
                  </Tooltip>
                </TableRow>
              ))} 

            </TableBody>
          </ThemeProvider>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminQueueline;
