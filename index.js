const express = require("express");
const cors  = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/mm", (req, res) => {
	let messages = [{"all the best": "kamal sir"}, {"do u best" : "prranjal mam"}, {"wow": "sameera"}];
	let r = Math.floor(Math.random() * messages.length);
	let msg = messages[r];
	res.send({"msg":msg});
});

app.get("/about", (req, res) => {
	let msg = "App by Kamal Sir - 8369084928";
	res.send({"msg":msg});
});

app.listen(9000, () => {
	console.log("ready @ 9000");
});


