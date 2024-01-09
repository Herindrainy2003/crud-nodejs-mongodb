const express =  require('express')

const router = express.Router()
const Book = require("../models/books");
const bookController = require('../controllers/books') //includes de controllers

//routes pour ajouter des livres
router.post('/add-book' , bookController.add_books);

router.get('/' , bookController.home) //route pour home
 
 //pour recuperer les donnes dans la base de donnes
router.get('/afficher', bookController.show_books)
   
//routes pour l'affichage de formulaire a  modifier des livres
router.get('/modifier/:id' , bookController.show_updates_books)

//routes pour la modification
router.put('/modifier/:id' , bookController.updates_books)

module.exports = router;//exportation de modules