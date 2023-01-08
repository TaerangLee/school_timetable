

const date = document.querySelector(".date");
const grade = document.querySelector(".grade");
const class1 = document.querySelector(".class"); //class 그 자체로 변수명 설정 금지
const semester = document.querySelector(".semester");
const submitInformation = document.querySelector(".submitInformation");
const regExp = /[0-9]/g;


submitInformation.addEventListener("click", () => {
    alert("오늘의 시간은?");
    
    const YMD = date.value;
    const GRADE = grade.value;
    const CLASS = class1.value;
    const SEM = semester.value;

    console.log(parseInt(YMD));
    console.log(parseInt(GRADE));
    console.log(parseInt(CLASS));
    console.log(parseInt(SEM));

    
    

    const SET = () => {
        // const url = `https://open.neis.go.kr/hub/hisTimetable?KEY=00da5e76d41248ee8a85992a899a8f63&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&AY=2022&SEM=${SEM}&ALL_TI_YMD=${YMD}&GRADE=${GRADE}&CLASS_NM=${CLASS}`;
        fetch(`https://open.neis.go.kr/hub/hisTimetable?KEY=00da5e76d41248ee8a85992a899a8f63&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&AY=2022&SEM=${SEM}&ALL_TI_YMD=${YMD}&GRADE=${GRADE}&CLASS_NM=${CLASS}`)
            .then((res) => res.json())
            .then((json) => {
                for (let i = 0; i < 7; i++) {
                    const classOne = document.querySelector(".One");
                    const classTwo = document.querySelector(".Two");
                    const classThree = document.querySelector(".Three");
                    const classFour = document.querySelector(".Four");
                    const classFive = document.querySelector(".Five");
                    const classSix = document.querySelector(".Six");
                    const classSeven = document.querySelector(".Seven");

               
                    try {
                        classOne.innerText = `${dateValue} ${i + 1}교시 ${json.hisTimeTable[1].row[i].ITRT_CNTNT}`;
                    }
                    catch {
                        classOne.innerText = `${dateValue} ${i + 1}교시 수업없음`;
                    }
                }
            })
        }
});
            
        
     

                
                 
        
   
        
    