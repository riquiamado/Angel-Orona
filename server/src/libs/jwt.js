import jwt from "jsonwebtoken";
import {TOKEN_SECRET} from "../config.js"

export const generateToken = (payload) => {
    return  new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "30d",
            },
            (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            }
        );
    
    })
}