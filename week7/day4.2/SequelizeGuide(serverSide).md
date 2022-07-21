# How to run a server with Sequelize

## STEP 1

Install the necessary tools for your server:

```
npm i express pg sequelzie sequelize-cli
```

## STEP 2

```
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
```

## STEP 3

You need to require your models. Remember, the models that got created by sequelize have a direct connection to the tables you created in your database.

At the top, write your code something like this. Remember your pathing might be different

```
const {Pets, Clients} = require("../sequelize/models");
```

Now we can build our first route to READ the data

# STEP 4

Build the routes you need to make CRUD work. I will make the read route for you

```
app.get("/pets", async (req, res) => {
  const pets = await Pets.findAll();
  res.json(pets);
});
```

This uses the `Pets` model that was created and runs a function on them called `findAll`. That is a build in function in Sequelize that allows you to find all the records that are in that table.

Here are a few other ones to read about:

```
findOne()
findByPk()
destroy()
update()
create()
```

This is not a comprehensive list, so look at the Sequelize docs to find more methods that we didn't include here
