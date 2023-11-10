let tabs = document.querySelectorAll(".tab")
let viewActive = document.querySelectorAll(".views .active")

tabs.forEach((tab)=> {
    tab.addEventListener("click", function(){ // Au clic sur un onglet :

    let data = tab.dataset.open // Creation de la data


    document.querySelector(".tabs .active").classList.remove("active"); // Suppresion de la classe active d'un onglet la possédant
    this.classList.add("active") // Ajout de la classe active sur l'élement THIS donc élément cliqué
    
    document.querySelector(".views .active").classList.remove("active") // Suppresion de la class active sur la view(contenue text) 
    document.querySelector("#" + data).classList.add("active");
    // ajout de la classe active sur la view identifié avec le data correspondant à celui du click

    })
})



// CORRECTION











// SELECTION DES ELEMENTS                    C'EST UN ARRAY donc FOREACH     TAB= NOM DE CHAQUE ELEMENT DE L'ARRAY
document.querySelectorAll("div.tab-container .tabs .tab").forEach((tab)=>{
    // AU CLIC SUR UN DES ELEMENTS
    tab.addEventListener("click", function(){
        // SELECTION DE L'ELEMENT AVEC LA CLASSE ACTIVE ET JE SUPPRIME SA COULEUR ROUGE POUR SUPPRIMER LA COULEUR AVANT LE CLIC SUR UN AUTRE
        document.querySelector("div.tab-container .tabs .tab.active").classList.remove("active")
        
        // J'AJOUTE LA CLASS ACTIVE A L'ELEMENT QUE JE CLIQUE
        this.classList.add("active")

        // RECUPERER LE DATA-SET DU THIS(DONC ELEMENT SUR LEQUEL ON CLIQUE) ET JE STOCK LE DATA-SET DANS viewToOpen
        let viewToOpen = this.dataset.open;

        // COMME PRECEDEMENT JE SUPPRIME LA CLASS ACTIVE POUR ENLEVER LA COULEUR ROUGE ET TEXT DE L'ANCIEN VIEWS
        document.querySelector("div.tab-container .views .view.active").classList.remove("active")

        // Je RAJOUTE LE DATA SET STOCKé EN PLUS DU VIEW SELECTIONE PAR SON ID
        document.querySelector("#" + viewToOpen).classList.add("active");


})

}


)



/*
Dans la démo on peut voir que suivant le titre d'onglet que l'on va cliquer on aura un contenu correspondant, dans le squelette html nous avons des datasets sur les onglets et des id sur les contenus dont il faudra se servir pour pouvoir lié le bon nom d'onglet au bon contenu.

L'onglet cliqué change de couleur au clic en ayant la classe active rajouté dessus.
La div contenant du contenu apparaît quand on met la class active dessus également.
*/ 
