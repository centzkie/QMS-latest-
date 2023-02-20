import { React, useState, useEffect } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";

const MonitorNowServing = () => {
  const [userData, setUserData] = useState([]);
  const currentPage = 1;
  const postPerPage = 2;
  let pages = [];

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = userData.slice(firstPostIndex, lastPostIndex);

  for (let i = 1; i <= Math.ceil(userData.length / postPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    tableQueryNowserving();
  }, []);

  // QueueLinetable Query
  const tableQueryNowserving = async () => {
    const acadQueueCollection = collection(db, "acadNowserving");
    const q = query(acadQueueCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setUserData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  };
  return (
    <>
      <Box
        component={Paper}
        sx={{
          padding: "15px 40px",
          backgroundColor: "#880000",
          color: "#ffffff",
          borderRadius: "10px",
        }}
      >
        <Typography fontSize="2.5rem" fontWeight="bolder">
          Now Serving:
        </Typography>
        {currentPost.map((queue, index) => (
          <Typography
            fontSize="2.5rem"
            fontWeight="bold"
            textAlign="center"
            key={index}
          >
            {queue.ticket}
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default MonitorNowServing;
