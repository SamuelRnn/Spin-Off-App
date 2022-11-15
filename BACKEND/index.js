process.env.NODE_ENV !== 'production' ? require('dotenv').config() : null
const { database } = require("./src/database");
const app = require("./src/app");

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  await database.sync({
    force: true
  });
  console.log("Escuchando en el puerto " + PORT);
});
