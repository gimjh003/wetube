import app from "./app.js";

const PORT = 4000;

const handleListening = () =>
  console.log(`Liostening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
