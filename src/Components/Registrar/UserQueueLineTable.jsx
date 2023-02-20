import { React, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";

const UserQueueLineTable = () => {
  const [userData, setUserData] = useState([]);
  const [userData1, setUserData1] = useState([]);
  
  useEffect(() => {
    viewTableQueuing();
    viewTablePriority();
  }, []);

  // QueueLinetable Query
  const viewTableQueuing = async () => {
    const acadQueueCollection = collection(db, "regQueuing");
    const q = query(acadQueueCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setUserData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  };
  const viewTablePriority = async () => {
    const acadQueueCollection = collection(db, "regPriority");
    const q = query(acadQueueCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setUserData1(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  };
  return (
    <>
      <TableContainer component={Paper} sx={{
          height: "320px",
          margin: "auto",
          "&::-webkit-scrollbar": {
            width: "2px",
          },
        }}>
        <Table sx={{ tableLayout: "auto", height: "maxContent" }}>
          <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }}>
            <TableRow sx={{ bgcolor: "#880000" }}>
              <TableCell align="center">
                <Typography sx={{ fontWeight: "bold", color: "wheat" }}>
                  Queue Line
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {userData1.map((queue, index) => (
              <TableRow key={index}>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", border: "none" }}
                >
                  {queue.ticket}
                </TableCell>
              </TableRow>
            ))}
            {userData.map((queue, index) => (
              <TableRow key={index}>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", border: "none" }}
                >
                  {queue.ticket}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserQueueLineTable;
