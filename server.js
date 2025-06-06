import cors from "cors"
import {createPartFromUri, createUserContent, GoogleGenAI} from "@google/genai";
import {readdirSync} from "node:fs";
import express from "express";
import {readFileSync} from "fs";
import * as fs from "node:fs";


const app = express();
const port = 3000;

const ia = new GoogleGenAI({apiKey: "AIzaSyBywJ2WjqbazG4cD6OIrXhK8URvcjyXV7s"});

app.use(express.json())
app.use(cors())

app.listen(port, ()=> {
    console.log(`Server started on port ${port}`);
  }
)

app.get("/obtenirResposta", async (req,res)=>{
  const base64AudioFile = fs.readFileSync("./public/22MoonHarvest2.mp3", {
    encoding: "base64",
  });

  const contents = [
    { text: "Fes un resum d'aquest audio" },
    {
      inlineData: {
        mimeType: "audio/mp3",
        data: base64AudioFile,
      },
    },
  ];

  const response = await ia.models.generateContent({
    model: "gemini-2.0-flash",
    contents: contents,
  });
  console.log(response.text);
  res.json(response.text);

  console.log("funciona")

})





