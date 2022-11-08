var options = 
{
    valueNames: [
      'card__headertag',
      'card__bodytitle',
      'card__bodytext',
      { data: ['id'] },
      { attr: 'src', name: 'card__img' },
      { attr: 'href', name: 'btn' },
      { attr: 'data-timestamp', name: 'timestamp' }
    ]
  };

var frontList;

  $(document).ready(function() {
    frontList = new List('notas', options);
    });

    function filtrartema(tema) 
    {
        //alert("Voy a buscar " + tema);
        if (tema != 'Todos')
        {
          frontList.filter(function(item) {
            if (item.values().card__headertag.trim() == tema)
            {
                return true;
            } 
            else {
                return false
                ;}
            });
        } 
        else
        {
          frontList.filter(function(item) {
            if (item.values().card__headertag.trim() != '')
            {
                return true;
            } 
            else {
                return false
                ;}
            });
        }
    }

var checkBox_norte = document.querySelector("#check_norte"),
path_norte = document.querySelector(".trazo_norte"),
length_norte = path_norte.getTotalLength();

path_norte.style.strokeDasharray = length_norte;
path_norte.style.strokeDashoffset = length_norte;

checkBox_norte.addEventListener("change", function(){
  if(this.checked == true){
    path_norte.classList.add("chequear");
    path_norte.style.strokeDashoffset = 0;
    document.querySelector(".RutaNorte").style.opacity = 1;
  } else {
    //path_norte.classList.remove("chequear");
    path_norte.style.strokeDashoffset = length_norte;
    document.querySelector(".RutaNorte").style.opacity = 0;
  }
});

var checkBox_sur = document.querySelector("#check_sur"),
path_sur = document.querySelector(".trazo_sur"),
length_sur = path_sur.getTotalLength();

path_sur.style.strokeDasharray = length_sur;
path_sur.style.strokeDashoffset = length_sur;

checkBox_sur.addEventListener("change", function(){
  if(this.checked == true){
    path_sur.classList.add("chequear");
    path_sur.style.strokeDashoffset = 0;

    document.querySelector(".RutaSur").style.opacity = 1;
    pasos_al_sur();
    //document.querySelector(".RutaSur").style.display = "block";
  } else {
   // path_sur.classList.remove("chequear");
    path_sur.style.strokeDashoffset = length_sur;
    dehacer_pasos_al_sur();
    document.querySelector(".RutaSur").style.opacity = 0;
    //document.querySelector(".RutaSur").classList.remove("mostrar");
    //document.querySelector(".RutaSur").style.display = "none";
  }
});

function pasos_al_sur()
{
  step1_sur = document.querySelector("#lineaCaracasTrinidad")
  step1_sur.classList.add("step1_sur");

  step2_sur = document.querySelector(".Labels_TrinidadyTobago")
  step2_sur.classList.add("step2_sur");
  step2_1_sur = document.querySelector("#puntoTrinidad")
  step2_1_sur.classList.add("step2_sur");

  step3_sur = document.querySelector("#lineaCaracasManaos")
  step3_sur.classList.add("step3_sur");

  step4_sur = document.querySelector("#puntoBoavista")
  step4_sur.classList.add("step4_sur");

  step5_sur = document.querySelector("#puntoManaos")
  step5_sur.classList.add("step5_sur");
  step5_1_sur = document.querySelector(".LabelManaos")
  step5_1_sur.classList.add("step5_sur");

  step6_sur = document.querySelector("#lineaCaracasQuito")
  step6_sur.classList.add("step6_sur");

  step7_sur = document.querySelector("#puntoBogotaSur")
  step7_sur.classList.add("step7_sur");
  step7_1_sur = document.querySelector(".LabelBogotaSur")
  step7_1_sur.classList.add("step7_sur");

  step8_sur = document.querySelector("#puntoTulcan")
  step8_sur.classList.add("step8_sur");
  step8_1_sur = document.querySelector(".LabelTulcan")
  step8_1_sur.classList.add("step8_sur");

  step9_sur = document.querySelector("#puntoQuito")
  step9_sur.classList.add("step9_sur");
  step9_1_sur = document.querySelector(".LabelQuito")
  step9_1_sur.classList.add("step9_sur");

  step10_sur = document.querySelector("#lineaQuitoCamana")
  step10_sur.classList.add("step10_sur");

  step11_sur = document.querySelector("#puntoTumbes")
  step11_sur.classList.add("step11_sur");
  step11_1_sur = document.querySelector(".LabelTumbes")
  step11_1_sur.classList.add("step11_sur");

  step12_sur = document.querySelector("#puntoLima")
  step12_sur.classList.add("step12_sur");
  step12_1_sur = document.querySelector(".LabelLima")
  step12_1_sur.classList.add("step12_sur");

  step13_sur = document.querySelector("#lineaCamanaSalta")
  step13_sur.classList.add("step13_sur");

  step14_sur = document.querySelector("#lineaCamanaMariaElena")
  step14_sur.classList.add("step14_sur");

  step15_sur = document.querySelector("#lineaMariaElenaSalta")
  step15_sur.classList.add("step15_sur");

  step16_sur = document.querySelector("#puntoSalta")
  step16_sur.classList.add("step16_sur");
  step16_1_sur = document.querySelector(".LabelSalta")
  step16_1_sur.classList.add("step16_sur");

  step17_sur = document.querySelector("#lineaMariaElenaSantiago")
  step17_sur.classList.add("step17_sur");

  step18_sur = document.querySelector("#lineaSaltaBuenosAires")
  step18_sur.classList.add("step18_sur");

  step19_sur = document.querySelector("#puntoSantiago")
  step19_sur.classList.add("step19_sur");
  step19_1_sur = document.querySelector(".LabelSantiago")
  step19_1_sur.classList.add("step19_sur");

  step20_sur = document.querySelector("#puntoBuenosAires")
  step20_sur.classList.add("step20_sur");
  step20_1_sur = document.querySelector(".LabelBuenosAires")
  step20_1_sur.classList.add("step20_sur");

}

function dehacer_pasos_al_sur()
{
  step1_sur = document.querySelector("#lineaCaracasTrinidad")
  step1_sur.classList.remove("step1_sur");

  step2_sur = document.querySelector(".Labels_TrinidadyTobago")
  step2_sur.classList.remove("step2_sur");
  step2_1_sur = document.querySelector("#puntoTrinidad")
  step2_1_sur.classList.remove("step2_sur");

  step3_sur = document.querySelector("#lineaCaracasManaos")
  step3_sur.classList.remove("step3_sur");

  step4_sur = document.querySelector("#puntoBoavista")
  step4_sur.classList.remove("step4_sur");

  step5_sur = document.querySelector("#puntoManaos")
  step5_sur.classList.remove("step5_sur");
  step5_1_sur = document.querySelector(".LabelManaos")
  step5_1_sur.classList.remove("step5_sur");

  step6_sur = document.querySelector("#lineaCaracasQuito")
  step6_sur.classList.remove("step6_sur");

  step7_sur = document.querySelector("#puntoBogotaSur")
  step7_sur.classList.remove("step7_sur");
  step7_1_sur = document.querySelector(".LabelBogotaSur")
  step7_1_sur.classList.remove("step7_sur");

  step8_sur = document.querySelector("#puntoTulcan")
  step8_sur.classList.remove("step8_sur");
  step8_1_sur = document.querySelector(".LabelTulcan")
  step8_1_sur.classList.remove("step8_sur");

  step9_sur = document.querySelector("#puntoQuito")
  step9_sur.classList.remove("step9_sur");
  step9_1_sur = document.querySelector(".LabelQuito")
  step9_1_sur.classList.remove("step9_sur");

  step10_sur = document.querySelector("#lineaQuitoCamana")
  step10_sur.classList.remove("step10_sur");

  step11_sur = document.querySelector("#puntoTumbes")
  step11_sur.classList.remove("step11_sur");
  step11_1_sur = document.querySelector(".LabelTumbes")
  step11_1_sur.classList.remove("step11_sur");

  step12_sur = document.querySelector("#puntoLima")
  step12_sur.classList.remove("step12_sur");
  step12_1_sur = document.querySelector(".LabelLima")
  step12_1_sur.classList.remove("step12_sur");

  step13_sur = document.querySelector("#lineaCamanaSalta")
  step13_sur.classList.remove("step13_sur");

  step14_sur = document.querySelector("#lineaCamanaMariaElena")
  step14_sur.classList.remove("step14_sur");

  step15_sur = document.querySelector("#lineaMariaElenaSalta")
  step15_sur.classList.remove("step15_sur");

  step16_sur = document.querySelector("#puntoSalta")
  step16_sur.classList.remove("step16_sur");
  step16_1_sur = document.querySelector(".LabelSalta")
  step16_1_sur.classList.remove("step16_sur");

  step17_sur = document.querySelector("#lineaMariaElenaSantiago")
  step17_sur.classList.remove("step17_sur");

  step18_sur = document.querySelector("#lineaSaltaBuenosAires")
  step18_sur.classList.remove("step18_sur");

  step19_sur = document.querySelector("#puntoSantiago")
  step19_sur.classList.remove("step19_sur");
  step19_1_sur = document.querySelector(".LabelSantiago")
  step19_1_sur.classList.remove("step19_sur");

  step20_sur = document.querySelector("#puntoBuenosAires")
  step20_sur.classList.remove("step20_sur");
  step20_1_sur = document.querySelector(".LabelBuenosAires")
  step20_1_sur.classList.remove("step20_sur");

}