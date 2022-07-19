require("dotenv").config();
// console.log(process.env.API_KEY);
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.SUPABASE_URL, process.env.API_KEY);
console.log(supabase);
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/create_student", async (req, res) => {
  console.log(req.body);
  const { data, error } = await supabase.from("web-06-22").insert([req.body]);
  if (data) {
    res.send(data);
  }
  if (error) {
    res.send(error);
  }
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
