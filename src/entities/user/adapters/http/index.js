import express from 'express';
import Controller from '../../controller';
import { asyncHandler } from "@Middlwares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();


// GET ALL
router.get('/', asyncHandler(async (req, res) => {
    const data = await Controller.get();
    res.send(data);
}));

// GET BY ID
router.get('/:id', asyncHandler(async (req, res) => {
    const { query: { id } } = req;
    const data = await Controller.getById(id);
    res.send(data);
}));

// GET BY EMAIL
router.post('/getUserByEmail/', asyncHandler(async (req, res) => {
    const { body: { email } } = req;
    const [data] = await Controller.get()(email);
    res.send(data);
}));





// CREATE
router.post("/", asyncHandler(async (req, res) => {
    const { body: { email } } = req;
    const user = await Model.create(email);
    res.send(user);
}));

// DELETE
router.delete("/:id", asyncHandler(async (req, res) => {
    const { params: { id } } = req;
    await Model.remove(id);
    res.send(`User id: ${id} deleted`);
}));

// TOTAL UPDATE
router.put("/:id", async (req, res) => {
    const { params: { id }, body } = req;
    await Model.update(id, body);
    res.send(`User id: ${id} updated`);
});


export default app => app.use('/user', router);
