
import express from 'express';
import User from '../models/User.js'


const user = express.Router();

//rota para lista de usuario
user.get('/', (req, res) => res.send("Rota de usuario"));

//rota para registro de usuario 
user.post('/register', async (req, res) => {
    const { name, email, password, admin } = req.body;

    const alreadyExistUser = await User.findOne(
        { where: { email }}
    ).catch((err) => console.log("Error: ", err))

    if (alreadyExistUser) {
        console.log("Usuário existente: " + alreadyExistUser)
        return res
            .status(409)
            .json({ message: "E-mail ja utilizado por outro usuário." })
    }

    const newUser = new User({ name, email, password, admin })

    const savedUser = await newUser.save().catch((err) =>{
                                console.log("Error: ", err)
                                res
                                .status(500)
                                .json({error: "Não foi possivel cadastrar o usuário"})
                            })

    if (savedUser) {
        console.log(savedUser);
        res.json({ message: "Obrigado pelo cadastro!" })
    }

});

export default user;

