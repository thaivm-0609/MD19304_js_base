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

// ==: so sánh tương đối: chỉ so sánh giá trị
// ===: so sánh tuyệt đối: so sánh giá trị + kiểu dữ liệu
let a = 1;
let b = '1';

//prompt(); hàm prompt hiện popup kèm input để nhập giá trị:
a = prompt('Nhập số a:');
b = prompt('Nhập số b:');
c = prompt('Nhập số c:');
/* Giải phương trình bậc 2: ax^2 + bx + c = 0 (với a,b,c là tham số truyền vào hàm giaiPhuongTrinhBac2)*/
function giaiPhuongTrinhBac2(a,b,c) {
    //kiểm tra a,b,c == 0 hay không;
    if (a == 0) { //nếu a = 0, PT trở thành bx + c = 0;
        if (b == 0) { //nếu b = 0, PT trở thành c = 0;
            if (c == 0) {
                alert('PT vô số nghiệm');
            } else {
                alert('PT vô nghiệm');
            }
        } else {
            alert(`PT có 1 nghiệm x= ${-c/b}`);
        }
    } else {
        //tính delta:
        let delta = b*b - 4*a*c;
        if (delta < 0) {
            alert('PT vô nghiệm');
        } else if (delta == 0) {
            alert(`PT có nghiệm kép x1 = x2 = ${(-b)/(2*a)}`);
        } else {
            let x1 = (-b - Math.sqrt(delta))/(2*a);
            let x2 = (-b + Math.sqrt(delta))/(2*a);
            alert(`PT có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
        }
    }
}

giaiPhuongTrinhBac2(a,b,c);
