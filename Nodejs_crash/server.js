import http from 'http';
import url from 'url';
import path from 'path';
import fs from 'fs/promises'
import { error } from 'console';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname , __filename);
const PORT = process.env.PORT;

const server = http.createServer(async (req, res) => {
try {
    if (req.method == "GET"){
        let filepath;
   if (req.url == "/"){
        filepath = path.join(__dirname, 'public', 'index.html')
   }
    else if (req.url == "/about"){
        filepath = path.join(__dirname, "public", "about.html")
   }
   else {
    throw new Error('Not Found')
   }
   const data = await fs.readFile(filepath);
   res.setHeader('Content-type', 'text/html');
   res.write(data);
   res.end();
}
}
catch(error) {
    res.writeHead(500, ( 'Content-type', 'Text/html'))
    res.end("Server error")
}
});

server.listen(PORT, () => {
    console.log("Serve is running on port 8000");
});