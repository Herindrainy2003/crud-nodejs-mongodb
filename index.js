const express = require('express')
const methodOverride = require('method-override');
const app = new express();
const bodyParser = require('body-parser');//pour utiliser body parser (npm install body-parser --save)
const mongoose = require('mongoose')//pour utiliser mongoose
const Book = require('./models/books');//on va recuperer nos models book 
const bookroute = require('./routes/books')


app.set('view engine', 'ejs'); //pour utiliser ejs dans view
app.use(express.json()) //pour utiliser Json

// Analyser les requêtes avec des données URL encodées
app.use(bodyParser.urlencoded({ extended: true }));

// Analyser les requêtes avec des données JSON
app.use(bodyParser.json());

app.use(methodOverride('_method'));
//pour connecter a mongo
mongoose.connect('mongodb+srv://all:mongomongo@sera.50wxxcf.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true }
)
  .then(() => console.log('Connexion à MongoDB réussie !')) //si le connexion a reussi
  .catch(() => console.log('Connexion à MongoDB échouée !'));//en cas d'erreur


app.use('/' , bookroute)//includes routes
 
app.listen(8000 , ()=>{
    console.log(`listen on port 8000`)
})