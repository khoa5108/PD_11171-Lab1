import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    details: {
        marginLeft: 80,
        alignItems: "center", // Căn giữa nội dung trong details
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    text: {  
        fontSize: 18,  
        color: "white",  
        fontWeight: "bold",  
    },
    firstLine: {
        fontSize: 30,              // Tăng cỡ chữ cho dòng "Discover"
        fontWeight: "bold",        // In đậm
        color: "white",            // Màu chữ trắng
    },
    secondLine: {
        fontSize: 30,              // Cỡ chữ cho dòng "World with us"
        fontWeight: "normal",      // Không in đậm
        color: "white",            // Màu chữ trắng
    },
    textStyle: {
        fontFamily: 'Poppins-Bold.ttf', // Thêm dấu phẩy để tránh lỗi
        fontSize: 30,                 // Kích thước chữ nhỏ hơn cho văn bản phụ
        color: "black",
        textAlign: "center",
        marginTop: 10,                // Thêm khoảng cách với các phần tử khác
    },
    button: {
        backgroundColor: "#FF6347", // Màu nền cho nút (tomato)
        paddingVertical: 15,       // Thêm không gian trên dưới của nút
        paddingHorizontal: 40,     // Thêm không gian trái phải
        borderRadius: 30,          // Bo góc nút
        marginTop: 20,             // Khoảng cách giữa nút và văn bản trên
        alignItems: "center",      // Căn giữa văn bản trong nút
    },
    buttonText: {
        fontSize: 18,              // Kích thước chữ trong nút
        color: "white",            // Màu chữ trong nút
        fontWeight: "bold",        // In đậm chữ trong nút
    },
});
