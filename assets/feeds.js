const feeds = {
  Comedy: [
    // Tim Dillon Show
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC4woSp8ITBoYDmjkukhEhxg",
    // Tuesdays with Stories
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCsE74YJvPJpaquzTPMO8hAA",
    // Flagrant
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC5PstSsGrRwj2o6asQpC4Rg",
    // RLM
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCrTNhL_yO3tPTdQ5XgmmWjA",
  ],
  Gaming: [
    // Game Theorist
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCo_IB5145EVNcf8hw1Kku7w",
    // Josh Strife
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCR9X2tT0_WVfuYO17vqstlA",
    // Video Donkey
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCsvn_Po0SmunchJYOWpOxMg",
    // The Salt Factory
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCQrDV_RiKJ-cNyyMdTjzREQ",
    // KingK
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC18YhnNvyrU2kTwCyj9p5ag",
    // Joseph Anderson
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCyhnYIvIKK_--PiJXCMKxQQ",
    // Luke Stephens
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCe4_UPAmhz2sqorGbF8oZHA",
  ],
  "Techno Music": [
    // Club Music
    "https://www.youtube.com/feeds/videos.xml?channel_id=UComEqi_pJLNcJzgxk4pPz_A",
    // DJ Ekki
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCPWBlX15fNBUw0cLqKM-V7g",
    // Electric Dance Mixes
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCAHlZTSgcwNNpf8LV3E6kDQ",
  ],
};

const feedCollections = [
  {
    name: "Comedy",
    feeds: [
      {
        name: "Tim Dillon Show",
        distributor: "YOUTUBE",
        channelId: "UC4woSp8ITBoYDmjkukhEhxg",
      },
      {
        name: "Tuesdays with Stories",
        distributor: "YOUTUBE",
        channelId: "UCsE74YJvPJpaquzTPMO8hAA",
      },
      {
        name: "Red Letter Media",
        distributor: "YOUTUBE",
        channelId: "UCrTNhL_yO3tPTdQ5XgmmWjA",
      },
    ],
  },
  {
    name: "Techno Music",
    feeds: [
      {
        name: "Club Music",
        distributor: "YOUTUBE",
        channelId: "UComEqi_pJLNcJzgxk4pPz_A",
      },
      {
        name: "DJ Ekki",
        distributor: "YOUTUBE",
        channelId: "UCPWBlX15fNBUw0cLqKM-V7g",
      },
      {
        name: "Electric Dance Mixes",
        distributor: "YOUTUBE",
        channelId: "UCAHlZTSgcwNNpf8LV3E6kDQ",
      },
    ],
  },
  {
    name: "Gaming",
    feeds: [
      {
        name: "Game Theorist",
        distributor: "YOUTUBE",
        channelId: "UCo_IB5145EVNcf8hw1Kku7w",
      },
      {
        name: "Josh Strife",
        distributor: "YOUTUBE",
        channelId: "UCR9X2tT0_WVfuYO17vqstlA",
      },
      {
        name: "Video Donkey",
        distributor: "YOUTUBE",
        channelId: "UCsvn_Po0SmunchJYOWpOxMg",
      },
      {
        name: "The Salt Factory",
        distributor: "YOUTUBE",
        channelId: "UCQrDV_RiKJ-cNyyMdTjzREQ",
      },
      {
        name: "KingK",
        distributor: "YOUTUBE",
        channelId: "UC18YhnNvyrU2kTwCyj9p5ag",
      },
      {
        name: "Joseph Anderson",
        distributor: "YOUTUBE",
        channelId: "UCyhnYIvIKK_--PiJXCMKxQQ",
      },
      {
        name: "Luke Stephens",
        distributor: "YOUTUBE",
        channelId: "UCe4_UPAmhz2sqorGbF8oZHA",
      },
    ],
  },
];

export default feeds;
