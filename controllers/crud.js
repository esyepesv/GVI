//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const name = req.body.name;
    const sector = req.body.sector;
    const id_visita = req.body.id_visita;

    //console.log(name+" "+sector+" "+id_visita);
    conexion.query('INSERT INTO client SET ?',{nombre:name, sector:sector, dia_visita:id_visita}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);
            res.redirect('/c_Clientes');
        }
});
};
//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const sector = req.body.sector;
    const id_visita = req.body.id_visita;
    conexion.query('UPDATE client SET ? WHERE id = ?',[{nombre:name, sector:sector, dia_visita:id_visita}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/c_Clientes');
        }
});
};
/////////////////////////////////////////////////////////////////////////////////////
exports.saveP = (req, res)=>{
    const name = req.body.name;
    const Precio = req.body.Precio;
    const Precio_PVP = req.body.Precio_PVP;
    const Ganancia = req.body.Ganancia;
    const P_Ganancia = req.body.P_Ganancia;
    const Existencias = req.body.Existencias;

    //console.log(name+" "+sector+" "+id_visita);
    conexion.query('INSERT INTO product SET ?',{nombre:name, Precio:Precio, Precio_PVP:Precio_PVP,
        Ganancia:Ganancia, P_Ganancia:P_Ganancia, Existencias:Existencias}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);
            res.redirect('/c_Productos');
        }
});
};

//ACTUALIZAR un REGISTRO
exports.updateP = (req, res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const Precio = req.body.Precio;
    const Precio_PVP = req.body.Precio_PVP;
    const Ganancia = req.body.Ganancia;
    const P_Ganancia = req.body.P_Ganancia;
    const Existencias = req.body.Existencias;
    conexion.query('UPDATE product SET ? WHERE id = ?',[{nombre:name, Precio:Precio, Precio_PVP:Precio_PVP,
        Ganancia:Ganancia, P_Ganancia:P_Ganancia, Existencias:Existencias}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/c_Productos');
        }
});
};