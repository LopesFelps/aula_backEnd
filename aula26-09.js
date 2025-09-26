// npm init -y
// npm install nodemon dotenv express
// npm start
// npm run dev

import express from "express";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const PORT = process.env.PORT || 4000;
const APP_NAME = process.env.APP_NAME || "API SEM NOME";
const DP_DATH = "produtos.json";

function startServer(){
    const app = express();


    montaRotas(app);

    app.listen(PORT, ()=>{
        console.log(`API NOME =${APP_NAME}`);
        console.log(`Teste em http://localhost:${PORT}`);
    });
}



function montaRotas(app){
    

    app.get("/", (req, res)=>{
        let minhaResposta = {
            ok: true,
            mensagem: "Bem vindo"
        }
        console.log(`mensagem == ${minhaResposta.mensagem}`);

        res.status(200).json(minhaResposta);
    
    });
}


startServer();