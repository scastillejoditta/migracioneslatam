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