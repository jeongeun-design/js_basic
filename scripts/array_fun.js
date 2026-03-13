// array_fun.js
// 여러개의 값을 변수에 저장할 수 있는 배열
// 특정 동일 주제에 묶여있는 2개 이상의 값 배열로 묶음

// 배열 사용안한 경우
const month = '월';
const tue = '화';
console.log(month,tue);

// 배열 사용한 경우
const yoil = ['월','화','수','목','금','토','일'];
console.log(yoil); //모든 배열 출력
console.log(yoil[0]); //배열값 중 원하는 인덱스 출력
console.log(yoil.length); //요일 객체의 길이속성 객체.속성

//================================================배열 기초1
// 원하는 색상을 자유롭게 6개 배열로 저장하고
// 그 중 좋아하는 색상만 인덱스로 골라 콘솔로그로 출력하기
const color = ['빨강','주황','노랑','초록','파랑','보라']
console.log(color);
console.log(`가장 좋아하는 색상 : ${color[3]}`);

// 배열 생성법 2
// new Array() 내장함수 선언법

let wh = new Array(2); //숫자2대입(x), 빈배열위치2자리삽입(o)
console.log(wh);

wh[0] = 100;
wh[1] = 50;
console.log(wh);

// 신발 쇼핑몰 색상/사이즈 배열
let colorSize = new Array(2); //빈배열 2개 준비
// colorSize[0] = prompt('pink, white 중 하나를 선택하세요');
// colorSize[1] = prompt('220, 230, 240 중 하나를 선택하세요');
colorSize[0] = 'pink';
colorSize[1] = 220;
let order = `주문옵션 : 색상:${colorSize[0]}, 사이즈:${colorSize[1]}`;
console.log(order);


//====================의류 선택옵션 배열로 만들기
// 사이즈 : S M L
// 색상 : 화이트 블랙 그레이
// 추가상품 : 양말, 손수건

let option = new Array(3);
option[0] = ['S'];
// option[0] = prompt('S,M,L 중 하나를 선택하세요');
option[1] = ['화이트'];
// option[1] = prompt('화이트, 블랙, 그레이 중 하나를 선택하세요');
option[2] = ['양말'];
// option[2] = prompt('양말, 손수건 중 하나를 선택하세요');
order = `사이즈:${option[0]}, 색상:${option[1]}, 추가상품:${option[2]}`
console.log(order);


//==============================배열과 사용자정의함수
// 날씨 소식 앱
// 출력 예시 1) 오늘은 맑음, 내일은 비 소식이 있습니다.
// 출력 예시 1) 오늘은 흐림, 내일은 눈 소식이 있습니다.
// 출력 예시 1) 오늘은 눈, 내일은 맑음 소식이 있습니다.

// 날씨 상태를 저장한 배열
let weather = ['맑음','흐림','비','눈']

// 함수 실행 시마다 다른 데이터를 전달하는 매개변수
weatherFunc(weather[0],weather[2]);//호출(대입데이터 입력)
weatherFunc(weather[1],weather[3]);
weatherFunc(weather[3],weather[0]);

function weatherFunc(today, tomorrow){//준비(매개생성,값 받고 대입)
    let msg = `오늘은 ${today}, 내일은 ${tomorrow} 소식이 있습니다.`;
    console.log(msg);
}

//==============================영화 좌석 예매 배열+함수
// 일반 2명 좌석 선택 기준
// 일반 1명당 표 가격은 10,000원 => 2명 20,000원

let cgvSeat = new Array(2); //빈 좌석 2개 준비
const price = 10000; //일반 1명 만원 준비
// cgvSeat[0] = prompt('선택좌석은?')'
cgvSeat[0] = ['f5']
cgvSeat[1] = ['f6']
//함수호출
cgvFunc(cgvSeat[0],cgvSeat[1],price*cgvSeat.length);

function cgvFunc(seat1,seat2,won){
    let movie = `일반 2명 예약한 좌석은 ${seat1}, ${seat2}이고,`;
    movie += `결제 가격은 ${won.toLocaleString('ko-kr')}원입니다.`
    console.log(movie);
}
//==============================구구단 함수
// 아래 함수 활용 매개변수 추가와 함께 2단~9단까지 모두 출력할 수 있는 함수만들기
// 아래 함수의 틀린 부분 찾아서 고치기

dan99(6);//()안에 생성된 매개변수 자리에 대입해야하는 값 입력 위치
dan99(7);

function dan99(num){//num 매개변수 생성(호출 시 대입받는 값을 받는 위치)
    let dan = `구구단 ${num}단 : `;
    dan += `${num}x1=${num*1} `//호출 시 대입받은 값을 최종 전달받는 위치
    dan += `${num}x2=${num*2} `
    dan += `${num}x3=${num*3} `
    dan += `${num}x4=${num*4} `
    dan += `${num}x5=${num*5} `
    dan += `${num}x6=${num*6} `
    dan += `${num}x7=${num*7} `
    dan += `${num}x8=${num*8} `
    dan += `${num}x9=${num*9} `
    console.log(dan);
}