
// $(document).ready(function(){

    var win = 0;
    var losses = 0;
    var counter = 0;
    // var number = Math.floor(Math.random()*30+ 1);
    var numberOptions = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
    //var number = numberOptions[Math.round(Math.random())];
    var number = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    console.log(number);
    $("#randomnumber").text(number);

    function resetGames(){
        counter = 0;
        var numberOptions = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        var number = numberOptions[Math.floor(Math.random() * numberOptions.length)];
        $("#randomnumber").text(number);
        $("#totalscore").text(counter);
    };
    
    // var numOnImg = [1, 3, 2, 4];
    var images = ["assets/images/1.jpeg", "assets/images/2.jpeg", "assets/images/3.jpeg", "assets/images/4.jpeg"];
    for (var i =0; i<images.length; i++){
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-img");
        // imageCrystal.append.attr("src", "assets/images/"+(i)+".jpeg");
        // imageCrystal.attr("src", "assets/images/1.jpeg");
        imageCrystal.attr("src", images[i]);
        imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 10) + 3);
        $(".crystals").append(imageCrystal);
        }
    
$(".crystal-img").on("click", function(){

        var crystalVal = $(this).attr("data-crystalvalue");
        crystalVal = parseInt(crystalVal);
        counter += crystalVal;
        $("#totalscore").text(counter);
        if(counter === number){
            win++;
            $("#wins").text(win);
            alert("you win");
            resetGames();
            
        }else if(counter > number){
            losses++;
            $("#losses").text(losses);
            alert("you loose");
            resetGames();
        }

});



// });