"use server";

import { prisma } from "@/lib/prisma";
import IsUrlValid from "@/services/UrlChecker";
export default async function SetNewUrl(url: string): Promise<string> {
    if(!IsUrlValid(url)){
        return "";
    }
    const newUrlPath = genereateRandomString();
    await prisma.shortUrl.create({
        data:{
            input:url,
            output:newUrlPath
        }
    })
    return newUrlPath;
}
function genereateRandomString(length:number=8):string{
    let result = "";
    const alphbet  = "zxcvbnmasdfgh6879jkqwertyuiop12345";
    for(let i=0;i<length;++i){
        const r = Math.floor(Math.random()*alphbet.length);
        result += alphbet[r];
    }
    return result;
}