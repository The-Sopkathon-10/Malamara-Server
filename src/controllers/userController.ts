import express, { Request, Response } from "express";
import { userCreateDto } from "../interfaces/user/UserCreateDto";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import { success, fail } from "../modules/util";
import { userService } from "../services";
import { validationResult } from "express-validator";

/**
 *  @route POST /user
 *  @desc   유저 생성
 *  @access Public
 */

const createUser = async(req: Request, res: Response) => {

    const error = await validationResult(req);

    if (!error.isEmpty()) {
        return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }
    const user: userCreateDto = req.body;
    try{

        const data = await userService.createUser(user);

        // if(!data) {
        //     return res.status(statusCode.);
        // }

        res.status(statusCode.OK).send(success(statusCode.OK, message.CREATED_USER_SUCCESS, data));

    } catch(error) {
        console.log(error);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default {
    createUser
}