const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Set the content type to HTML
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Read and serve the HTML file
  fs.readFile(path.join(__dirname, 'server.html'), 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading the HTML file');
    } else {
      res.end(data);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
