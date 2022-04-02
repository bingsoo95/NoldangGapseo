import { userList, mm } from '../../common/api/apiList.js';

// --------모달----------

// 모달 닫기
$('.btn-close').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
});

// 여행이름 모달
$('.travel-name').click(function (e) {
    e.preventDefault();
    $('#nameModal').modal('show');
});

// 동행자 모달
$('.invite-box').click(function (e) {
    e.preventDefault();
    $('#compModal').modal('show');
});

// 날씨 모달
$('.travel-weather').click(async function (e) {
    e.preventDefault();
    // $('#weatherModal').modal('show');
    const ddd = await mm();
   ddd.map((m) => {
    console.log("mm:::", m.nickName)
  })
});

// ---------------------------

// ------새창-------

// 여행 비용
$('.travel-cost').click(function (e) {
    e.preventDefault();
    window.open('./cost/travelCost.html');
});

// 여행 투두
$('.travel-todo').click(function (e) {
    e.preventDefault();
    window.open('./todo/travelTodo.html');
});

export function ddd() {
    console.log('dkdkd');
}

(async function (){
  const oo = await userList();
  oo.map((m) => {
      console.log("oo:::", m.nickName);   
  })
})()
