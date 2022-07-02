const { httpServer, io } = require("./server");

httpServer.listen(3000, () => console.log("Server is running on port 3000"));