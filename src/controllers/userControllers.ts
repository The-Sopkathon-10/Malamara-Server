import express, { Request, Response } from "express";
import { userCreateDto } from "../interfaces/user/UserCreateDto";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import { success, fail } from "../modules/util";
import userService from "../services/userService";


const createUser = async(req: Request, res: Response) => {
    const user = req.body;
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