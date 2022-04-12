function getRandom(min,max){
    return Math.floor(Math.random()*max)+min;
};

$(function (){
    $("#dinner").on("click", function (){
        switch (getRandom(0, 3)){
            case 0:
                $("#output").text($("#noodle").text());
                $('#dumpling').removeClass("active");
                $('#rice').removeClass("active");
                $('#noodle').addClass("active");
                $("#food-text").text($("#noodle").text());
                $("#food-photo").attr("src", "https://upload.wikimedia.org/wikipedia/commons/f/fc/Soy_ramen.jpg");
                break;
            case 1:
                $("#output").text($("#rice").text());
                $('#dumpling').removeClass("active");
                $('#rice').addClass("active");
                $('#noodle').removeClass("active");
                $("#food-text").text($("#rice").text());
                $("#food-photo").attr("src", "https://upload.wikimedia.org/wikipedia/commons/7/7e/Lurou_fan%28Taiwanese_cuisine%29.jpg");

                break;
            case 2:
                $("#output").text($("#dumpling").text());
                $('#dumpling').addClass("active");
                $('#rice').removeClass("active");
                $('#noodle').removeClass("active");
                $("#food-text").text($("#dumpling").text());
                $("#food-photo").attr("src", "https://upload.wikimedia.org/wikipedia/commons/a/a9/China_IMG_3150_%2829736643975%29.jpg");

                break;

        }
    })
})