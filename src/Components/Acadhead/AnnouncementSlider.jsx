import { React, useEffect, useState } from "react";
import "./AnnouncementSlider.css";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";

const AnnouncementSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    tableQueryQueue();
  }, []);

  // QueueLinetable Query
  const tableQueryQueue = async () => {
    const acadQueueCollection = collection(db, "acadAnnouncement");
    const q = query(acadQueueCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  };
  return (
    <div>
      <div class="slider">
        <div class="slide-track">
          {data.map((value, index) => (
            <div class="slide" key={index}>
              <h2>{value.announcement}</h2>
            </div>
          ))}
          {/* <div class="slide">
            <h2>lorem5</h2>
          </div>
          <div class="slide">
            <h2>lorem5</h2>
          </div>
          <div class="slide">
            <h2>lorem5</h2>
          </div>
          <div class="slide">
            <h2>lorem5</h2>
          </div>
          <div class="slide">
            <h2>lorem5</h2>
          </div>
          <div class="slide">
            <h2>lorem5</h2>
          </div>
          <div class="slide">
            <h2>lorem5</h2>
          </div>
          <div class="slide">
            <h2>lorem5</h2>
          </div>
          <div class="slide">
            <h2>lorem5</h2>
          </div>
          <div class="slide">
            <h2>lorem5</h2>
          </div>
          <div class="slide">
            <h2>lorem5</h2>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementSlider;
