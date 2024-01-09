const Book =  require('../models/books') //includes de models


//controller pour afficher les livres
exports.show_books = (req , res)=>{
    Book.find()//recupere nos models Book
    .then(books => {
    res.render('afficher', { books }) // Rend le fichier EJS avec les données récupérées
    .catch(error => {
        res.status(400).json({ error });
      });
});
}

//controller pour ajouter les livres 

exports.add_books = (req , res , next)=>{
    const book = new Book({
        titre: req.body.titre,
        auteur : req.body.auteur,
        pages: req.body.pages
       });
       book.save()
           .then(() => (res.render('index')))
           .catch(error => res.status(400).json({ error }));
    
        next();  
}

//controller pour homme
exports.home  = (req, res)=>{
    res.render('index')
}

//controller pour l'affichage de modification
exports.show_updates_books = (req , res)=>{
        const bookId = req.params.id;
        Book.findById(bookId)
            .then(book => { res.render('update', { book: book })})
            .catch(error => { res.status(400).json({ error })});
}

//pour la modification
exports.updates_books = (req , res) =>{
    
    const book = new Book ({
        _id: req.params.id,
        titre: req.body.titre,
        auteur: req.body.auteur,
        pages: req.body.pages
    });
    Book.updateOne({_id : req.params.id}, book)
        .then(() => { res.status(201).json({ message: 'book updated successfully!'})})
        .catch(error => res.status(400).json({ error }));
}