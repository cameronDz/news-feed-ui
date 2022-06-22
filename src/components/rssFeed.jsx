import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import CategorySelector from "./categorySelector";
import RssEntryList from "./rssEntryList";
import { fetchCategoryFeeds } from "../libs/parser";
import feeds from "../assets/feeds";
import { rssStyles as styles } from "./styles";

const categoryList = Object.keys(feeds);
const useStyles = makeStyles(() => styles);
const RssFeed = () => {
  const [categories, setCategories] = useState([]);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setCategories(categoryList);
  }, []);

  const handleSelect = (selectedCategory) => {
    setEntries([]);
    fetchCategoryFeeds(selectedCategory, handleEntriesMerge);
  };

  const handleEntriesMerge = (data) => {
    setEntries((prev) => {
      return prev.concat(data).sort((a, b) => {
        const dateA = new Date(a.publishDate);
        const dateB = new Date(b.publishDate);
        return dateA > dateB ? -1 : 1;
      });
    });
  };

  const classes = useStyles();
  return (
    <div className={classes.rssRoot}>
      <h3>{`RSS Feed`}</h3>
      <CategorySelector categories={categories} onSelect={handleSelect} />
      <RssEntryList entries={entries} />
    </div>
  );
};

export default RssFeed;
