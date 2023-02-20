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

const MonitorQueueLine = () => {
  const [userData, setUserData] = useState([]);
  const [userData1, setUserData1] = useState([]);
  const currentPage = 1;

  const postPerPage = 5;
  let pages = [];

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = userData.slice(firstPostIndex, lastPostIndex);
  const currentPost1 = userData1.slice(firstPostIndex, lastPostIndex);

  for (let i = 1; i <= Math.ceil(userData.length / postPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    tableQueryQueue();
    tableQueryPriority();
  }, []);

  // QueueLinetable Query
  const tableQueryQueue = async () => {
    const acadQueueCollection = collection(db, "regQueuing");
    const q = query(acadQueueCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setUserData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  };

  const tableQueryPriority = async () => {
    const acadQueueCollection = collection(db, "regPriority");
    const q = query(acadQueueCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setUserData1(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ minHeight: "420px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#880000" }}>
              <TableCell align="center">
                <Typography
                  sx={{ fontWeight: "bold", color: "wheat", fontSize: "2rem" }}
                >
                  Queue Line
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {currentPost1.map((queue, index) => (
              <TableRow key={index}>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    border: "none",
                    fontSize: "1.5rem",
                  }}
                >
                  {queue.ticket}
                </TableCell>
              </TableRow>
            ))}
            {currentPost.map((queue, index) => (
              <TableRow key={index}>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    border: "none",
                    fontSize: "1.5rem",
                  }}
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

export default MonitorQueueLine;
