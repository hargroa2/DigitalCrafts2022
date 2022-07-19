app.listen -> to this port, they are listening for requests and will hit your routes like app.get("/") or app.post("/create_user")

app.use(Express.json) allows any requests coming in to be converted to JSON and comes in before it hits your route. Aytime we use app.use, we are using middleware. It's a tool or stuff that runs before your request becomes a response. It intercepts requests and responses

app.use(cors()) will alleviate the cors error you get with frontend APIs

app.engine -> telling our server that we have to render our HTML files using this tool. You will accept HTML and to render out you will use es6Renderer

app.set -> it will be located in a file called templates, and will have all HTML files.
