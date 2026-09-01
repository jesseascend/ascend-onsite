import { createServer } from 'http';
import handler from './dist/server/index.js';

const port = process.env.PORT || 3000;

const server = createServer(async (req, res) => {
  // Create a fetch-compatible request
  const url = new URL(req.url, `http://${req.headers.host}`);
  const fetchRequest = new Request(url, {
    method: req.method,
    headers: req.headers,
    body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
  });

  try {
    const response = await handler.fetch(fetchRequest);
    
    // Send response status
    res.writeHead(response.status, Object.fromEntries(response.headers));
    
    // Send response body
    if (response.body) {
      res.end(await response.text());
    } else {
      res.end();
    }
  } catch (error) {
    console.error('Handler error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
