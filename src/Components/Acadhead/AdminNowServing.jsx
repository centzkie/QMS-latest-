import { React, useState, useEffect } from "react";
import {
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  Button,
  ThemeProvider,
  createTheme,
  Tooltip,
} from "@mui/material";
import { collection, query, orderBy, onSnapshot, serverTimestamp, addDoc, getDoc, doc, deleteDoc} from "firebase/firestore";
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
        },
      },
    },
  },
});

const AdminNowServing = () => {

  const [qlUserData, setQluserData] = useState([]);
  const [qlCurrentPage, setQlCurrentPost] = useState(1);
  const QlPostPerPage = 2;
  let pages = [];

  const lastPostIndex = qlCurrentPage * QlPostPerPage;
  const firstPostIndex = lastPostIndex - QlPostPerPage;
  const currentPost = qlUserData.slice(firstPostIndex, lastPostIndex);
  const userCollectionHistory = collection(db, "acadSummaryreport");
  const userCollectionSkip = collection(db, "acadSkip");

  const current = new Date();
  const [date,setDate] = useState(`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`);

  for (let i = 1; i <= Math.ceil(qlUserData.length / QlPostPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    tableQueryQueue();
  }, []);

  // QueueLinetable Query
  const tableQueryQueue = async () => {
    const acadQueueCollection = collection(db, "acadNowserving");
    const q = query(acadQueueCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setQluserData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  };

  const directDeleteUser = async(email) => {
    const userDoc = doc(db, "acadNowserving", email)
    await deleteDoc(userDoc);
  }

  const moveToHistorycomplete = async (id) => {
    const docRef = doc(db, "acadNowserving", id);
    const snapshot = await getDoc(docRef);
    await addDoc(userCollectionHistory, {
      status: "Complete",
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
      date: date
    });
    directDeleteUser(id);
  }

  const moveToHistoryincomplete = async (id) => {
    const docRef = doc(db, "acadNowserving", id);
    const snapshot = await getDoc(docRef);
    await addDoc(userCollectionHistory, {
      status: "Incomplete",
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
      date: date
    });
    directDeleteUser(id);
  }

  const moveToSkip = async (id) => {
    const docRef = doc(db, "acadNowserving", id);
    const snapshot = await getDoc(docRef);
    await addDoc(userCollectionSkip, {
      name: snapshot.data().name,
      transaction: snapshot.data().transaction,
      email: snapshot.data().email,
      studentNumber: snapshot.data().studentNumber,
      address: snapshot.data().address,
      contact: snapshot.data().contact,
      userType: snapshot.data().userType,
      yearSection: snapshot.data().yearSection,
      ticket: snapshot.data().ticket,
      timestamp: serverTimestamp()
    });
    directDeleteUser(id);
  } 

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
        Now Serving
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <ThemeProvider theme={styleTableHead}>
            <TableHead>
              <TableRow>
                <TableCell>Actions</TableCell>
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
          <ThemeProvider theme={styleTableBody}>
            {/* Table Body */}
            <TableBody>
            {currentPost.map((queue, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Stack spacing={1.5} direction="row">
                    <Stack>
                      <Button variant="contained" color="success"  onClick={()=>{moveToHistorycomplete(queue.id)}}>
                        Complete
                      </Button>
                    </Stack>
                    <Stack>
                      <Button variant="contained" color="red" onClick={()=>{moveToHistoryincomplete(queue.id)}}>
                        Incomplete
                      </Button>
                    </Stack>
                    <Stack>
                      <Button variant="contained" color="yellow" onClick={()=>{moveToSkip(queue.id)}}>
                        Skip
                      </Button>
                    </Stack>
                  </Stack>
                </TableCell>
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
                  </Tooltip>                  <TableCell>{queue.name}</TableCell>
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
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminNowServing;
