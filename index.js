

const date = document.querySelector(".date");
const grade = document.querySelector(".grade");
const class1 = document.querySelector(".class"); //class 그 자체로 변수명 설정 금지
const semester = document.querySelector(".semester");
const submitInformation = document.querySelector(".submitInformation");
const regExp = /[0-9]/g;


submitInformation.addEventListener("click", () => {
    const dateValue = date.value;
    const gradeValue = grade.value;
    const class1Value = class1.value;
    const semesterValue = semester.value;
    const submitInformationValue = submitInformation.value;
    

    const set = () => {
        const url = `https://open.neis.go.kr/hub/hisTimetable?KEY=00da5e76d41248ee8a85992a899a8f63&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&AY=2022&SEM=${semesterValue}&ALL_TI_YMD=${dateValue}&GRADE=${gradeValue}&CLASS_NM=${class1Value}`;
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                
        
            });
        
    }







});





