$( document ).ready(function() {

    $('.first').coveringBad({
      marginY : 30 ,
      marginX : 30 ,
      setX  : 200,
      setY  : 100 ,
      direction   : "vertical"
    });

    $('.second').coveringBad({
      marginY : 20 ,
      marginX : 20 ,
      setX  : 210,
      setY  : 140 ,
      direction   : "horizontal"
    });

    $('.third').coveringBad();

    $('.fourth').coveringBad({
      marginY : 210 ,
      // marginY : 155 ,
      marginX : 0 ,
      setX  : 215,
      setY  : 100 ,
      // setY  : 155 ,
      direction   : "horizontal"
    });
});
