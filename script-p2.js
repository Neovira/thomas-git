class produit {
    constructor (nom, prix, pointures, stock, description) {
        this.nom = nom;
        this.prix = prix;
        this.pointures = pointures;
        this.stock = stock;
        this.description = description;
    }
    dispo (stock){
        if (this.stock > 0){
            return true;
        } else {
            return false;
        }
    }
}

let liste_point_t = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

pro_adidas1 = new produit ("Stan Smith Adidas Blanche", 90, [45, 36, 37, 38], [0, 1, 0, 5], "La plus célèbre chaussure Adidas !");
dispo_adid1 = pro_adidas1.dispo();
console.log(dispo_adid1)
console.log(document.getElementById('stock'))
console.log(pro_adidas1.prix)
console.log(pro_adidas1.pointures.indexOf(40))
let liste_point_asup = liste_point_t;
let liste_point_point = pro_adidas1.pointures;
console.log(liste_point_point)
let compt = 0;

for (let o = 0; o < liste_point_point.length; o++) {

    if (liste_point_t.indexOf(liste_point_point[compt]) != -1) {
        let pos = liste_point_asup.indexOf(liste_point_point[compt]);
        let removedItem = liste_point_asup.splice(pos, 1);
        compt ++

    }   else {
        compt ++
    }
}
console.log(liste_point_asup)


$( document ).ready(function() {
    $('#prix').text(pro_adidas1.prix);
    $('#desc').text(pro_adidas1.description);
    $('#name_product').text(pro_adidas1.nom);
    compt = 0;
    for (let a = 0; a < liste_point_asup.length; a++){
        let el = liste_point_asup[compt];
        let opt1 = document.getElementById(el);
        opt1.remove()
        compt ++
    }
    console.log("Finish")
    compt = 0;
    for (let f =0; f < liste_point_point.length; f ++) {
        el = liste_point_point[compt];
        let el_stock = pro_adidas1.stock[compt];
        console.log(el);
        console.log(el_stock);
        if (el_stock == 0) {
            $('#'+el.toString()).text(el.toString()+" - Produit indisponible")
            $('#'+el.toString()).prop("disabled", true);
            console.log(true);
        } else {
            $('#'+el.toString()).prop("disabled", false);
        }
        compt ++
    }

    

    if (dispo_adid1 != 0) {
        $("#stock").show();
        $("#rup_stock").hide();
    } else {
        $("#rup_stock").show();
        $("#stock").hide();
    }
    

    
    /*
    let p = 35;
    for (let i = 0; i < 11; i ++) {
        console.log(p)
        if (pro_adidas1.pointures.indexOf(p) != -1) {
            console.log(true);
            $('#'+p.toString()).prop("disabled", false);
        }   else {
            console.log(false)
            $('#'+p.toString()).text(p.toString()+" - Produit indisponible")
            $('#'+p.toString()).prop("disabled", true);
        }
        p = p + 1
    }
    */
});