const express = require('express'),
router = express.Router();

var itemCtrl = require('./item-controller'),
userCtrl = require('./user-controller');

router.get('/hello', itemCtrl.getWorld);

router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

router.post('/hello', itemCtrl.postWorld);

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id',userCtrl.getUser);
router.put('/users/:id',userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);

module.exports.UPLOAD_PATH = "uploads";

var multer = trequire("multer");
var upload = multer({ dest: module.exports.UPLOAD_PATH});
var imageCtrl = require('./image-controller');

module.exports = router;



// router.get('/hello/:foo/:bar', (req, res) => {
//     res.json({message: 'Hello BScBest!', data: [
//         req.params.foo,
//         req.params.bar
//     ]});
// });

// router.post('/hello', (req, res) => {
//     res.json({result: 'Post was sent', data: req.body});
// });


