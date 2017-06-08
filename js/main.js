$(function () {
    $('#perfect').click(function () {
        var html = '';
        var file = $('#fileInput')[0].files[0];
        var reader = new FileReader();
        reader.readAsBinaryString(file.slice(0, file.size));
        reader.onloadend = function (evt) {
            if (evt.target.readyState === FileReader.DONE) {
                var allRows = evt.target.result.split(/\r?\n|\r/);
                var monthName = $('#monthName').val();
                var validity = $('#validity').val().trim();
                if (validity === undefined || validity === '') {
                    for (var rowIndex = 1; rowIndex < allRows.length; rowIndex++) {
                        if (allRows[rowIndex].length > 0) {
                            var rowCells = allRows[rowIndex].split(',');
                            html += "<div class='gift_coupon'>";
                            html += "<div class='title'>Perfect Attendance Award</div>";
                            html += "<div class='month_name'>"+monthName+"</div>";
                            html += "<div class='amount'>AMOUNT: TK. 300</div>";
                            html += "<div class='name'>Name: <span>"+rowCells[1]+"</span></div>";
                            html += "<div class='pin'>Pin: <span>"+rowCells[0]+"</span> Order Id: ..................................</div>";
                            html += "<div class='code'>Coupon Code: <span>"+rowCells[2]+"</span></div>";
                            html += "<div class='validity'>Validity: "+rowCells[3]+"</div>";
                            html += "</div>";
                        }
                    }
                } else {
                    for (var rowIndex = 1; rowIndex < allRows.length; rowIndex++) {
                        if (allRows[rowIndex].length > 0) {
                            var rowCells = allRows[rowIndex].split(',');
                            html += "<div class='gift_coupon'>";
                            html += "<div class='title'>Perfect Attendance Award</div>";
                            html += "<div class='month_name'>"+monthName+"</div>";
                            html += "<div class='amount'>AMOUNT: TK. 300</div>";
                            html += "<div class='name'>Name: <span>"+rowCells[1]+"</span></div>";
                            html += "<div class='pin'>Pin: <span>"+rowCells[0]+"</span> Order Id: ..................................</div>";
                            html += "<div class='code'>Coupon Code: <span>"+rowCells[2]+"</span></div>";
                            html += "<div class='validity'>Validity: "+validity+"</div>";
                            html += "</div>";
                        }
                    }
                }
                $('body').html(html);
            }
        }
    });
});