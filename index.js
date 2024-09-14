// comment 1 dòng

/* cách 
để 
comment 
tên 
nhiều 
dòng */

//dòng lệnh javascript phải kết thúc bằng dấu ;

//khai báo biến let/var/const tenBien = gia-tri;

let name = 'abc';
var age = 19;
const pi = 3.14; //const để khai báo hằng số, giá trị không thay đổi

age = 21;

//khai báo/khởi tạo hàm: function tenHam() { xử lý logic }
function tinhTong(a, b) { //hàm có tham số đầu vào
    console.log(a+b); //ko có return: hàm không có giá trị trả về
    // return a+b; //hàm có giá trị trả về
}

//thực thi/chạy hàm: tenHam();
// tinhTong(4,5);

/*Cấu trúc điều khiển: 
    if (điều-kiện-1) {
        xử lý logic nếu điều-kiện-1 == true;
    } else if (điều-kiện-2) {
        xử lý logic nếu điều-kiện-1 == false và điều-kiện-2 == true;
    } else {
        xử lý logic nếu cả 2 điều kiện == false;
    }
*/

/* Giải phương trình bậc 2: ax^2 + bx + c = 0 (với a,b,c là tham số truyền vào hàm giaiPhuongTrinhBac2)*/
