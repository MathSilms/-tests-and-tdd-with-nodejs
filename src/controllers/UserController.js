import { User } from "../app/models";


class UserController{

    async store(req, res) {
        const { name, email, password } = req.body;

        
        User.create({
            name, email, password_hash
        })
    }


}

export default new UserController