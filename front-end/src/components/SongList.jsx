import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  // const items = 5;
  const [items, setItems] = useState(5);
  const [seeMore, setSeeMore] = useState("Ver mais");

  

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          if (items === 5) {
            setSeeMore("Ver menos");
            setItems(20);
          } else {
            setSeeMore("Ver mais");
            setItems(5);
          }
        }}
      >
        {seeMore}
      </p>
    </div>
  );
};

export default SongList;
