document.addEventListener('DOMContentLoaded', function(){

   const activity = document.querySelector('.activity');
   const intro = document.querySelector('.intro');
   const cb = function(entries, observer) {
       entries.forEach(entry => {
           if(entry.isIntersecting) {
               entry.target.classList.add('inview');
           }
       })
   }
   const io = new IntersectionObserver(cb);
   io.observe(activity);
   io.observe(intro);
   
});



