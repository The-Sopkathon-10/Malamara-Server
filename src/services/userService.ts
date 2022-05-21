import { BaseResponseDTO } from "../interfaces/base/baseDTO";
import { userCreateDto } from "../interfaces/user/userCreateDto";
import User from "../models/User";

const createUser = async(user: userCreateDto): Promise<BaseResponseDTO> => {

    try {
        const newUser = new User({
            nickname: user.nickname
        });

        await newUser.save()

        const data = {
            _id: newUser.id
        };

        return data
    } catch(error) {
        console.log(error);
        throw error;
    }
}

export default {
    createUser
}