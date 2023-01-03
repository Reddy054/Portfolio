
// ========== Nav bar open in mobile ==========

var mobileMenu = document.querySelector(".open"),
    close = document.querySelector(".close"),
    sideMenu = document.querySelector(".aside");

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        sideMenu.classList.add("aside_active");
    })
};

if (close) {
    close.addEventListener('click', () => {
        sideMenu.classList.remove("aside_active");
    })
};


// ========== Hide side Menu on Scroll ==========


window.addEventListener("scroll", () => {
    if(document.querySelector(".aside").classList.contains("aside_active")) 
    {
        document.querySelector(".aside").classList.remove("aside_active")
    }
});



// ========== Active Section ==========

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      for (let i=0; i<totalNavList; i++) 
      {
        const a = navList[i].querySelector("a");

        a.addEventListener("click", function() {

            for (let j=0; j<totalNavList; j++)
            {
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
        })
      };






// ========== Typing ==========

var typing = new Typed(".typing", {
    strings: ["", "", "Front-End Web Developer", "Enthusiastic Dev 😎", "UI Developer 🙋‍♂️"],
    typeSpeed: 100,
    BackSpeed:60,
    loop:true
});

var smallTyping = new Typed(".small-typing", {
    strings: ["", "", "Front-End Web Developer", "Enthusiastic Dev 😎", "UI Developer 🙋‍♂️"],
    typeSpeed: 100,
    BackSpeed:60,
    loop:true
});







// ========== Form Validation ==========

const form = document.querySelector("form"),

    uname = document.querySelector(".pname"),

    email = document.querySelector(".email"),

    subject = document.querySelector(".subject"),

    message = document.querySelector(".message"),

    send_btn = document.querySelector(".send");


var isValidName = false,
    isValidEmail = false,
    isValidSubject = false,
    isValidMessage = false;



form.addEventListener('submit', (e) => {

    e.preventDefault();
    validate()
})

function validate() {
    let nameValue = uname.value.trim(),
        emailValue = email.value.trim(),
        subjectValue = subject.value.trim(),
        messageValue = message.value.trim();

        isValidName = false,
        isValidEmail = false,
        isValidSubject = false,
        isValidMessage = false;
    
    // Name Check

    if (nameValue === "") {
        setError(uname, 'This field is Mandatory')
    }
    else if(nameValue.length <= 2) {
        setError(uname, 'Name should be more than 2 characters')
    }
    else{
        setSuccess(uname);  
        isValidName = true;
    }

    // Email Check

    if(emailValue === "") {
        setError(email, "This field is Mandatory")
    }
    else if(!emailCheck(emailValue)) {
        setError(email, "Enter Valid Email Id")
    }
    else{
        setSuccess(email);
        isValidEmail = true;
    }

    // Subject Check

    if(subjectValue === "") {
        setError(subject, "Subject is Mandatory")
    }
    else if(subjectValue.length <= 3) {
        setError(subject, "subject should be more than 3 characters")
    }
    else{
        setSuccess(subject);
        isValidSubject = true;
    }

    // Message check

    if(messageValue === "") {
        setError(message, "Pease type your message")
    }
    else if(messageValue.length <=10) {
        setError(message, "please type your message min. more than 10 characters")
    }
    else{
        setSuccess(message);
        isValidMessage = true;
    }

    if (isValidName && isValidEmail && isValidSubject && isValidMessage) {
        form.submit();
    }

    function setError(input, message) {
        let parent = input.parentElement;
        let small = parent.querySelector("small");
        small.innerText = message;
        parent.classList.add("error");
        parent.classList.remove("success");
    }

    function setSuccess(input){
        let parent = input.parentElement;
        parent.classList.remove("error");
        parent.classList.add("success");        
    }

    function emailCheck(input) {
        let emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let valid = emailReg.test(input)
        return valid
    }
};

    






