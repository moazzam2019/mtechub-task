const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");
console.log("server");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB);
  console.log("DB connection successful V6");
}

// For Mongoose V5
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
