function in_so(a, b) {
    let dem_le = 0; 
    let dem_chan = 0; 

    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            dem_chan++; 
            dem_le++; 
        }
    }

    console.log("Số lượng số chẵn:", dem_chan);
    console.log("Số lượng số lẻ:", dem_le);
}
 in_so(2,10);