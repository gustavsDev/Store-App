import express from "express";
import { getClient } from "../middleware/getClient.js";
const router = express.Router();
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.IMAGE_DIR)
  },
  filename: function (req, file, cb) {
    const extArray = file.mimetype.split("/");
    const extension = extArray[extArray.length - 1];
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + "." + extension;
    cb(null, uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

router.get("/", async (req, res) => {
  const client = await getClient();
  const data = await client.query(`SELECT * FROM items;`);
  res.json(data.rows);
  await client.end();
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const client = await getClient();
  if(id == (undefined || null)) {res.json({error: "id undefined or null"}); return;}

  const data = await client.query(`SELECT * FROM items WHERE id=${id};`);
  res.json(data.rows);
  await client.end();
});

router.post("/", upload.single("image"), async (req, res) => {
  const { title, description, price, discount, amount } = req.body;
  const image = req.file.filename;
  const client = await getClient();

  if(title === undefined || description === undefined || price === undefined || discount === undefined || amount === undefined) {
    res.json("Undefined values!");
    return;
  }

  const data = await client.query(`INSERT INTO items(title, description, price, discount, amount, image) VALUES ('${title}', '${description}', ${price}, ${discount}, ${amount}, '${image}');`);
  res.json("Data inserted!");
  await client.end();
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const client = await getClient();
  if(id == (undefined || null)) {res.json({error: "id undefined or null"}); return;}

  const data = await client.query(`DELETE FROM items WHERE id=${id};`);
  res.json(data.rows);
  await client.end();
});

export { router as default };
