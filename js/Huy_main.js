function send(){
    //Kiểm tra thông tin được điền  
    var arr = document.getElementsByTagName('input');
    var name = arr[0].value;
    var subject = arr[1].value;
    if(name == "" || subject == ""){
        alert("Vui lòng điền đầy đủ tên của bạn vào ông trống !");
        return;
    }
    // Kiểm tra tính hợp lệ của email.
    var email = document.getElementById('email'); 
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(email.value)) { 
        alert('Hãy nhập địa chỉ email.\nExample@e.tlu.edu.vn');
        email.focus; 
        return false; 
    }
    else{ 
        alert('Email của bạn hợp lệ.'); 
    } 
}
