import express from "express";

const app = express();

let user_goal = "Learn Docker";

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>My Course Goal</h2>
          <h3>${user_goal}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Course Goal!</label>
            <input type="text" name="goal">
          </div>
          <button>Set Course Goal</button>
        </form>
      </body>
    </html>
  `);
});

app.post("/store-goal", (req, res) => {
  console.log(req.body);
  const entered_goal = req.body.goal;
  user_goal = entered_goal;
  res.redirect("/");
});

app.listen(80);
