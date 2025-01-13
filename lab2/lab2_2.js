const products = [
    { code: 'ab', name: 'Son môi' },
    { code: 'ac', name: 'Sữa Rửa Mặt' },
    { code: null, name: null },
    { code: null, name: '' }
  ];
  
  function convertArrayToObject(arr) {
    // Lọc bỏ các sản phẩm không hợp lệ
    const filteredArray = arr.filter(
      item => item && item.code && item.name
    );
  
    // Chuyển đổi từ array sang object
    return Object.fromEntries(
      filteredArray.map(item => [item.code, item])
    );
  }
  
  // Chuyển đổi danh sách sản phẩm
  const newData = convertArrayToObject(products);
  
  // Xuất kết quả
  console.log("Dữ liệu sau khi xử lý:", newData);
  