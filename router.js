const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/c_Clientes', (req,res) => {
    conexion.query('select * from client',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('c_Clientes.ejs', {results:results});
        }
    })


})
router.get('/c_Productos', (req,res) => {
    conexion.query('select * from product',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('c_Productos.ejs', {results:results});
        }
    })


})

router.get('/create', (req,res)=>{
    res.render('create');
})

router.get('/edit/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM client WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{
            res.render('edit.ejs', {client:results[0]});
        }
    });
});

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM client WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/c_Clientes');
        }
    })
});

/////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/createP', (req,res)=>{
    res.render('createP');
})

router.get('/editP/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM product WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{
            res.render('editP.ejs', {product:results[0]});
        }
    });
});

router.get('/deleteP/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM product WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/c_Productos');
        }
    })
});

const crud = require('./controllers/crud')
router.post('/save',crud.save);
router.post('/update',crud.update);
router.post('/saveP',crud.saveP);
router.post('/updateP',crud.updateP);

module.exports = router;