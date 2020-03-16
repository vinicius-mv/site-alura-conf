$(document).ready(function(){

    //adiciona smooth scrolling todas ancoras
    $("a").on("click",function(event){
        if(this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            console.log(hash);
            

            $("html, body").animate({
                scrollTop: $(hash).offset().top,
            }, 300, function(){
                window.location.hash = hash;
            });
        }
    })
});