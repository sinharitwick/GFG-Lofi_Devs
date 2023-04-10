const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const Feed = require("../models/Feed");

const { body, validationResult } = require("express-validator");

//ROUTE 1: Get All the feeds using: Get "/api/feed/fetchallfeeds" login required
router.get("/fetchallfeeds", protect, async (req, res) => {
  try {
    const feeds = await Feed.find({ user: req.user.id });
    res.json(feeds);
  } catch (error) {
    console.log.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//new routes
router.get("/fetchallfeed", async (req, res) => {
  try {
    const feeds = await Feed.find({});
    res.json(feeds);
  } catch (error) {
    console.log.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE 2: Get All the feeds using: POST "/api/feed/addfeed" login required
router.post(
  "/addfeed",
  protect,
  [
    // body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 character").isLength({
      min: 3,
    }),
  ],
  async (req, res) => {
    try {
      // const { title, description, tag } = req.body;
      const { description } = req.body;
      //If there are errors,return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const feed = new Feed({
        // title,
        description,
        // tag,
        user: req.user.id,
      });
      const savedFeed = await feed.save();

      res.json(savedFeed);
    } catch (error) {
      console.log.error(error.message);
      // console.log(error.message);
      res.status(500).send("Some Error occured");
    }
  }
);

//ROUTE 3: Update an existing Feed using: PUT "/api/feed/updatefeed". Login required
router.put("/updatefeed/:id", protect, async (req, res) => {
  const { description } = req.body;
  //Create a newfeed object
  const newFeed = {};
  // if (title) {
  //   newFeed.title = title;
  // }
  if (description) {
    newFeed.description = description;
  }
  // if (tag) {
  //   newFeed.tag = tag;
  // }

  //Find the feed to be updated and update it
  let feed = await Feed.findById(req.params.id);
  if (!feed) {
    return res.status(404).send("Not Found");
  }
  if (feed.user.toString() !== req.user.id) {
    return res.status(401).send("Not allowed");
  }

  feed = await Feed.findByIdAndUpdate(
    req.params.id,
    { $set: newFeed },
    { new: true }
  );
  res.json({ feed });
});

//Route 4: Delete an existing feed using: DELETE "/api/feed/deletefeed". Login required
router.delete("/deletefeed/:id", protect, async (req, res) => {
  try {
    //Find the feed to be delete and delete it
    let feed = await Feed.findById(req.params.id);
    if (!feed) {
      return res.status(404).send("Not Found");
    }

    //Allow deletion only if user owns this feed
    if (feed.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }

    feed = await Feed.findByIdAndDelete(req.params.id);
    res.json({ Success: "Feed has been deleted", feed: feed });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server Error");
  }
});

module.exports = router;
