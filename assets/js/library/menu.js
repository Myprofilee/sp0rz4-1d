$(function () {
    var bar = '';
        bar += '<footer id="footer" class="footer">';

            $("#menu").html(bar);
        });
        
        function getValueByName(name) {
            var url = document.getElementById('links').getAttribute('src');
            var param = new Array();
            if (url.indexOf("?") != -1) {
                var source = url.split("?")[1];
                items = source.split("&");
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    var parameters = item.split("=");
                    if (parameters[0] == "id") {
                        return parameters[1];
                    }
                }
            }
        }