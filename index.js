const date = document.querySelector(".date");
const grade = document.querySelector(".grade");
const class1 = document.querySelector(".class"); //class 그 자체로 변수명 설정 금지
const semester = document.querySelector(".semester");
const search = document.getElementById(`BT`);

let YMD = 0;
let GRADE = 0;
let CLASS = 0;
let SEM = 0;
const TIME = 0;

const SET = () => {

  fetch(
    `https://open.neis.go.kr/hub/hisTimetable?KEY=00da5e76d41248ee8a85992a899a8f63&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&AY=2022&SEM=${SEM}&ALL_TI_YMD=${YMD}&GRADE=${GRADE}&CLASS_NM=${CLASS}`
  ,)
    .then((res) => res.json())
    .then((json) => {
      for (let i = 0; i < 7; i++) {
          const inner = document.getElementById(`${i}`);
        try {
          inner.innerText = `${i + 1}교시 ${
            json.hisTimetable[1].row[i].ITRT_CNTNT //row는 총 7일
          }`;
        } catch {
            inner.innerText = `${i + 1}교시 수업없음`;
            //오류 상황시 catch실행
        }
      }
    })
};

const handleChange = (event) => {
  if (event.target == grade) { //반환을 한 것이 grade이면 실행.
    GRADE = event.target.value;
  }
  if (event.target == date) {
    YMD = event.target.value;
  }
  if (event.target == class1) {
    CLASS = event.target.value;
  }
  if (event.target == semester) {
    SEM = event.target.value;
    }
   
};

search.addEventListener("click", SET);


class1.addEventListener("change", handleChange);
date.addEventListener("change", handleChange);
semester.addEventListener("change", handleChange);
grade.addEventListener("change", handleChange);   


