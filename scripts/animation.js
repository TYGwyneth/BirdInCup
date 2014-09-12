init = function(){
      
      jarallax = new Jarallax();

      jarallax.addAnimation("#c1", [{progress:'0%', left:'-500px'},
                       {progress:'30%', left:'100px'},
                       {progress:'0%', opacity:0},
                       {progress:'30%', opacity:1}]);
      jarallax.addAnimation("#c2", [{progress:'55%', right:'-700px'},
                       {progress:'80%', right:'100px'},
                       {progress:'55%', opacity:0},
                       {progress:'80%', opacity:1}]);
      

}