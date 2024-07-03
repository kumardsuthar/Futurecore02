
function mycardno(){
    let cardNoInp = document.getElementById("cardno").value.replace(/.{1,4}/g, "$& ");;
    
    document.getElementById("card-no").innerText = cardNoInp;
}

function mycardname(){
    let cardNameInp = document.getElementById("name").value;
    
    document.getElementById("card-name").innerText = cardNameInp;
}

function cardmo(){
    let cardMonthInp = document.getElementById("mm").value;

    document.getElementById("cardmo").innerText = cardMonthInp;
}
function cardyr(){
    let cardYearInp = document.getElementById("yy").value;

    document.getElementById("cardyr").innerText = cardYearInp;
}

function cardcvc(){
    let cardCvcInp = document.getElementById("cvc").value;

    document.getElementById("card-cvc").innerText = cardCvcInp;
}



// show msg after form is submitted

function showMsg()
{
    let form = document.getElementById("form").style.cssText="display:none";
    let formDiv = document.getElementById("form-div").innerHTML +=
    `<div class="success">
        <img src="images/icon-complete.svg" alt="success-icon">
        <h2>Thank you!</h2>
        <p>We've added your card details.</p>

        <button> Continue </button>
         
    </div>`;
   
}

 
 $(function() {

$("form[name='cardinfo']").validate({
  // Specify validation rules
  rules: {
 
    cardname: {
        
        required: true
        
    },
    num  : {
      
       number : true ,
       required : true
    },
     month: {
required: true,
  
number : true
},
year: {
required: true,
number : true
},
cvc : {
required: true,

number : true
}
},
// Specify validation error messages
messages: {
  cardname: {
    required : "can't be blank."
   
},
num: {
required : "Can't be blank.",

number : "Wrong format, numbers only."

},
month: {
required: "Can't be blank.",

number : "Wrong format, numbers only."
},
year: {
required: "Can't be blank.",

number : "Wrong format, numbers only."
},
cvc : {
required : "Can't be blank.",

number : "Wrong format, numbers only"
}

},
// Make sure the form is submitted to the destination defined
// in the "action" attribute of the form when valid
submitHandler: function(form) {
showMsg();
}
});
});
