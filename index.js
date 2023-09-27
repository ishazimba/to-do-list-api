require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json()); // req body

// Routes

// Create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error("Error creating a todo:", err); // Log the error
    res.status(500).json({ error: "Internal Server Error" }); // Return an error response
  }
});

// Get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error("Error fetching todos:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE id = $1", [id]);
    if (todo.rows.length === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(todo.rows[0]);
  } catch (err) {
    console.error("Error fetching a todo:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE id =  $2 RETURNING *",
      [description, id]
    );
    if (updateTodo.rows.length === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json("TODO was updated");
  } catch (err) {
    console.error("Error updating a todo:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE id = $1", [id]);
    if (deleteTodo.rowCount === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json("Todo was deleted!");
  } catch (err) {
    console.error("Error deleting a todo:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
