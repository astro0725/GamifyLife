const express = require('express');
const router = express.Router();

// import individual route modules
const landingRoutes = require('./landing');

const signInRoutes = require('./user/signIn');
const signUpRoutes = require('./user/signUp');
const logOutRoutes = require('./user/logOut');
const deleteUserRoutes = require('./user/deleteUser');
const createTaskRoutes = require('./task/create');
const editTaskRoutes = require('./task/edit');
const deleteTaskRoutes = require('./task/delete');
const createRewardRoutes = require('./reward/create');
const editRewardRoutes = require('./reward/edit');
const deleteRewardRoutes = require('./reward/delete.js');

// use the imported routes
router.use('/', landingRoutes);

router.use('/user/signin', signInRoutes);
router.use('/user/signup', signUpRoutes);
router.use('/user/logout', logOutRoutes);
router.use('/user/delete', deleteUserRoutes);

router.use('/task/create', createTaskRoutes);
router.use('/task/create', editTaskRoutes);
router.use('/task/delete', deleteTaskRoutes);
router.use('/reward/create', createRewardRoutes);
router.use('/reward/edit', editRewardRoutes);
router.use('/reward/delete', deleteRewardRoutes);

module.exports = router;