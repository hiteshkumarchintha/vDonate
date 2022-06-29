const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/userAuth", require("./routes/userAuth"));
app.use("/api/adminAuth", require("./routes/adminAuth"));
app.use("/api/agentAuth", require("./routes/agentAuth"));

app.use("/api/donations", require("./routes/donations"));
app.use("/api/donations/admin", require("./routes/adminFeed"));
app.use("/api/donations/agent", require("./routes/agentFeed"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`vDonate backend listening at http://localhost:${port}`);
});
