$(function(){

  // 이미지와 div 요소를 드래그할 수 있다
   $("img,div").draggable();

    // 이미지와 div 요소를 리사이즈 할 수 있도록 한다
    $("target,div").resizable();

    // 첫 번째 버튼에 이벤트 할당
    $("#readCSS").click(function(){
      // h1 요소의 너비를 읽고 경고 창에 표시
      alert($("#myHeader").css("height"));
    });
    // 두 번째 버튼에 이벤트 할당
    $("#setCSS").click(function(){
      // h1 요소의 너비를 320px로 설정
      $("#myHeader").css("width", "320px");
    });
});
