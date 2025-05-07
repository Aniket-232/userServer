
import { Router } from "express";
import * as userController from "../controller/userController.js"
const router=Router();

router.route("/getAllData").get(userController.getAllUser);

router.route('/getSpecificUser').get(userController.getSpecificUser);

router.route('/insertUser').post(userController.insertUser);

router.route('/updateUser').put(userController.updateUser);

router.route('/deleteUser').delete(userController.deleteUser);

export {router};