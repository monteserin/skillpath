import express from 'express';
import Controller from '../../controller';
import {asyncHandler} from "@Middlwares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();

// GET BY ID
router.get('/:userId', asyncHandler(async (req, res) => {
    const {params: {userId}} = req;
    const data = await Controller.get({userId});
    res.send(data);
}));

router.get('/userHasThisSkill/:userId/:skillName', asyncHandler(async (req, res) => {
    const {params: {userId, skillName}} = req;
    const [data] = await Controller.get({userId, name: skillName});
    res.send(data);
}));

// ADD SKILL
router.post('/', asyncHandler(async (req, res) => {
    const {body: {userId, name}} = req;
    const data = await Controller.create({userId, name});
    res.send(data);
}));

// UPDATE SKILL VALUE
router.put('/updateSkillValue/:skillId', asyncHandler(async (req, res) => {
    const {body: {value}} = req;
    const {params: {skillId}} = req;
    // const data = await Controller.getById(skillId);
    await Controller.updateById(skillId, {value});
    res.send(200);
}));

//TOGGLE SKILL
router.put('/toggleSkillState/:userId/:name', asyncHandler(async (req, res) => {
    const {params: {userId, name}} = req;
    const data = await Controller.toggleSkill(userId, name);
    res.send(data);
}));

export default app => app.use('/skill', router);
