

var name = prompt("이름 : ",name);
var strname = "당신의 이름은 = " + name;
var birth = prompt("생년월일 : ", birth);
var strbirth = "당신의 생년월일 : " + birth;
var jender;
if(confirm("성별이 '남'이면 확인 '여'이면 취소를 누르세요.")){
    alert("남성입니다.");
    jender = "여성";
    document.getElementById('birth').innerHTML = jender;
}else{
    alert("여성입니다.");
    jender = "남성";
    document.getElementById('birth').innerHTML = strbirth;
}

document.getElementById('name').innerHTML = strname;
document.getElementById('birth').innerHTML = strbirth;

