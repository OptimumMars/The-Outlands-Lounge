const express = require('express');
const asyncHandler = require('express-async-handler');

const { Group } = require('../../db/models');

const router = express.Router();

//GET route for a group
router.get(
    ':id(\\d+)',
    asyncHandler(async (req, res) => {
        const id = req.params.id

        const group = await Group.findByPk(id);

        res.json(group)
    })
)

module.exports = router;
