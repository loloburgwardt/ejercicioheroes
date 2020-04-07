const fs= require('fs');
const funcionesJSON={
    leerJSON: function(){
        let heroes=fs.readFileSync('data/science.json','utf-8');
        let heroesObj=JSON.parse(heroes);
        return heroesObj;
    }
}
module.exports= funcionesJSON;
