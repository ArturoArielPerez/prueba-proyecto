const db = require('../database/models')
const { validationResult, body } = require('express-validator');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');



module.exports = {


    vistaCart: function(req, res) {

        res.render('productCart', {
            title: 'Carrito',
            css: 'productCart.css',
            user: req.session.user
        });
    },

    agregar:function(req,res,next){        
        db.Carrito.create({ 
            id_usuario: req.session.id_usuario,
            total:Number(req.body.precio),            
            fecha: Date()
        })
        .then(result => {   
            console.log(result);       
            res.redirect('/cart');
        })
        .catch(err => {
            res.send(err)
        })        
    }
}