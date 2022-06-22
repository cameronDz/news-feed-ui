import React from "react";
import PropTypes from "prop-types";
import RssEntry from "../rssEntry";

const propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      id: PropTypes.string,
      link: PropTypes.string,
      name: PropTypes.string,
      publishDate: PropTypes.string,
      thumbnailUrl: PropTypes.string,
    })
  ),
};
const RssEntryList = ({ entries = [] }) => {
  return (
    <section>
      {entries.map((entry) => {
        return (
          <RssEntry
            key={entry.id}
            author={entry.author}
            link={entry.link}
            name={entry.name}
            publishDate={entry.publishDate}
            thumbnailUrl={entry.thumbnailUrl}
          />
        );
      })}
    </section>
  );
};

RssEntryList.propTypes = propTypes;
export default RssEntryList;
