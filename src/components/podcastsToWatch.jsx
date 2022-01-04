import React, { useEffect, useState } from "react";
import podcasts from "../../assets/data/podcasts.json";

const arrayLength = (arr) => {
  return Array.isArray(arr) ? arr.length : 0;
};

const PodcastsToWatch = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    const shows = [];
    const outerLength = arrayLength(podcasts?.list);
    for (let outerIdx = 0; outerIdx < outerLength; outerIdx++) {
      const innerLength = arrayLength(podcasts.list[outerIdx]?.listenList);
      for (let innerIdx = 0; innerIdx < innerLength; innerIdx++) {
        let title = podcasts.list[outerIdx]?.listenList[innerIdx]?.title;
        if (title) {
          title = `${podcasts.list[outerIdx].name} - ${title}`;
          const url = podcasts.list[outerIdx]?.listenList[innerIdx].url || "";
          shows.push({ title, url });
        }
      }
    }
    setList(shows);
  }, []);

  return (
    <div style={{ padding: 8 }}>
      <h4>Shows to watch:</h4>
      <ul>
        {Array.isArray(list) &&
          list.map((item, idx) => {
            return (
              item?.title && (
                <li key={item.id || idx}>
                  {item.url ? <a href={item.url}>{item.title}</a> : item.title}
                </li>
              )
            );
          })}
      </ul>
    </div>
  );
};

export default PodcastsToWatch;
