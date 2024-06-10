const corsOptions = {
    origin: [
      "http://localhost:5173",
      "https://happiness-v1.web.app",
      process.env.CLIENT_URL,
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  };

module.exports={
    corsOptions
  }