let users = [];

const WebSockets = (io) => {
  const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
      users.push({ userId, socketId });
  };

  const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
  };

  const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
  };

  io.on("connection", (socket) => {
    console.log("a user connected.");

    //take userId and socketId from user
    socket.on("addUser", (userId) => {
      addUser(userId, socket.id);
      io.emit("getUsers", users);
    });

    io.sockets.emit("allUsers", users);

    //send and get message
    socket.on("sendMessage", ({ senderId, receiverId, content }) => {
      const user = getUser(receiverId);
      if (user) {
        console.log("🚀 ~ file: WebSockets.js:22 ~ socket.on ~ userId:", users);
        io.to(user.socketId).emit("getMessage", {
          senderId,
          content,
        });
      } else {
        io.to().emit("getMessage", {
          senderId,
          content,
        });
      }
    });

    // when disconnect
    socket.on("disconnect", () => {
      console.log("a user disconnected!");
      removeUser(socket.id);
      io.emit("getUsers", users);
    });
  });
};

module.exports = {
  WebSockets,
};
