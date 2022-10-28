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
    //document.querySelector(".RutaSur").style.display = "block";
  } else {
   // path_sur.classList.remove("chequear");
    path_sur.style.strokeDashoffset = length_sur;
    document.querySelector(".RutaSur").style.opacity = 0;
    //document.querySelector(".RutaSur").classList.remove("mostrar");
    //document.querySelector(".RutaSur").style.display = "none";
  }
});