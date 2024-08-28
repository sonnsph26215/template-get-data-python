function openUrl(inputId) {
    var url = document.getElementById(inputId).value;
    if (url) {
        // Thêm http:// nếu người dùng không nhập
        if (!/^https?:\/\//i.test(url)) {
            url = 'http://' + url;
        }
        window.open(url, '_blank');
    } else {
        alert('Vui lòng nhập URL!');
    }
}