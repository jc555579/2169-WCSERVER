const express = require('express');
const app = express();

const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Multer storage with absolute path
const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/'); // absolute path
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // keep original filename
  },
});

const upload = multer({ storage: fileStorage });

// POST route for file upload
app.post('/uploads', upload.single('myFile'), (req, res) => {
  console.log(req.file);

  // Set correct MIME type based on file name
  req.file.mimetype = mime.lookup(req.file.originalname);

  // Send "file uploaded successfully" page
  res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

// GET route to display upload form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'post-index.html'));
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
