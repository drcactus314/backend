const express = require("express");
const multer = require("multer");
const app = express();
const port = 3000;
require("./db");

const imageUser = require("./models/userModel");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use('/uploads', express.static('uploads'))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage, limits: { fileSize: 100000 } });

app.get("/", (req, res) => {
  console.log("hello ");
});

app.post("/image", upload.array("demo_image", 4), (req, res) => {
  try {
    res.send(req.files);
  } catch (err) {
    console.log(err);
    res.send(400);
  }
});

app.post("/user", async (req, res) => {
  try {
    const doc = await imageUser.create(req.body);
    return res.status(200).json(doc);
  } catch (err) {
    console.log(err);
    res.send(400);
  }
});

app.put("/user/:id", upload.single("demo_image"), async (req, res) => {
  try {
    const doc = await imageUser.findByIdAndUpdate(req.params.id, {
      photo: req.file.filename,
    });
    return res.status(200).json(doc);
  } catch (err) {
    console.log(err);
    res.send(400);
  }
});

app.listen(port, () => {
  console.log("Server listening on port");
});
