function Confirm(){
    var nameForm = document.nameForm;
    var name = nameForm.name.value;
    var pwd = nameForm.pwd.value;
    var outStr = "<h4> 입력확인 </h4> Name : "+ name
    document.getElementById('name').innerHTML = outStr
    outStr =" password:"+ pwd
    document.getElementById('pwd').innerHTML = outStr
    }
    