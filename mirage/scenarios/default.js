export default function (server) {
  server.createList('band', 5).forEach((band) => {
    server.createList('song', 3, { band });
  });
}
