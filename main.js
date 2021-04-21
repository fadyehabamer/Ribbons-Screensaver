let button = document.getElementById("button")
button.addEventListener("click",()=>{
    document.body.classList.toggle("light")
})
window.addEventListener("load",()=>{
    registersw();
})

async function registersw(){
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
          });
        });
      }
}
