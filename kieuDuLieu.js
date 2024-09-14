//KIỂM TRA KIỂU DỮ LIỆU CỦA MỘT BIẾN: typeOf

//1. Kiểu dữ liệu String: 3 cách để đánh dấu string:
// - Single quote: ' string '
// - Double quote: " string "
// - Backtick: ``: sử dụng được biến và biểu thức ${tenBien/bieuThuc}
// sử dụng \ (slash) để đánh dấu single-quote, double-quote trong string
let quote = "A từng nói \"Xyz\" "; // \" <=> "
let text = 'I am -> I\'m, Thai\'s, I\'ll'; // \' <=> '
const name = 'THAIVM2';
let backTick = `Hello ${2>3}`;

// console.log(name.length); // length: trả về độ dài của chuỗi;
// console.log(name.substring(0,3)); //substring(vị trí bắt đầu, vị trí kết thúc): cắt chuỗi
// console.log(name.toUpperCase()); // toUpperCase(): chuyển chữ thường -> in hoa 
// console.log(name.toLowerCase());// toLowerCase(): chuyển -> chữ thường

let text1 = '        Độc lập              ';
let text2 = 'Tự do';
let text3 = 'Hạnh phúc';
// console.log(text1.concat("-", text2)); //concat(): nối chuỗi
// console.log(text1.trim()); //trim(): loại bỏ khoảng trống (space) trong chuỗi


//2. Number: số (Integer/Float/Double): -(2^53-1) đến (2^53-1)
let soNguyen = 5;
let soThapPhan = 5.53;
//isNaN(): kiểm tra tham số truyền vào không phải là kiểu số? (NaN: not a number)
//nếu là kiểu số -> false;
//nếu không phải kiểu số -> true;
// console.log(isNaN(soNguyen)); //-> false
// console.log(isNaN('soNguyen')); //-> true

//Number.isInteger(): kiểm tra tham số truyền vào có phải số nguyên hay ko?
// console.log(Number.isInteger(soNguyen)); //-> true;
// console.log(Number.isInteger(soThapPhan)); //-> false;

//so sánh trong lập trình: 
// ==: so sánh tương đối: chỉ so sánh giá trị, ko quan tâm kiểu dữ liệu
// ===: so sánh tuyệt đối: so sánh cả giá trị và kiểu dữ liệu

// console.log(soThapPhan.toFixed()); //toFixed(): làm tròn số thập phân -> chuyển number thành string
// console.log(soThapPhan.toPrecision(4)); //toPrecision(): làm tròn theo số lượng số thập phân sau dấu phẩy -> chuyển number thành string

//3. BigInt: các số có giá trị nằm ngoài khoảng -(2^53-1) và (2^53-1)

//4. Boolean: true hoặc false, xử lý điều kiện if else

//5. Null và undefined;
let test1 = undefined;
let test2 = null;
console.log(test1 === test2);

//6. Array (mảng):