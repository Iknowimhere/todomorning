import jwt from 'jsonwebtoken';

async function generateToken(id){
    return await jwt.sign({id},"JwtSecret",{
        expiresIn:'1d'
    })
}

export default generateToken;