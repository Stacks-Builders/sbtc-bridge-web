import express from "express";
import { readdirSync } from "fs";

// Initialize the Express app
const app = express();

// Define async function to start server
async function startServer() {
  // In production, we require the .js and .css files generated by Vite in a previous build
  // const isProduction = process.env.NODE_ENV === "production";

  // if (isProduction) {
    // Serve the files from the dist directory
    app.use('/', express.static("mainnet", { index: 'index.html' }));
    app.use('/testnet', express.static("testnet", { index: 'index.html' }));

    app.get("/ping", (req, res) => {
      res.sendStatus(200);
      // res.sendFile("index.html");//, { root: "dist" });
    });

  // All other URLs should fallback to index.html
    // app.get("*", (req, res) => {
    //   res.sendFile("index.html");//, { root: "dist" });
    // });
  // } else {
  //   // In development, run vite as middleware
  //   const viteServer = await createServer({
  //     server: { middlewareMode: true }
  //   });
  //
  //   // Use vite's connect instance as middleware
  //   app.use(viteServer.middlewares);
  // }

  // Start the server on the desired port
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log('cwd', process.cwd());
    console.log('readdirSync /', readdirSync('/'));
    console.log('readdirSync .', readdirSync('.'));
    console.log('process.env', process.env);
    console.log(`Server started at http://localhost:${PORT}`);
  });
}

startServer().catch((error) => console.error("Failed starting the server:", error));