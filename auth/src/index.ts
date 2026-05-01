import express from "express";

const app = express();

// app.get('/api/users/currentuser', (req, res) => {
//     res.json({ user: 'Alex' });
// });

app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ user: id });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});