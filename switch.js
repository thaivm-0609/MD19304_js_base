//Người dùng nhập vào a,b và phép tính
//alert ra kết quả phép tính

//parseInt/parseFloat để ép kiểu về số
let a = parseInt(prompt('Nhập giá trị a:'));
let b = parseInt(prompt('Nhập giá trị b:'));
let phepTinh = prompt('Nhập phép tính: ');

if (isNaN(a) || isNaN(b)) {
    alert('a, b phải là số');
};

switch (phepTinh) {
    case '+':
        alert(`${a+b}`);
        break;
    case '-':
        alert(`${a - b}`);
        break;
    case '*':
        alert(`${a * b}`);
        break;
    case '/':
        alert(`${a / b}`);
        break;
    case '^':
        alert(`${a ^ b}`);
        break;
    default: 
        alert('Phép tính không hợp lệ');
}