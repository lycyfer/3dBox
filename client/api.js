import express from 'express';
import cors from "cors"
import bodyParser from "body-parser"

const app = express();
const PORT = 5000

app.use(cors())
app.use(bodyParser.json())

app.post('/api/triangulate', (req, res) => {
    const { length, width, height } = req.body;
    console.log(length, width, height)
    const vertices = computeTriangulation(length, width, height);
    console.log(vertices)
    res.json({ vertices });

});
function computeTriangulation(length, width, height) {
    // Compute vertices for a box with given dimensions
    // Example: 12 triangles, 36 vertices
    return [
        0, 0, 0, length, 0, 0, length, 0, height,
        0, 0, 0, length, 0, height, 0, 0, height,
        0, 0, 0, 0, width, 0, length, width, 0,
        0, 0, 0, length, width, 0, length, 0, 0,
        0, 0, 0, 0, width, height, 0, width, 0,
        0, 0, 0, 0, width, 0, 0, 0, height,
        length, 0, 0, length, width, 0, length, width, height,
        length, 0, 0, length, width, height, length, 0, height,
        0, width, 0, 0, width, height, length, width, height,
        0, width, 0, length, width, height, length, width, 0,
        0, 0, height, length, 0, height, length, width, height,
        0, 0, height, length, width, height, 0, width, height,
    ];
}
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});