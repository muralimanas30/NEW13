const login_frame = document.getElementById("login-frame");
const signup_frame = document.getElementById("signup-frame");
const ques_frame = document.getElementById("ques-frame");
const switch_button = document.getElementById("b123");
const body = document.getElementById("jjj");
const ques_text_context = document.getElementById("ques_text_content");
switch_button.onclick = hello;
let switch_button_click_count=1;

function hello(){

    switch_button_click_count+=1;
    if(switch_button_click_count%2==0)
    {
        ques_frame.style.animation =  "login-to-signup ease-in-out 0.6s forwards 1";
        login_frame.style.animation= "login-frame-animation1 0.6s ease-in 1 forwards"
        signup_frame.style.animation="register-frame-animation1 0.6s 1 forwards ease-out";
        switch_button.textContent = "LOGIN";
        body.style.backgroundPosition="0% 100%";
        ques_text_context.textContent="Welcome back soldier! Good to have you back";


    }
    else{
        login_frame.style.animation= "login-frame-animation2 0.6s ease-out 1 forwards"
        signup_frame.style.animation="register-frame-animation2 0.6s 1 forwards ease-out";
        switch_button.textContent = "SIGN UP";
        ques_frame.style.animation =  "signup-to-login ease-in-out 0.6s forwards 1";
        body.style.backgroundPosition="70% 100%";
        ques_text_context.textContent="New Here? Join the community by Signing up";
    }
    
    

}