1. Install express-session
2. Install cookie-parser

const session = require("express-session");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(session({
secret: "secret",
resave: false,
saveUnintialized: true,
cookie: {
maxAge: 2592000000,
<!-- Runs in milliseconds -->
}
}));

<!-- This is what allows you to sign the cookie and make it valid for the server. You also want the cookie to run out since it can't stay on forever via resave being false -->
