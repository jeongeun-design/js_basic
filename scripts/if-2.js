// 비교연산자와 참, 거짓 데이터 + 논리연산자
// 논리연산자 종류
// && (and) 모두 참이어야 함
// || (or) 하나만 참이어도 참
// ! 데이터 참,거짓 상태 반전

let data1 = 'web' && 'javascript'; 
let data2 = 0;
let data3;
console.log(data1, Boolean(data1));

data1 = 0 && 'figma'; //왼쪽 첫번쨰 데이터가 거짓이므로 오른쪽은 수행안하고 바로 결과를 냄
console.log(data1, Boolean(data1));

data1 = '' && ++data2; //오른쪽 수행 안 해서 증감 안 됨
console.log(data1, Boolean(data1), data2);

data1 = 'html' || 'css'; //html이 참이므로 css 수행안함
console.log(data1, Boolean(data1));

data1 = data3 || data2; //data3 거짓이므로 data2 처리함
console.log(data1, Boolean(data1), data3);

data1 = !true; //!값을 반전
console.log(data1, Boolean(data1));