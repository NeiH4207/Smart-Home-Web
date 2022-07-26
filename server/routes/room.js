const express = require('express');
const router = express.Router();
const Room = require('../models/Room');
const Device = require('../models/Device');
const moment = require('moment');
const auth = require('../middlewares/auth');

// get all
router.get('/', auth(['customer', 'admin']), async (req, res) => {
    try {
        const result = await Room.find().sort({
            field: 'asc',
            _id: -1
        });
        return res.json(result);
    } catch (error) {
        res.status(400).json({
            message: err.message
        });
    }
});

// get device in room
router.get('/:id', getDeviceInRoom, (req, res) => {
    res.json(req.device);
});

//Updating one
// router.patch('/:id', getDevice, async (req, res) => {
//     if (req.body.status != null) {
//         req.device.status = req.body.status;
//     }

//     try {
//         const updatedDevice = await req.device.save();
//         res.json(updatedDevice);
//     } catch (err) {
//         res.status(400).json({
//             message: err.message
//         });
//     }
// });

//Middleware to findById Room
async function getDeviceInRoom(req, res, next) {
    let device;
    try {
        device = await Device.find({
            room_id: req.params.id
        });

        if (device == null) {
            return res.status(404).json({
                message: 'Cannot find device'
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
    req.device = device;
    next();
}

module.exports = router;
0