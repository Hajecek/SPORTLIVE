let users = [
    '<img class="img-fotka hokej-hrac utocnik" src="./images/loading-logo/logo.svg"><a href="index.html"><small>Lionel Andrés</small>Messi<span class="info">Pozice: Útočník<img src="./images/loading-logo/logo.svg"></span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Tým:<img class="img" src="./images/loading-logo/logo.svg"></div></div>',
    '<img class="img-fotka fotbal-tym" src="./images/loading-logo/logo.svg"><a href="index.html"><small>FC</small>Barcelona<span class="info"></span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Stadion: Camp Nou</div></div>',
    '<img class="img-fotka hokej-tym"  src="./images/loading-logo/logo.svg"><a href="index.html"><small>FC</small>Barcelona<span class="info"></span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Stadion: Camp Nou</div></div>',
    '<img class="img-fotka hokej-hrac" src="./images/loading-logo/logo.svg"><a href="index.html"><small>Richard</small>Kubita<span class="info">Pozice: Brankář</span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Tým: Volejbal Svitavy</div></div>',
    '<img class="img-fotka fotbal-tym" src="./images/loading-logo/logo.svg"><a href="index.html"><small>FC</small>Barcelona<span class="info"></span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Stadion: Camp Nou</div></div>',
    '<img class="img-fotka hokej-hrac" src="./images/loading-logo/logo.svg"><a href="index.html"><small>Richard</small>Kubita<span class="info">Pozice: Brankář</span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Tým: Volejbal Svitavy</div></div>',
    '<img class="img-fotka fotbal-tym" src="./images/loading-logo/logo.svg"><a href="index.html"><small>FC</small>Barcelona<span class="info"></span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Stadion: Camp Nou</div></div>',
    '<img class="img-fotka hokej-hrac" src="./images/loading-logo/logo.svg"><a href="index.html"><small>Richard</small>Kubita<span class="info">Pozice: Brankář</span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Tým: Volejbal Svitavy</div></div>',
    '<img class="img-fotka fotbal-tym" src="./images/loading-logo/logo.svg"><a href="index.html"><small>FC</small>Barcelona<span class="info"></span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Stadion: Camp Nou</div></div>',
    '<img class="img-fotka hokej-hrac" src="./images/loading-logo/logo.svg"><a href="index.html"><small>Richard</small>Kubita<span class="info">Pozice: Brankář</span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Tým: Volejbal Svitavy</div></div>',
    '<img class="img-fotka fotbal-tym" src="./images/loading-logo/logo.svg"><a href="index.html"><small>FC</small>Barcelona<span class="info"></span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Stadion: Camp Nou</div></div>',
    '<img class="img-fotka hokej-hrac" src="./images/loading-logo/logo.svg"><a href="index.html"><small>Richard</small>Kubita<span class="info">Pozice: Brankář</span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Tým: Volejbal Svitavy</div></div>',
    '<img class="img-fotka fotbal-tym" src="./images/loading-logo/logo.svg"><a href="index.html"><small>FC</small>Barcelona<span class="info"></span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Stadion: Camp Nou</div></div>',
    '<img class="img-fotka hokej-hrac" src="./images/loading-logo/logo.svg"><a href="index.html"><small>Richard</small>Kubita<span class="info">Pozice: Brankář</span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Tým: Volejbal Svitavy</div></div>',
    '<img class="img-fotka fotbal-tym" src="./images/loading-logo/logo.svg"><a href="index.html"><small>FC</small>Barcelona<span class="info"></span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Stadion: Camp Nou</div></div>',
    '<img class="img-fotka hokej-hrac" src="./images/loading-logo/logo.svg"><a href="index.html"><small>Richard</small>Kubita<span class="info">Pozice: Brankář</span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Tým: Volejbal Svitavy</div></div>',
    '<img class="img-fotka fotbal-tym" src="./images/loading-logo/logo.svg"><a href="index.html"><small>FC</small>Barcelona<span class="info"></span> </a><div class="pozice"><div class="narodnost">Národnost:<img class="img" src="./images/loading-logo/logo.svg"></div><div class="klub">Stadion: Camp Nou</div></div>',
   ];
   


 

   ul = document.getElementById("users-list");
   
   let render_lists = function(lists){
     let li = "";
     for(index in lists){
       li += "<li>" + lists[index] + "</li>" ;
     }
     ul.innerHTML = li;
     
   }
   
   render_lists(users);
   
   // lets filters it
   input = document.getElementById('filter_users');
   
   let filterUsers = function(event){
     keyword = input.value.toLowerCase();
     filtered_users = users.filter(function(user){
           user = user.toLowerCase();
          return user.indexOf(keyword) > -1;
      
     });
     
     
    
     
     render_lists(filtered_users);
     
     if(input.value){
       ul.style.display="";
     
       
       
     }else{
       ul.style.display="none";
       
     }
   }
   
   ul.style.display="none";
  
   
   input.addEventListener('keyup', filterUsers);
   
   

 



   

 


  
  