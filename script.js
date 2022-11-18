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

var menu = document.getElementById("btn_mobile");
var div_menu = document.getElementById("nav_mobile");
//menu.addEventListener("mouseover", activar_menu, false);
//menu.addEventListener("mouseout", desactivar_menu, false);
div_menu.addEventListener("mouseover", activar_menu, false);
div_menu.addEventListener("mouseout", desactivar_menu, false);
    
    function activar_menu()
    {   
      var activado = div_menu.style.display;
      if(activado == "block")
      {
        div_menu.style.display="none";
      }
      else
      {
        div_menu.style.display="block";
      }
      
    }
    
    function desactivar_menu()
    {  
      div_menu.style.display="none";
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
    pasos_al_norte();
  } else {
    //path_sur.classList.remove("chequear");
    path_norte.style.strokeDashoffset = length_norte;
    deshacer_pasos_al_norte();
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
    //document.querySelector(".Rutasur").style.display = "block";
  } else {
   // path_sur.classList.remove("chequear");
    path_sur.style.strokeDashoffset = length_sur;
    dehacer_pasos_al_sur();
    document.querySelector(".RutaSur").style.opacity = 0;
    //document.querySelector(".Rutasur").classList.remove("mostrar");
    //document.querySelector(".Rutasur").style.display = "none";
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
  step4_1_sur = document.querySelector(".LabelBoavista")
  step4_1_sur.classList.add("step4_sur");
  
  step5_sur = document.querySelector("#puntoManaos")
  step5_sur.classList.add("step5_sur");
  step5_1_sur = document.querySelector(".LabelManaos")
  step5_1_sur.classList.add("step5_sur");

  step6_sur = document.querySelector("#lineaCaracasQuito")
  step6_sur.classList.add("step6_sur");

  step7_sur = document.querySelector("#puntoBogotasur")
  step7_sur.classList.add("step7_sur");
  step7_1_sur = document.querySelector(".LabelBogotasur")
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

  step21_sur = document.querySelector("#puntoDesaguadero")
  step21_sur.classList.add("step21_sur");
  step21_1_sur = document.querySelector(".LabelDesaguadero")
  step21_1_sur.classList.add("step21_sur");

  step22_sur = document.querySelector("#puntoLaPaz")
  step22_sur.classList.add("step22_sur");
  step22_1_sur = document.querySelector(".LabelLaPaz")
  step22_1_sur.classList.add("step22_sur");

  step23_sur = document.querySelector("#puntoAtacama")
  step23_sur.classList.add("step23_sur");
  step23_1_sur = document.querySelector(".LabelAtacama")
  step23_1_sur.classList.add("step23_sur");
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
  step4_1_sur = document.querySelector(".LabelBoavista")
  step4_1_sur.classList.remove("step4_sur");

  step5_sur = document.querySelector("#puntoManaos")
  step5_sur.classList.remove("step5_sur");
  step5_1_sur = document.querySelector(".LabelManaos")
  step5_1_sur.classList.remove("step5_sur");

  step6_sur = document.querySelector("#lineaCaracasQuito")
  step6_sur.classList.remove("step6_sur");

  step7_sur = document.querySelector("#puntoBogotasur")
  step7_sur.classList.remove("step7_sur");
  step7_1_sur = document.querySelector(".LabelBogotasur")
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

  step21_sur = document.querySelector("#puntoDesaguadero")
  step21_sur.classList.remove("step21_sur");
  step21_1_sur = document.querySelector(".LabelDesaguadero")
  step21_1_sur.classList.remove("step21_sur");

  step22_sur = document.querySelector("#puntoLaPaz")
  step22_sur.classList.remove("step22_sur");
  step22_1_sur = document.querySelector(".LabelLaPaz")
  step22_1_sur.classList.remove("step22_sur");

  step23_sur = document.querySelector("#puntoAtacama")
  step23_sur.classList.remove("step23_sur");
  step23_1_sur = document.querySelector(".LabelAtacama")
  step23_1_sur.classList.remove("step23_sur");

}

function pasos_al_norte()
{
  step1_norte = document.querySelector("#lineaPtoPrincipeBrasil")
  step1_norte.classList.add("step1_norte");
  step1_1_norte = document.querySelector("#lineaPtoPrincipeSantiago")
  step1_1_norte.classList.add("step1_norte");

  step2_norte = document.querySelector(".LabelSantiagoNorte")
  step2_norte.classList.add("step2_norte");
  step2_1_norte = document.querySelector("#puntoSantiagoNorte")
  step2_1_norte.classList.add("step2_norte");

  step3_norte = document.querySelector("#LineaBrasilPeru")
  step3_norte.classList.add("step3_norte");
  step3_1_norte = document.querySelector("#lineaSantiagoLima")
  step3_1_norte.classList.add("step3_norte");

  step4_norte = document.querySelector(".LabelLimaNorte")
  step4_norte.classList.add("step4_norte");
  step4_1_norte = document.querySelector("#puntoLimaNorte")
  step4_1_norte.classList.add("step4_norte");

  step5_norte = document.querySelector("#lineaLimaQuito")
  step5_norte.classList.add("step5_norte");
  step5_1_norte = document.querySelector("#lineaHabanaQuito")
  step5_1_norte.classList.add("step5_norte");

  step6_norte = document.querySelector("#puntoLaHabana")
  step6_norte.classList.add("step6_norte");
  step6_1_norte = document.querySelector(".LabelLaHabana")
  step6_1_norte.classList.add("step6_norte");

  step7_norte = document.querySelector("#puntoQuitoNorte")
  step7_norte.classList.add("step7_norte");
  step7_1_norte = document.querySelector(".LabelQuitoNorte")
  step7_1_norte.classList.add("step7_norte");
  step7_2_norte = document.querySelector("#puntoCaracasNorte")
  step7_2_norte.classList.add("step7_norte");
  step7_3_norte = document.querySelector(".Labels_CaracasNorte")
  step7_3_norte.classList.add("step7_norte");


  step8_norte = document.querySelector("#lineaCaracasBogotaNorte")
  step8_norte.classList.add("step8_norte");
  step8_1_norte = document.querySelector("#lineaQuitoBogota")
  step8_1_norte.classList.add("step8_norte");

  step9_norte = document.querySelector("#puntoBogotaNorte")
  step9_norte.classList.add("step9_norte");
  step9_1_norte = document.querySelector(".Labels_BogotaNorte")
  step9_1_norte.classList.add("step9_norte");

  step10_norte = document.querySelector("#lineaBogotaSanAndres")
  step10_norte.classList.add("step10_norte");
  step10_1_norte = document.querySelector("#lineaBogotaNecocli")
  step10_1_norte.classList.add("step10_norte");

  step11_norte = document.querySelector("#puntoMedellin")
  step11_norte.classList.add("step11_norte");
  step11_1_norte = document.querySelector(".Labels_Medellin")
  step11_1_norte.classList.add("step11_norte");

  step12_norte = document.querySelector("#puntoNecocli")
  step12_norte.classList.add("step12_norte");
  step12_1_norte = document.querySelector(".LabelNecocli")
  step12_1_norte.classList.add("step12_norte");
  step12_2_norte = document.querySelector("#puntoSanAndres")
  step12_2_norte.classList.add("step12_norte");
  step12_3_norte = document.querySelector(".Labels_SanAndres")
  step12_3_norte.classList.add("step12_norte");


  step13_norte = document.querySelector("#regionDarien")
  step13_norte.classList.add("step13_norte");
  step13_1_norte = document.querySelector("#regionSanAndresBluefields")
  step13_1_norte.classList.add("step13_norte");

  step14_norte = document.querySelector("#puntoBluefields")
  step14_norte.classList.add("step14_norte");
  step14_1_norte = document.querySelector("#puntoMeteti")
  step14_1_norte.classList.add("step14_norte");
  step14_2_norte = document.querySelector(".LabelMeteti")
  step14_2_norte.classList.add("step14_norte");
  step14_3_norte = document.querySelector(".LabelBluefields")
  step14_3_norte.classList.add("step14_norte");

  step15_norte = document.querySelector("#lineaQuitoPanama")
  step15_norte.classList.add("step15_norte");

  step16_norte = document.querySelector("#lineaDarienManagua")
  step16_norte.classList.add("step16_norte");
  step16_1_norte = document.querySelector("#lineaBluefieldsManagua")
  step16_1_norte.classList.add("step16_norte");
  step16_2_norte = document.querySelector("#lineaHabanaManagua")
  step16_2_norte.classList.add("step16_norte");

  step17_norte = document.querySelector("#puntoManagua")
  step17_norte.classList.add("step17_norte");

  step18_norte = document.querySelector("#lineaMXporHonduras")
  step18_norte.classList.add("step18_norte");
  step18_1_norte = document.querySelector("#lineaMXporGuatemala")
  step18_1_norte.classList.add("step18_norte");

  step19_norte = document.querySelector("#lineaOaxaca")
  step19_norte.classList.add("step19_norte");
  

  step20_norte = document.querySelector("#puntoGuadalajara")
  step20_norte.classList.add("step20_norte");
  step20_1_norte = document.querySelector(".LabelGuadalajara")
  step20_1_norte.classList.add("step20_norte");

  step21_norte = document.querySelector("#lineaSaltillo")
  step21_norte.classList.add("step21_norte");
  step21_1_norte = document.querySelector("#lineaGuadalajaraTijuana")
  step21_1_norte.classList.add("step21_norte");
  step21_2_norte = document.querySelector("#lineaIrapautoCiudadJuarez")
  step21_2_norte.classList.add("step21_norte");

  step22_norte = document.querySelector("#puntoSonora")
  step22_norte.classList.add("step22_norte");
  step22_1_norte = document.querySelector(".LabelSonora")
  step22_1_norte.classList.add("step22_norte");
  step22_2_norte = document.querySelector("#puntoMonterrey")
  step22_2_norte.classList.add("step22_norte");
  step22_3_norte = document.querySelector(".LabelMonterrey")
  step22_3_norte.classList.add("step22_norte");

  step23_norte = document.querySelector("#lineaOaxacaReynosa")
  step23_norte.classList.add("step23_norte");
  step23_1_norte = document.querySelector("#lineaSaltilloValadeces")
  step23_1_norte.classList.add("step23_norte");
  step23_2_norte = document.querySelector("#lineaSaltilloNuevoLaredo")
  step23_2_norte.classList.add("step23_norte");
  step23_3_norte = document.querySelector("#lineaMonterreyReynosa")
  step23_3_norte.classList.add("step23_norte");

  step24_norte = document.querySelector("#puntoTijuana")
  step24_norte.classList.add("step24_norte");
  step24_1_norte = document.querySelector(".LabelTijuana")
  step24_1_norte.classList.add("step24_norte");
  step24_2_norte = document.querySelector("#puntoCiudadJuarez")
  step24_2_norte.classList.add("step24_norte");
  step24_3_norte = document.querySelector(".Labels_CiudadJuarez")
  step24_3_norte.classList.add("step24_norte");
  step24_4_norte = document.querySelector("#PuntoReynosa")
  step24_4_norte.classList.add("step24_norte");
  step24_5_norte = document.querySelector(".LabelReynosa")
  step24_5_norte.classList.add("step24_norte");
  step24_6_norte = document.querySelector("#puntoNuevoLaredo")
  step24_6_norte.classList.add("step24_norte");
  step24_7_norte = document.querySelector(".LabelNuevoLaredo")
  step24_7_norte.classList.add("step24_norte");
  step24_8_norte = document.querySelector("#puntoNogales")
  step24_8_norte.classList.add("step24_norte");
  step24_9_norte = document.querySelector(".LabelNogales")
  step24_9_norte.classList.add("step24_norte");

  step25_norte = document.querySelector("#lineaSonoraNogales")
  step25_norte.classList.add("step25_norte");
  step25_1_norte = document.querySelector("#lineaSaltilloRiobravo")
  step25_1_norte.classList.add("step25_norte");

  step26_norte = document.querySelector("#lineaMuroUSA")
  step26_norte.classList.add("step26_norte");
  step26_1_norte = document.querySelector("#lineaRioBravo")
  step26_1_norte.classList.add("step26_norte");

  step27_norte = document.querySelector("#regionHaitiFlorida")
  step27_norte.classList.add("step27_norte");

  step28_norte = document.querySelector("#puntoMiami")
  step28_norte.classList.add("step28_norte");
  step28_1_norte = document.querySelector(".LabelMiami")
  step28_1_norte.classList.add("step28_norte");

  step29_norte = document.querySelector(".LabelMuro")
  step29_norte.classList.add("step29_norte");
  step29_1_norte = document.querySelector(".LabelRioBravo")
  step29_1_norte.classList.add("step29_norte");

  step30_norte = document.querySelector(".LabelRioBranco")
  step30_norte.classList.add("step30_norte");
  step30_1_norte = document.querySelector("#puntoRioBranco")
  step30_1_norte.classList.add("step30_norte");

  step31_norte = document.querySelector(".LabelAssis")
  step31_norte.classList.add("step31_norte");
  step31_1_norte = document.querySelector("#puntoAssis")
  step31_1_norte.classList.add("step31_norte");

  step32_norte = document.querySelector(".LabelPasoCanoas")
  step32_norte.classList.add("step32_norte");
  step32_1_norte = document.querySelector("#puntoPasoCanoas")
  step32_1_norte.classList.add("step32_norte");
}

function deshacer_pasos_al_norte()
{
  step1_norte = document.querySelector("#lineaPtoPrincipeBrasil")
  step1_norte.classList.remove("step1_norte");
  step1_1_norte = document.querySelector("#lineaPtoPrincipeSantiago")
  step1_1_norte.classList.remove("step1_norte");

  step2_norte = document.querySelector(".LabelSantiagoNorte")
  step2_norte.classList.remove("step2_norte");
  step2_1_norte = document.querySelector("#puntoSantiagoNorte")
  step2_1_norte.classList.remove("step2_norte");

  step3_norte = document.querySelector("#LineaBrasilPeru")
  step3_norte.classList.remove("step3_norte");
  step3_1_norte = document.querySelector("#lineaSantiagoLima")
  step3_1_norte.classList.remove("step3_norte");

  step4_norte = document.querySelector(".LabelLimaNorte")
  step4_norte.classList.remove("step4_norte");
  step4_1_norte = document.querySelector("#puntoLimaNorte")
  step4_1_norte.classList.remove("step4_norte");

  step5_norte = document.querySelector("#lineaLimaQuito")
  step5_norte.classList.remove("step5_norte");
  step5_1_norte = document.querySelector("#lineaHabanaQuito")
  step5_1_norte.classList.remove("step5_norte");

  step6_norte = document.querySelector("#puntoLaHabana")
  step6_norte.classList.remove("step6_norte");
  step6_1_norte = document.querySelector(".LabelLaHabana")
  step6_1_norte.classList.remove("step6_norte");

  step7_norte = document.querySelector("#puntoQuitoNorte")
  step7_norte.classList.remove("step7_norte");
  step7_1_norte = document.querySelector(".LabelQuitoNorte")
  step7_1_norte.classList.remove("step7_norte");
  step7_2_norte = document.querySelector("#puntoCaracasNorte")
  step7_2_norte.classList.remove("step7_norte");
  step7_3_norte = document.querySelector(".Labels_CaracasNorte")
  step7_3_norte.classList.remove("step7_norte");


  step8_norte = document.querySelector("#lineaCaracasBogotaNorte")
  step8_norte.classList.remove("step8_norte");
  step8_1_norte = document.querySelector("#lineaQuitoBogota")
  step8_1_norte.classList.remove("step8_norte");

  step9_norte = document.querySelector("#puntoBogotaNorte")
  step9_norte.classList.remove("step9_norte");
  step9_1_norte = document.querySelector(".Labels_BogotaNorte")
  step9_1_norte.classList.remove("step9_norte");

  step10_norte = document.querySelector("#lineaBogotaSanAndres")
  step10_norte.classList.remove("step10_norte");
  step10_1_norte = document.querySelector("#lineaBogotaNecocli")
  step10_1_norte.classList.remove("step10_norte");

  step11_norte = document.querySelector("#puntoMedellin")
  step11_norte.classList.remove("step11_norte");
  step11_1_norte = document.querySelector(".Labels_Medellin")
  step11_1_norte.classList.remove("step11_norte");

  step12_norte = document.querySelector("#puntoNecocli")
  step12_norte.classList.remove("step12_norte");
  step12_1_norte = document.querySelector(".LabelNecocli")
  step12_1_norte.classList.remove("step12_norte");
  step12_2_norte = document.querySelector("#puntoSanAndres")
  step12_2_norte.classList.remove("step12_norte");
  step12_3_norte = document.querySelector(".Labels_SanAndres")
  step12_3_norte.classList.remove("step12_norte");


  step13_norte = document.querySelector("#regionDarien")
  step13_norte.classList.remove("step13_norte");
  step13_1_norte = document.querySelector("#regionSanAndresBluefields")
  step13_1_norte.classList.remove("step13_norte");

  step14_norte = document.querySelector("#puntoBluefields")
  step14_norte.classList.remove("step14_norte");
  step14_1_norte = document.querySelector("#puntoMeteti")
  step14_1_norte.classList.remove("step14_norte");
  step14_2_norte = document.querySelector(".LabelMeteti")
  step14_2_norte.classList.remove("step14_norte");
  step14_3_norte = document.querySelector(".LabelBluefields")
  step14_3_norte.classList.remove("step14_norte");

  step15_norte = document.querySelector("#lineaQuitoPanama")
  step15_norte.classList.remove("step15_norte");

  step16_norte = document.querySelector("#lineaDarienManagua")
  step16_norte.classList.remove("step16_norte");
  step16_1_norte = document.querySelector("#lineaBluefieldsManagua")
  step16_1_norte.classList.remove("step16_norte");
  step16_2_norte = document.querySelector("#lineaHabanaManagua")
  step16_2_norte.classList.remove("step16_norte");

  step17_norte = document.querySelector("#puntoManagua")
  step17_norte.classList.remove("step17_norte");

  step18_norte = document.querySelector("#lineaMXporHonduras")
  step18_norte.classList.remove("step18_norte");
  step18_1_norte = document.querySelector("#lineaMXporGuatemala")
  step18_1_norte.classList.remove("step18_norte");

  step19_norte = document.querySelector("#lineaOaxaca")
  step19_norte.classList.remove("step19_norte");
  

  step20_norte = document.querySelector("#puntoGuadalajara")
  step20_norte.classList.remove("step20_norte");
  step20_1_norte = document.querySelector(".LabelGuadalajara")
  step20_1_norte.classList.remove("step20_norte");

  step21_norte = document.querySelector("#lineaSaltillo")
  step21_norte.classList.remove("step21_norte");
  step21_1_norte = document.querySelector("#lineaGuadalajaraTijuana")
  step21_1_norte.classList.remove("step21_norte");
  step21_2_norte = document.querySelector("#lineaIrapautoCiudadJuarez")
  step21_2_norte.classList.remove("step21_norte");

  step22_norte = document.querySelector("#puntoSonora")
  step22_norte.classList.remove("step22_norte");
  step22_1_norte = document.querySelector(".LabelSonora")
  step22_1_norte.classList.remove("step22_norte");
  step22_2_norte = document.querySelector("#puntoMonterrey")
  step22_2_norte.classList.remove("step22_norte");
  step22_3_norte = document.querySelector(".LabelMonterrey")
  step22_3_norte.classList.remove("step22_norte");

  step23_norte = document.querySelector("#lineaOaxacaReynosa")
  step23_norte.classList.remove("step23_norte");
  step23_1_norte = document.querySelector("#lineaSaltilloValadeces")
  step23_1_norte.classList.remove("step23_norte");
  step23_2_norte = document.querySelector("#lineaSaltilloNuevoLaredo")
  step23_2_norte.classList.remove("step23_norte");
  step23_3_norte = document.querySelector("#lineaMonterreyReynosa")
  step23_3_norte.classList.remove("step23_norte");

  step24_norte = document.querySelector("#puntoTijuana")
  step24_norte.classList.remove("step24_norte");
  step24_1_norte = document.querySelector(".LabelTijuana")
  step24_1_norte.classList.remove("step24_norte");
  step24_2_norte = document.querySelector("#puntoCiudadJuarez")
  step24_2_norte.classList.remove("step24_norte");
  step24_3_norte = document.querySelector(".Labels_CiudadJuarez")
  step24_3_norte.classList.remove("step24_norte");
  step24_4_norte = document.querySelector("#PuntoReynosa")
  step24_4_norte.classList.remove("step24_norte");
  step24_5_norte = document.querySelector(".LabelReynosa")
  step24_5_norte.classList.remove("step24_norte");
  step24_6_norte = document.querySelector("#puntoNuevoLaredo")
  step24_6_norte.classList.remove("step24_norte");
  step24_7_norte = document.querySelector(".LabelNuevoLaredo")
  step24_7_norte.classList.remove("step24_norte");
  step24_8_norte = document.querySelector("#puntoNogales")
  step24_8_norte.classList.remove("step24_norte");
  step24_9_norte = document.querySelector(".LabelNogales")
  step24_9_norte.classList.remove("step24_norte");

  step25_norte = document.querySelector("#lineaSonoraNogales")
  step25_norte.classList.remove("step25_norte");
  step25_1_norte = document.querySelector("#lineaSaltilloRiobravo")
  step25_1_norte.classList.remove("step25_norte");

  step26_norte = document.querySelector("#lineaMuroUSA")
  step26_norte.classList.remove("step26_norte");
  step26_1_norte = document.querySelector("#lineaRioBravo")
  step26_1_norte.classList.remove("step26_norte");

  step27_norte = document.querySelector("#regionHaitiFlorida")
  step27_norte.classList.remove("step27_norte");

  step28_norte = document.querySelector("#puntoMiami")
  step28_norte.classList.remove("step28_norte");
  step28_1_norte = document.querySelector(".LabelMiami")
  step28_1_norte.classList.remove("step28_norte");

  step29_norte = document.querySelector(".LabelMuro")
  step29_norte.classList.remove("step29_norte");
  step29_1_norte = document.querySelector(".LabelRioBravo")
  step29_1_norte.classList.remove("step29_norte");

  step30_norte = document.querySelector(".LabelRioBranco")
  step30_norte.classList.remove("step30_norte");
  step30_1_norte = document.querySelector("#puntoRioBranco")
  step30_1_norte.classList.remove("step30_norte");

  step31_norte = document.querySelector(".LabelAssis")
  step31_norte.classList.remove("step31_norte");
  step31_1_norte = document.querySelector("#puntoAssis")
  step31_1_norte.classList.remove("step31_norte");

  step32_norte = document.querySelector(".LabelPasoCanoas")
  step32_norte.classList.remove("step32_norte");
  step32_1_norte = document.querySelector("#puntoPasoCanoas")
  step32_1_norte.classList.remove("step32_norte");
}