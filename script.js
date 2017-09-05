

window.onload = function(){



      // Polyfile internet explorer toutes version
      var internetExplorer=false;

      var navigateur=window.navigator.userAgent;
      if(navigateur.search('Trident')!=-1){

        var internetExplorer=true;

        var supprZone1=document.getElementById('zone1');
        var supprZone2=document.getElementById('zone2');
        var supprZone3=document.getElementById('zone3');
        var supprZone4=document.getElementById('zone4');

        supprZone4.parentNode.removeChild(supprZone4);
        supprZone3.parentNode.removeChild(supprZone3);
        supprZone2.parentNode.removeChild(supprZone2);
        supprZone1.parentNode.removeChild(supprZone1);

        alert(' le rendu graphique serait meilleur avec un autre navigateur')
      }else{};


      // on cache les divs d'internet explorer pour les autres navigateurs:
      var zone13=document.getElementById('zone13');
      var zone11=document.getElementById('zone11');
      var zone12=document.getElementById('zone12');
      zone13.style.display="none";
      zone11.style.display="none";
      zone12.style.display="none";



    // lancement initial des mouvements oiseau et cochon
      var initialisation=function(){
        // remet le mouvement du cochon a 0
        divCochon.style.left=150+'px'
        mouvement=setInterval(function(){
          if (divCochon.style.left<850+'px'){
            divCochon.style.left = parseFloat(divCochon.style.left) + 5 +'px';
            imageCochon.style.left = parseFloat(imageCochon.style.left)-88+'px';
            while(parseInt(imageCochon.style.left) < -615){
              imageCochon.style.left = -1 +'px';
            }
          }
        },20);
        annulation = setTimeout(function(){
          clearInterval(mouvement);
        },4000);


        // remet le mouvement de l'oiseau a 0
        divOiseau.style.left=1+'px'
        var mouvement3=setInterval(function(){

          divOiseau.style.left = parseFloat(divOiseau.style.left) + 8 +'px';
          imageOiseau.style.left = parseFloat(imageOiseau.style.left)-82+'px';
          while (parseInt(imageOiseau.style.left) < -820){
             imageOiseau.style.left = -1 +'px';
           }if(parseFloat(divOiseau.style.left)>1350){
               divOiseau.style.left = -400 +'px';
           }
         },100);
      }


      // relance du mouvement du cochon pour chaque niveau
      var reinitialisation=function(){
        divCochon.style.left=150+'px'
        mouvement=setInterval(function(){
          if (divCochon.style.left<850+'px'){
            divCochon.style.left = parseFloat(divCochon.style.left) + 5 +'px';
            imageCochon.style.left = parseFloat(imageCochon.style.left)-88+'px';
              while(parseInt(imageCochon.style.left) < -615){
                imageCochon.style.left = -1 +'px';
             }
           }
        },20);
        annulation = setTimeout(function(){
          clearInterval(mouvement);
        },4000);
      }



      // lancement du jeux, puis suppression du bouton et du fond
      var debutJeu=document.getElementById('button3');
      var fondDebut=document.getElementById('zone9');
      debutJeu.addEventListener('click',function(){
        debutJeu.parentNode.removeChild(debutJeu);
        fondDebut.parentNode.removeChild(fondDebut);
        initialisation();
      })



      // permet d'utiliser les outils une seule fois par niveau
      var niv1=true;
      var niv2=false;
      var niv3=false;
      var missile=true;



      // changement de monde niveau 2
      var monde2=document.getElementById('niveau2');
      monde2.addEventListener('click',function(){
        niv1=false;
        niv2=true;
        niv3=false;


        //on cache les div pour internet explorer:
        zone13.style.display="none";
        zone11.style.display="none";
        zone12.style.display="none";

          // la div de changement de niveau disparaît
        document.getElementById('niveau2').style.display="none";
        // suppression loup hache
        divLoupHache.parentNode.removeChild(divLoupHache)
        // le loup revient a droite
        div.style.left = 1+'px';
        div.style.display = 'block';
        //suppression de la maison de paille
        divMaisonPaille.parentNode.removeChild(divMaisonPaille);

        //changement de la consigne pour utiliser l'outil
        document.getElementById('outils').innerHTML = 'APPUYER SUR SUPPR POUR UTILISER LA TRONCONNEUSE';

        //changement de score
        document.getElementById('score').innerHTML = 'SCORE = 1000';

        // reinitialisation oiseau et cochon
        divOiseau.style.left=1+'px'
        reinitialisation();

        // maison de bois apparait
        divMaisonBois.style.display = 'block';
        document.getElementById('niveau2').style.display="none";

      })




      // changement de monde niveau3

      var monde3=document.getElementById('niveau3');
      monde3.addEventListener('click',function(){
        niv1=false;
        niv2=false;
        niv3=true;


          //on cache les div pour internet explorer:
          zone13.style.display="none";
          zone11.style.display="none";
          zone12.style.display="none";



          // la div de changement de niveau disparaît
          document.getElementById('niveau3').style.display="none";
          // suppression loup TRONCONNEUSE
          divLoupTronconneuse.parentNode.removeChild(divLoupTronconneuse)
          //apparition du HIBOUX
          imageHibou.style.display = 'block';
          // le loupnormal revient a droite
          div.style.left = 1+'px';
          div.style.display = 'block';
          //suppression de la maison de bois
          divMaisonBois.parentNode.removeChild(divMaisonBois);

          //changement de la consigne pour utiliser l'outils
          document.getElementById('outils').innerHTML = 'APPUYER SUR ENTREE POUR UTILISER LE BAZOOKA, A LA BONNE DISTANCE...AU NIVEAU DU HIBOU';

          //changement de score
          document.getElementById('score').innerHTML = 'SCORE = 2000';

          // reinitialisation de la position pour l'oiseau et pour le cochon
          divOiseau.style.left=1+'px'
          reinitialisation();

          // maison de brique apparait
          divMaisonBrique.style.display = 'block';
      })








      // toutes les div créés avec la variable attribuée

      var div = document.getElementById('container');  // loup
      var image = document.getElementById('contenu');

      var divCochon = document.getElementById('container1');  // cochon
      var imageCochon = document.getElementById('contenu1');

      var divMaisonPaille = document.getElementById('container2');  // maison
      var imageMaisonPaille = document.getElementById('contenu2');

      var divOiseau = document.getElementById('container3');   // oiseau
      var imageOiseau = document.getElementById('contenu3');

      var divLoupHache = document.getElementById('container4');   // loup hache
      var imageLoupHache = document.getElementById('contenu4');

      var divMaisonBois = document.getElementById('container5');   // maison de bois
      var imageMaisonBois = document.getElementById('contenu5');

      var divLoupTronconneuse = document.getElementById('container6');   // loup tronconneuse
      var imageLoupTronconneuse = document.getElementById('contenu6');

      var divMaisonBrique = document.getElementById('container7');   // maison brique
      var imageMaisonBriaq = document.getElementById('contenu7');

      var divLoupBazooka = document.getElementById('container8');   // loup bazooka
      var imageLoupBazooka = document.getElementById('contenu8');


      var imageMissile = document.getElementById('contenu9');    // missile


      var divExplosion = document.getElementById('container10');   // explosion
      var imageExplosion = document.getElementById('contenu10');

      var imageCochonRoti = document.getElementById('contenu11');    // cochon roti

      var imageHibou = document.getElementById('contenu12');    // hiboux


        // colision
      var condition=false;
      var count=0;
      var count1=0;


          // mouvement du loup

    window.onkeydown = function(event){

      var code = event.keyCode;

      switch(code){
          case 37:   // touche fleche gauche
          image.style.top = -83+'px';
              //*instructions*
          if(parseFloat(div.style.left)>1){
            div.style.left = parseInt(div.style.left) - 12 +'px';
            if(image.style.top == ''){
              image.style.top = -170+'px';
            }else{
              if(image.style.left == ''){
                image.style.left = -85 +'px';
              }else{
                image.style.left = parseInt(image.style.left) + -85 +'px';
              }
              if(parseInt(image.style.left) == -255){
                image.style.left = -85 +'px';
              }
            }
          }
          //disparition de la consigne pour utiliser les outils
          if(parseFloat(div.style.left)<770){
          document.getElementById('outils').style.display="none";
          }
          break;



          case 39:  // touche fleche droite
          image.style.top = -167+'px';
              //instructions
          if(parseFloat(div.style.left)<770){
            container.style.left = parseInt(container.style.left) + 8 +'px';
            if(image.style.top == ''){
              image.style.top = -170+'px';
            }else{
              if(image.style.left == ''){
                image.style.left = -0 +'px';
              }else{
                image.style.left = parseInt(image.style.left) + -85 +'px';
              }
              if(parseInt(image.style.left) == -255){
                image.style.left = -0 +'px';
              }
            }
          };
           //condition apparition des outils (hache tronconneuse bazooka)
          if(parseFloat(div.style.left)>770){
           document.getElementById('outils').style.display="block";
          }
          break;



          case 38:   // touche fleche du haut

          if(parseFloat(div.style.left)>=770 && niv1==true){

            divLoupHache.style.left=div.style.left;
            divLoupHache.style.display = 'block';
            div.style.display = 'none';

            if(parseFloat(imageLoupHache.style.left)==1){
             imageLoupHache.style.left= -145 +'px';
           }else{imageLoupHache.style.left= +1 +'px'}


            // la maison se casse apres 4 coups de hache
            if(count<8 ){count++}else{
            count=-1000;
            console.log('Boum');

              if(internetExplorer==true){
              zone11.style.display="block";
              }

              setInterval(function(){
                if(imageMaisonPaille.style.left> -1250+'px'){
                imageMaisonPaille.style.left = parseFloat(imageMaisonPaille.style.left)-290+'px';
                  }
                },50);

              // fuite du cochon qd la maison se casse
              mouvement=setInterval(function(){
                divCochon.style.left = parseFloat(divCochon.style.left) + 5 +'px';
                imageCochon.style.left = parseFloat(imageCochon.style.left)-88+'px';
                if(parseInt(imageCochon.style.left) < -615){
                   imageCochon.style.left = -1 +'px';
                }
              },20);
              annulation = setTimeout(function(){
                clearInterval(mouvement);
              },1400);


              // la div paille disparait apres 2 secondes
              mouvement4=setTimeout(function(){
                document.getElementById('paille').style.display="none";
              },1500);

              // changer de monde
              changerNiveau=setTimeout(function(){
                document.getElementById('outils').style.display="none";
                document.getElementById('niveau2').style.display="block";
              },3000);
            };
          };
          break;


          case 46:  // touche suppr

          if(parseFloat(div.style.left)>=770 && niv2==true){

            divLoupTronconneuse.style.left=div.style.left;
            divLoupTronconneuse.style.display = 'block';
            div.style.display = 'none';

            if(parseFloat(imageLoupTronconneuse.style.left)==1){
                 imageLoupTronconneuse.style.left= -145 +'px';
            }else{imageLoupTronconneuse.style.left= +1 +'px'}


            // la maison se casse apres 4 coups de tronconneuse
            if(count1<8){count1++}else{
                count1=-1000;
                console.log('Boum');

                if(internetExplorer==true){
                  zone13.style.display="block";
                }

                setInterval(function(){
                  if(imageMaisonBois.style.left> -1250+'px'){
                  imageMaisonBois.style.left = parseFloat(imageMaisonBois.style.left)-280+'px';
                    }
                  },100);

                // fuite du cochon qd la maison se casse
                mouvement=setInterval(function(){
                  divCochon.style.left = parseFloat(divCochon.style.left) + 5 +'px';
                  imageCochon.style.left = parseFloat(imageCochon.style.left)-88+'px';
                    if(parseInt(imageCochon.style.left) < -615){
                       imageCochon.style.left = -1 +'px';
                    }
                },20);

                annulation = setTimeout(function(){
                  clearInterval(mouvement);
                },1400);


                // la div bois disparait apres 2 secondes
                mouvement4=setTimeout(function(){
                  document.getElementById('bois').style.display="none";
                },1500);

                // changer de monde
                changerNiveau=setTimeout(function(){
                  document.getElementById('outils').style.display="none";
                  document.getElementById('niveau3').style.display="block";
                },3000);
            };
          };
          break;



         case 13:  // touche entree

         if(parseFloat(div.style.left)<200 && parseFloat(div.style.left)>100 && niv3==true && missile==true){
            divLoupBazooka.style.left=div.style.left;
            divLoupBazooka.style.display = 'block';
            div.style.display = 'none';

              // mouvement du missile
            var mouvementmissile=setInterval(function(){
                imageMissile.style.display = 'block';
                imageMissile.style.left = parseFloat(imageMissile.style.left)+3+'px';
            },20);

             var annulationmissile = setTimeout(function(){
               clearInterval(mouvementmissile);
             },3900);

              //explosion maison brique
             var explosion=setInterval(function(){
               console.log(imageMissile.style.left)
               console.log(divMaisonBrique.style.left)

              // collision missile et maison
                if(parseFloat(imageMissile.style.left)>parseFloat(divMaisonBrique.style.left)-150){
                    divExplosion.style.display = 'block';
                    divMaisonBrique.style.display = 'none';
                    divCochon.style.display = 'none';

                    var finexplosion = setTimeout(function(){
                      divExplosion.style.display = 'none';
                      imageMissile.style.display= 'none';
                    },1000);
                    var annulationexplosion = setTimeout(function(){
                      clearInterval(explosion);
                    },1000);
                }
             },2000);

             if(internetExplorer==true){
               zone12.style.display="block";
             }

            // apparition du cochonRoti
             var cochonRoti = setTimeout(function(){
                imageCochonRoti.style.display= 'block';
                document.getElementById('brique').style.display="none";
                //changement de score
                document.getElementById('score').innerHTML = 'SCORE = 10 000';
             },4000);


            var finJeu=setTimeout(function(){
               document.getElementById('zone10').style.display="block";
               divOiseau.style.display='none';
             },9000);
            missile=false;
          };
          break;


      };
    };
  };
