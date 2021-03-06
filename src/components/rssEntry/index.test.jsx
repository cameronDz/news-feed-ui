import React from "react";
import RssEntry from "./index";
import { render, screen } from "@testing-library/react";

describe("RssEntry", () => {
  test("renders author with release date displayed", () => {
    const author = "Some Guy";
    const date = new Date();
    const publishDate = date.toJSON();
    render(<RssEntry author={author} publishDate={publishDate} />);
    expect(screen.getByText(author)).toBeInTheDocument();
    expect(screen.getByText("[Open]")).toBeInTheDocument();
    expect(
      screen.getByText(`Released: ${date.toDateString()}`)
    ).toBeInTheDocument();
  });
});
