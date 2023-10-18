const divResultat = document.getElementById("resultat");
// divResultat.innerHTML= "score";

var tabJeu = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
// var tabResultat = [
//     [5,1,2,4],
//     [7,4,3,3],
//     [8,5,6,2],
//     [6,7,8,1]
// ];
var tabResultat = generateTableauAleatoire();
var oldSelection=[];
var nbAffiche = 0;
var ready =true;
afficherTableau();

function afficherTableau(){
    var txt ="";
    for(var i=0;i < tabJeu.length ;i++){
        txt += "<div>";
        for(var j=0; j < tabJeu[i].length ;j++){
            if(tabJeu[i][j] === 0){
                txt += "<button class ='btn btn-primary m-2' style='width:120px;height:120px' onClick='verif(\""+i+"-"+j+"\")'>Show</button>";
            }else{
                txt += "<img src='"+getImage(tabJeu[i][j])+"' style='width:120px;height:120px' class='m-2'>";
            }

        }
    }
    divResultat.innerHTML = txt;
}

function getImage(valeur){
    var imgTxt= "image/";
    switch(valeur){
        case 1: imgTxt += "img1.png";
        break;
        case 2: imgTxt += "img2.png";
        break;
        case 3: imgTxt += "img3.png";
        break;
        case 4: imgTxt += "img4.png";
        break;
        case 5: imgTxt += "img5.png";
        break;
        case 6: imgTxt += "img6.png";
        break;
        case 7: imgTxt += "img7.png";
        break;
        case 8: imgTxt += "img8.png";
        break;
        default : console.log("cas non prise en compte")
    }
    return imgTxt;
}

function verif(bouton){
    if(ready){
        nbAffiche++;
        var ligne = bouton.substr(0,1);
        var colonne = bouton.substr(2,1) 
        tabJeu[ligne][colonne]=tabResultat[ligne][colonne];
        afficherTableau();

    if(nbAffiche>1){
        ready= false;
        setTimeout(() => {
            //verification
            if(tabJeu[ligne][colonne]!== tabResultat[oldSelection[0]][oldSelection[1]]){
                tabJeu[ligne][colonne]=0;
                tabJeu[oldSelection[0]][oldSelection[1]] = 0;
            }
            afficherTableau();
            ready=true;
            nbAffiche =0;
        },700)
            }else{
                oldSelection = [ligne,colonne];
            }
    } 
}

function generateTableauAleatoire(){
    var tab = [];
    var nbImagePosition=[0,0,0,0,0,0,0,0];

    for (var i=0 ; i< 4; i++){
        var ligne=[];
        for(var j =0; j < 4 ;j++){
            var fin =false;
            while(!fin){
                var randomImage = Math.floor(Math.random() * 16);
                if(nbImagePosition[randomImage] < 2){
                    ligne.push(randomImage+1);
                    nbImagePosition[randomImage]++;
                    fin=true;
                }
            } 
        }
        tab.push(ligne);
    }
    return tab;
}

var timerElt = document.getElementById("timer");
		// Diminue le compteur jusqu'à 0
		function diminuerCompteur() {
			// Conversion en nombre du texte du compteur
			var timer = Number(timerElt.textContent);    
			if (timer > 1) {
				timerElt.textContent = timer - 1;
			} else {
				// Annule l'exécution répétée
				clearInterval(intervalId);
				// Modifie le titre de la page
				//  var titre = document.getElementById("stats");
				//  titre.textContent = "TIME OVER !";    
				// Modification du titre au bout de 2 secondes
                alert("Time over!");
				
		}
       	
}
var intervalId = setInterval(diminuerCompteur, 1000);
// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)



   

