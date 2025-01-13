let n = 100836000; // Số cần đếm số 0
let dem = 0; // Biến đếm số lượng số 0

do {
    let s = n % 10; // Lấy chữ số cuối cùng
    if (s == 0) {
        dem = dem + 1; // Tăng biến đếm nếu chữ số là 0
    }
    n = Math.floor(n / 10); // Bỏ chữ số cuối cùng
} while (n > 0);

console.log(dem); // In ra số lượng chữ số 0
