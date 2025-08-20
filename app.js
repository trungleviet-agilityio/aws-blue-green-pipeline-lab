const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT || '8080', 10);

function readVersionInfo() {
  try {
    const versionPath = path.join(__dirname, 'version.json');
    if (fs.existsSync(versionPath)) {
      const raw = fs.readFileSync(versionPath, 'utf8');
      return JSON.parse(raw);
    }
  } catch (_err) {
    // ignore best-effort
  }
  return null;
}

const server = http.createServer((req, res) => {
  const version = readVersionInfo();
  const baseMessage = process.env.MESSAGE || 'Hello, AWS CodePipeline!';
  const versionText = version
    ? ` - version=${(version.commit || '').slice(0, 7)} deployedAt=${version.deployedAt || 'unknown'}`
    : '';

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${baseMessage}${versionText}\n`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
