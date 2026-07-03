const express = require("express");
const cors  = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/mm", (req, res) => {
	let messages = [
    {"msg":"All the best!", "author":"Kamal Sir"},
    {"msg":"Do your best!", "author":"Pranjal Ma'am"},
    {"msg":"Wow!", "author":"Sameera"},
    {"msg":"Keep learning every day.", "author":"Rahul"},
    {"msg":"Never give up.", "author":"Sneha"},
    {"msg":"Success comes with practice.", "author":"Amit"},
    {"msg":"Believe in yourself.", "author":"Priya"},
    {"msg":"Dream big.", "author":"Rohan"},
    {"msg":"Stay focused.", "author":"Neha"},
    {"msg":"Small steps matter.", "author":"Arjun"},
    {"msg":"Coding is fun!", "author":"Meera"},
    {"msg":"Keep smiling.", "author":"Anjali"},
    {"msg":"You can do it!", "author":"Vikram"},
    {"msg":"Hard work always pays off.", "author":"Pooja"},
    {"msg":"Be positive.", "author":"Aditya"},
    {"msg":"Learn something new today.", "author":"Kiran"},
    {"msg":"Stay curious.", "author":"Nisha"},
    {"msg":"Enjoy the journey.", "author":"Deepak"},
    {"msg":"Practice makes perfect.", "author":"Sonal"},
    {"msg":"Think before you code.", "author":"Ritesh"},
    {"msg":"Be kind to everyone.", "author":"Aisha"},
    {"msg":"Mistakes help us learn.", "author":"Yash"},
    {"msg":"Keep moving forward.", "author":"Tanvi"},
    {"msg":"Every day is a new chance.", "author":"Saurabh"},
    {"msg":"Face challenges with confidence.", "author":"Komal"},
    {"msg":"Keep your goals high.", "author":"Nitin"},
    {"msg":"Work smart and hard.", "author":"Shweta"},
    {"msg":"Stay humble.", "author":"Abhishek"},
    {"msg":"Time is precious.", "author":"Divya"},
    {"msg":"Stay healthy.", "author":"Manish"},
    {"msg":"Keep your hopes alive.", "author":"Bhavna"},
    {"msg":"Believe in your dreams.", "author":"Harsh"},
    {"msg":"Knowledge is power.", "author":"Pallavi"},
    {"msg":"Take one step at a time.", "author":"Akash"},
    {"msg":"Your future is bright.", "author":"Riya"},
    {"msg":"Never stop exploring.", "author":"Varun"},
    {"msg":"Stay motivated.", "author":"Ishita"},
    {"msg":"Great things take time.", "author":"Mohit"},
    {"msg":"Learning never ends.", "author":"Sakshi"},
    {"msg":"Every effort counts.", "author":"Rakesh"},
    {"msg":"Be fearless.", "author":"Preeti"},
    {"msg":"Stay confident.", "author":"Ankit"},
    {"msg":"Keep inspiring others.", "author":"Kavita"},
    {"msg":"Make today amazing.", "author":"Ravi"},
    {"msg":"You are capable.", "author":"Shreya"},
    {"msg":"Stay patient.", "author":"Gaurav"},
    {"msg":"Be thankful.", "author":"Monika"},
    {"msg":"Keep chasing your dreams.", "author":"Ajay"},
    {"msg":"Smile and shine.", "author":"Priti"},
    {"msg":"Tomorrow will be better.", "author":"Naveen"}
];
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


