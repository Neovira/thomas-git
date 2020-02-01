$( document ).ready(function() {
    let compt = 0;
    let liste_point_t = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
    let liste_point_asup = liste_point_t;

    


    class produit {
        constructor (nom, prix, pointures, stock, description, num) {
            this.nom = nom;
            this.prix = prix;
            this.pointures = pointures;
            this.stock = stock;
            this.description = description;
            this.num = num;
            
        }
        

        liste_asup (pointures, stock){
            compt = 0;
            liste_point_asup = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
            for (let o = 0; o < this.pointures.length; o++) {
    
                if (liste_point_t.indexOf(this.pointures[compt]) != -1) {
                    let pos = liste_point_asup.indexOf(this.pointures[compt]);
                    let removedItem = liste_point_asup.splice(pos, 1);
                    compt ++
            
                }   else {
                    compt ++
                }
            }
            return liste_point_asup;
        }
         
        suppr (){
            let liste_p_asup = this.liste_asup();

            compt = 0;
            for (let a = 0; a < liste_p_asup.length; a++){
                let el = liste_p_asup[compt];
                let opt1 = document.getElementById('p'+this.num+'_'+el);
                opt1.remove()
                compt ++
            }

            compt = 0;
            for (let f =0; f < this.pointures.length; f ++) {
                let el = this.pointures[compt];
                let el_stock = this.stock[compt];
                if (el_stock == 0) {
                    $('#p'+this.num.toString()+'_'+el.toString()).text(el.toString()+" - Rupture de stock")
                    $('#p'+this.num.toString()+'_'+el.toString()).prop("disabled", true);
                } else { if (el_stock ==1 ){
                        $('#p'+this.num.toString()+'_'+el.toString()).prop("disabled", false);
                        $('#p'+this.num.toString()+'_'+el.toString()).text(el.toString()+" - Il ne reste que 1 élément en stock !")
                    }   else {
                        $('#p'+this.num.toString()+'_'+el.toString()).prop("disabled", false);
                    }  
                }
                compt ++
            }
        }

        name_prod(num, prix, description, nom){
            $('#p'+this.num.toString()+'_prix').text(this.prix);
            $('#p'+this.num.toString()+'_desc').text(this.description);
            $('#p'+this.num.toString()+'_name_product').text(this.nom);
        }
            
        
    }
    
    pro_adidas1 = new produit ("Stan Smith Adidas Blanche", 90, [39, 40, 41, 42, 43, 37, 35], [8, 12, 1, 4, 3, 0, 1], "La plus célèbre chaussure Adidas est maintenant disponible sur votre site préféré !", 1);
    pro_nike1 = new produit ("Nike test", 156, [40, 41, 42, 43], [1, 0, 0, 2], "La plus confortable des chaussures, c'est la Nike", 2);

    /*pro_adidas1.liste_asup();*/
    pro_adidas1.suppr();
    pro_adidas1.name_prod();

    /*pro_nike1.liste_asup();*/
    pro_nike1.suppr();
    pro_nike1.name_prod();

});