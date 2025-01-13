const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Promise 1 hoàn thành'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Promise 2 hoàn thành'));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 1500, 'Promise 3 thất bại'));

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log("Tất cả promise hoàn thành:", results);
  })
  .catch(error => {
    console.error("Một promise thất bại:", error);
  });

Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    console.log("Kết quả tất cả promise (dù thành công hay thất bại):", results);
  })
  .finally(() => {
    console.log("Chương trình kết thúc xử lý.");
  });
