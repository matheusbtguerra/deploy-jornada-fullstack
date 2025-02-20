import React, { use } from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);

  const [seeMoreOrLessOption, setSeeMoreOrLessOption] = useState("Ver mais");

  function seeMoreOrLessToogle() {
    if (items === 5) {
      setItems(10);
      setSeeMoreOrLessOption("Ver menos");
    } else {
      setItems(5);
      setSeeMoreOrLessOption("Ver mais");
    }
  }

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={seeMoreOrLessToogle}
      >
        {seeMoreOrLessOption}
      </p>
    </div>
  );
};

export default SongList;
