import { Router } from "express";
import * as request from './requestHandler.js'
import Auth from "./middleware/auth.js";

const router = Router()

router.route('/add').post(Auth,request.addcontact)
router.route('/get').get(Auth,request.getcontact)
router.route('/delete/:id').delete(request.deletecontact)
router.route('/delete/:id').delete(request.deletecontact)
router.route('/getone/:id').get(request.foredit)
router.route('/update/:id').patch(request.updatecontact)


router.route('/user').post(request.userRegister)
router.route('/login').post(request.userLogin)

router.route('/home').post(Auth,request.Home)
router.route('/fpwd').post(request.Forget)






export default router