Télécharger le Repo :
    1 - L'énoncé se trouve dans le fichier fizzBuzz.js : 
        Pour tester votre code :
            - Dans votre terminal à la racine du projet lancer la commande : ```node fizzBuzz.js```

    2 - OPTIONNEL : 

    Lancer les tests du fichier test.js :

        1 - Dans votre terminal à la racine du dossier fizzBuzz lancer la commande :
        ```npm install mocha -g```

        2 - Dans le fichier fizzBuzz.js, ajouter ```module.exports``` devant la méthode fizzBuzz comme ceci: 
            ```module.exports = function fizzBuzz(val) {
	            console.log('YOUR CODE HERE');
            }```

        3 - Commentez l'appel à la méthode ```fizzBuzz(15)```
    
        5 - Lancer les tests du fichier test.js dans votre terminal à l'aide de la commande : ```mocha```