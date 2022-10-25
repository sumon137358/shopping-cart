

const plusBtnPhone =document.getElementById("plusBtnPhone").addEventListener("click",function(){
    handlePhoneSection(true)
});
function handlePhoneSection(isIncrease) {
     const inputPhone =document.getElementById("inputPhone");
    const inputNumber =parseInt(inputPhone.value);
     let  totalInputNumber =inputNumber;
    if(isIncrease == true){
        totalInputNumber = inputNumber +1;
    }
    if(isIncrease == false && inputNumber>0){
        totalInputNumber = inputNumber-1;
    }
    inputPhone.value = totalInputNumber;
    const totalPhonePrize =totalInputNumber*1219;

    const phonePrize =document.getElementById("phonePrize");
    const phonePrizeNumber =parseInt(phonePrize.innerText);
    document.getElementById("phonePrize").innerText =totalPhonePrize;

    calculateSubtotal()

}
 const minusBtnPhone =document.getElementById("minusBtnPhone").addEventListener("click",function(){
    handlePhoneSection(false)


 });

// case section start from here
function handleCaseSection(isIncrease) {
    const caseInput =document.getElementById("caseInput");
    const caseNumber =parseInt(caseInput.value);
//    const totalCaseInput =caseNumber+1;
    let totalCaseInput =caseNumber;
    if(isIncrease == true){
        totalCaseInput =caseNumber+1;

    }
    if(isIncrease == false && caseNumber>0){
        totalCaseInput =caseNumber-1;

    }

   caseInput.value =totalCaseInput;
   const casePrize =document.getElementById("casePrize");
  const casePrizeNumber =parseInt(casePrize.innerText);
  const totalCasePrize =59*totalCaseInput;
  casePrize.innerText =totalCasePrize;
calculateSubtotal();
}
function calculateSubtotal(){

    const inputPhone =document.getElementById("inputPhone");
    const inputNumber =parseInt(inputPhone.value);
    const caseInput =document.getElementById("caseInput");
    const caseNumber =parseInt(caseInput.value);
    const subtotal =document.getElementById("subtotal");
    const total =caseNumber*59 + inputNumber*1219;
    
    subtotal.innerText =total;

    const totalTax =Math.round(total*0.1);
    document.getElementById("tax").innerText ='$'+totalTax;
    const grandTotal =total+totalTax;
    document.getElementById("grandTotal").innerText ='$'+ grandTotal;
    
}

 
















