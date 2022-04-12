
function loadPage(str){
    $("#main-div").empty();
    switch (str){
        case "random-button":
            $("#main-div").append("<iframe src=\"randomPage/random.html\"  width=\"100%\" height=\"100%\" style=\"overflow:hidden;height:100%;width:100%;border: 0px\" ></iframe>");
            break;
        case "schedule-button":
            $("#main-div").append("<iframe src=\"schedule/index.html\"  width=\"100%\" height=\"100%\" style=\"overflow:hidden;height:100%;width:100%;border: 0px\" ></iframe>");
            break;
        case "heart-test-button":
            $("#main-div").append("<iframe src=\"heartTest/index.html\"  width=\"100%\" height=\"100%\" style=\"overflow:hidden;height:100%;width:100%;border: 0px\" ></iframe>");

            break;
        case "game-button":
            $("#main-div").append("<iframe src=\"game/index.html\"  width=\"100%\" height=\"100%\" style=\"overflow:hidden;height:100%;width:100%;border: 0px\" ></iframe>");
            break;
        case "youtube-button":
            $("#main-div").append("<iframe src=\"youtu/index.html\"  width=\"100%\" height=\"100%\" style=\"overflow:hidden;height:100%;width:100%;border: 0px\" ></iframe>");

            break;
    }

}