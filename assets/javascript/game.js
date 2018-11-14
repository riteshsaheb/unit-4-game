
// $(document).ready(function(){

    var win = 0;
    var losses = 0;
    var counter = 0;
    // var number = Math.floor(Math.random()*30+ 1);
    var numberOptions = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
    //var number = numberOptions[Math.round(Math.random())];
    number = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    var images = ["assets/images/1.jpeg", "assets/images/2.jpeg", "assets/images/3.jpeg", "assets/images/4.jpeg"];
    console.log(number);
    $("#randomnumber").text(number);

    function resetGames(){
        counter = 0;
        number = numberOptions[Math.floor(Math.random() * numberOptions.length)];
        $("#randomnumber").text(number);
        $("#totalscore").text(counter);
        (".crystals").empty();
        // crystalImage();
    };
    
    
    //function crystalImage(){
    for (var i =0; i<images.length; i++){
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-img");
        // imageCrystal.append.attr("src", "assets/images/"+(i)+".jpeg");
        // imageCrystal.attr("src", "assets/images/1.jpeg");
        imageCrystal.attr("src", images[i]);
        imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 10) + 3);
        $(".crystals").append(imageCrystal);
        }
    //};
//crystalImage();
$(".crystal-img").on("click", function(){

        var crystalVal = $(this).attr("data-crystalvalue");
        crystalVal = parseInt(crystalVal);
        counter += crystalVal;
        $("#totalscore").text(counter);
        if(counter === number){
            win++;
            $("#wins").text(win);
            $("#results").text("You Win!")
            resetGames();
            // $(".crystals").empty();
        }
        if(counter > number){
            losses++;
            $("#losses").text(losses);
            $("#results").text("You Lost!")
            resetGames();
        }

});



// });