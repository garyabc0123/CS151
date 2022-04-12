
$(function (){
    $("#start").change(function (){
        let beginDate = new Date($("#start").val());
        $("#table-body").empty();

        for(it = 0 ; it != topic.length ; it++){
            $("#table-body").append("<tr>\n" +
                `                        <th scope=\"row\">${it + 1}</th>\n` +
                `                        <td>${beginDate.getFullYear()}/${beginDate.getMonth() + 1}/${beginDate.getDate()}</td>\n` +
                `                        <td>${topic[it]}</td>\n` +
                "                    </tr>");
            beginDate.setDate(beginDate.getDate() + 7);
        }
    });

})