//js của trang jsp 1
//sẽ import và lấy ra cái mảng l của tui ở đây
import   {initArray} from './jsonjs.js';


var mydata = JSON.stringify(initArray);

$.ajax({
    type: "POST",
    url: "SortStepServlet",
    data: {name: mydata}
    ,
    //OK
    success: function (data) {
        document.getElementById("demosex2").innerHTML = ["Thuat toan : " ,(data[0].algoName)].join(' ');       
        draw2(data);      
        
        
    }
    ,
    error: function (error) {
        console.log("error", error);
    }
}
);

function draw2(data) {
var my_canvas = document.getElementById("canvas2");
var gctx = my_canvas.getContext("2d");

//cái data này lúc sau sẽ là Get và json convert
//var data = [['Bubble Sort', 140], ['Selection sort', 150], ['Quick Sort', 170], ['Heap Sort', 110], ['Insertion sort', 170]];

///////// Settings  ////////// 

var bar_width = 50;
var y_gap = 30;  // Gap below the graph 
var bar_gap = 100; // Gap between Bars including width of the bar
var x = 20; // Margin of graph from left  

var y = my_canvas.height - y_gap;

my_canvas.width = data.length * (bar_gap) + x;
////////////end of settings ////
gctx.moveTo(x - 5, y);
gctx.lineTo(my_canvas.width, y); // Base line of graph 
gctx.stroke();
/// add shadow ///
gctx.shadowColor = '#000000';
gctx.shadowOffsetX = 3;
gctx.shadowOffsetY = 3;
gctx.shadowBlur = 3;
/////////// Draw the graph ////////

for (var i = 0; i < data.length; i++) {
    gctx.shadowColor = '#ffffff'; // remove this line if you shadow on text is required
    gctx.font = '18px serif'; // font for base label showing classes 
    gctx.textAlign = 'left';
    gctx.textBaseline = 'top';
    gctx.fillStyle = '#008cf5';
    gctx.fillText(data[i].algoName, x, y + 5); // Write base text for classes 

    gctx.beginPath();
    gctx.lineWidth = 2;
    var y1 = y - data[i].number_of_step; // Coordinate for top of the Bar 
    var x1 = x;
    gctx.font = '12px serif'; // font at top of the bar 
    gctx.fillStyle = '#000000';
    gctx.fillText(data[i].number_of_step, x1, y1 - 20); // text at top of the bar 

    gctx.fillStyle = '#f52369'; // fill Colur of bar  
    gctx.shadowColor = '#000000'; // shadow color for bars 
    gctx.fillRect(x1, y1, bar_width, data[i].number_of_step);// Filled bar 

    x = x + bar_gap;

}    
/*
 * <body>
        <h1>Servlet Json Response Example jsp 2</h1>
        <!--   <a href="jsonResponse">Get Json response from server</a> -->

        <p id="demoname"></p>
        <p id="demosex"></p>
        
        <script>
            var myObj;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    myObj = JSON.parse(this.responseText);
                    $("#demoname").html(myObj.name);
                }
            };
            xmlhttp.open("GET", "jsonResponse", true);
            xmlhttp.send();
        </script>
        <!--Get ajax sử dụng để show mảng Set từ servlet xử lí-->
        <script>
            $.ajax({
                url: 'jsonResponse',
                type: "GET",
                dataType: "json",
                success: function (data) {
                    $("#demosex").html(data.gender);
                }
            });
        </script>
 */
}