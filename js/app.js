$(document).ready(function(){
    
    var flag = false;

    // mapping integer values to the input fields
    $('.integer').click(function(e){
        e.preventDefault();
        if(!flag){
            $("#firstNumber").val($( "#firstNumber").val() + $(this).text());
        } else  {
            $("#secondNumber").val($( "#secondNumber").val() + $(this).text());
        }
    });

    // Setting flag to false to map user input numbers to first field 
    $( "#firstNumber" ).focus(function() {
        flag = false;
    });
    
    // Setting flag to true to map user input numbers to second field 
    $( "#secondNumber").focus(function() {
        flag = true;
    });

    // adding both values
    $("#add").click(function(e){
        e.preventDefault();
        if(validation()){
            $("#result").val(firstVal() + secondVal());
        } 
    });

    // subtracting both values
    $("#sub").click(function(e){
        e.preventDefault();
        if(validation()){
            $("#result").val(firstVal() - secondVal());
        }
    });

    // multiplying both values
    $("#mul").click(function(e){
        e.preventDefault();
        if(validation()){
            $("#result").val(firstVal() - secondVal());
        }
    });

    // dividing both values
    $("#div").click(function(e){
        e.preventDefault();
        if(validation()){    
            $("#result").val(firstVal() / secondVal());
        }
    });

    // getting first input field value
    function firstVal(){
        return  parseInt($("#firstNumber").val());
    }
    
    // getting second input field value
    function secondVal(){
        return  parseInt($("#secondNumber").val());
    }

    //check vlidation
    function validation(){
        if ($("#secondNumber").val() != '' && $("#secondNumber").val() != ''){
           return true;
        }
        alert('please fill out all fields');
        return false;
    }

});


