const funcionesJSON=require('./funcionesJSON')
const heroesController={
    index: function(req, res){
        let heroes = funcionesJSON.leerJSON()
        let texto=''
        heroes.forEach(function(valor, indice){
            texto += valor.nombre + '\n\n' + valor.profesion + '\n\n' + valor.pais + '\n\n' + valor.resenia + '\n\n'
        })
        res.send(texto)
    },
    detalle: function(req, res){
        let heroes= funcionesJSON.leerJSON()
        let heroe=heroes.filter(function(her){
            if (her.id==req.params.id){
                return her
            }
        })
        if (heroe.length==0){
            res.send('No existe')
        }else{
            res.send('Hola, mi nombre es '+ heroe[0].nombre+ " y soy "+ heroe[0].profesion)
        }
    },
    bio: function(req, res){
        let heroes = funcionesJSON.leerJSON()
        let heroe = heroes.filter(function (her) {
            if (her.id == req.params.id) {
                return her
            }
        })
        if (heroe.length == 0) {
            res.send('No encontramos al científico indicado para mostrar su biografía.')
        } else {
            if (req.params.ok!='ok'){
                res.send(heroe[0].nombre+'\n\n' + 'Lamento que no desee saber mas de mi')
            }else{
                res.send(heroe[0].nombre+ '\n\n'+ heroe[0].resenia)
            }
        }
    }
}
module.exports=heroesController;