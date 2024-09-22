//xử lý sự kiện
//chuột: onclick, onmouseover, onmouseout
//bản phím: onKeyPress, onKeyUp, onKeyDown
//input: onchange
function testClick() {
    alert('test');
    console.log('abc');
}

let count = 0;
function countClick () {
    // count += 1;
    // console.log(count);

    // let t = setInterval("console.log('abc');", 2000);
    setTimeout("console.log('abc')", 2000);
}

//BOM: browser object model
// node cha: window
// node con: 
// - screen: thông tin màn hình hiển thị trình duyệt
// - location: địa chỉ, phương thức, port, ...
// - navigator: thông tin trình duyệt/phiên bản người dùng đang truy cập
// - history: lịch sử truy cập (back()/forward())
// - document: hiển thị html element cấu thành lên website

//setTimeout("xử lý/handler", thời gian(milisecond)): thực hiện tác vụ sau 1 khoảng thời gian nhất định
//setInterval("xử lý/handler", thời gian(milisecond)): lặp đi lặp lại 1 tác vụ sau 1 khoảng thời gian