const gateway = require("fast-gateway");
const port = 8080;

const server = gateway({
  routes: [
    {
      prefix: "/get",
      target: "https://long-jade-armadillo-veil.cyclic.app/",
      hooks: {},
    },
    {
      prefix: "/post",
      target: "https://kind-blue-chimpanzee-suit.cyclic.app/",
      hooks: {},
    },
    {
      prefix: "/update",
      target: "https://vast-red-crane-boot.cyclic.app/",
      hooks: {},
    },
    {
      prefix: "/export",
      target: "https://giddy-pinafore-tick.cyclic.app/",
      hooks: {},
    },
  ],
});

server.get("/", (req, res) => res.send("Welcome to Api-Gateway"));

server.start(port).then((server) => {
  console.log("Api Gateway is running 8080 port");
});
