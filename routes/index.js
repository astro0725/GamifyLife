const express = require('express');
const router = express.Router();

// import individual route modules
const landingRoutes = require('./landing');
const dashboardRoutes = require('./dashboard');

const signInRoutes = require('./user/signIn');
const signUpRoutes = require('./user/signUp');
const logOutRoutes = require('./user/logOut');
const deleteUserRoutes = require('./user/deleteUser');

const createTaskRoutes = require('./task/create');
const deleteTaskRoutes = require('./task/delete');
const completeTaskRoutes = require('./task/complete');

const createRewardRoutes = require('./reward/create');
const deleteRewardRoutes = require('./reward/delete');
const redeemRewardRoutes = require('./reward/redeem');

// use the imported routes
router.use('/', landingRoutes);
router.use('/dashboard', dashboardRoutes);

router.use('/user/signin', signInRoutes);
router.use('/user/signup', signUpRoutes);
router.use('/user/logout', logOutRoutes);
router.use('/user/delete', deleteUserRoutes);

router.use('/task/create', createTaskRoutes);
router.use('/task/delete', deleteTaskRoutes);
router.use('/task/complete', completeTaskRoutes);

router.use('/reward/create', createRewardRoutes);
router.use('/reward/delete', deleteRewardRoutes);
router.use('/reward/redeem', redeemRewardRoutes);

module.exports = router;