/*sign in*//*sign up*/
const invalidemail= document.getElementById('invalidemail');
const invalidname= document.getElementById('invalidname');
const invalidpassword= document.getElementById('invalidpass');

const invalidemail2= document.getElementById('invalidemailin');
const invalidpassword2= document.getElementById('invalidpassin');

const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
const passRegex =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

const container = document.getElementById("container");
const tregisterbtn = document.getElementById("register");
const tloginbtn = document.getElementById("login");

/*sign up*/ 
const upemail= document.getElementById('upemail');
const upfname= document.getElementById('upname');
const uppass= document.getElementById('uppass');
const signbtn= document.getElementById('sign-up-btn');

/*sign in*/
const inemail= document.getElementById('inemail');
const inpass= document.getElementById('inpass');
const loginbtn= document.getElementById('sign-in-btn');

/*sign in*//*sign up*/
tregisterbtn.addEventListener("click", () => {
    container.classList.add("active");
});

tloginbtn.addEventListener("click", () => {
    container.classList.remove("active");
});


/*sign up*/ 

let isemailvalid,ispassvalid,isfnamevalid ,isinemailvalid,isinpassvalid=false;

const sforminputvalue={
    username:'' ,
    mail:'',
    password:''
};



upfname.addEventListener('input', (e) =>
{
    const value=e.target.value;
    if(value.length<10)
    {
        invalidname.style.display='none';
        upfname.style.border='none';
        isfnamevalid=true;
        sforminputvalue.username=value;
    }
    else{
        invalidname.style.display='block';
        upfname.style.border= '2px solid red';
        isfnamevalid=false;
    }
});
upemail.addEventListener('input', (e) =>
{
    const value=e.target.value;
    if(emailRegex.test(value))
    {
        invalidemail.style.display='none';
        upemail.style.border='none';
        isemailvalid=true;
        sforminputvalue.mail=value;
    }
    else{
        invalidemail.style.display='block';
        upemail.style.border='2px solid red';
        isemailvalid=false;
    }
});
uppass.addEventListener('input', (e) =>
{
    const value=e.target.value;
    if(passRegex.test(value) <15)
    {
        invalidpassword.style.display='none';
        uppass.style.border='none';
        ispassvalid=true;
        sforminputvalue.password=value;
    }
    else{
        invalidpassword.style.display='block';
        uppass.style.border='2px solid red';
        ispassvalid=false;
    }
});


signbtn.addEventListener("click", (e) =>
{
    e.preventDefault();

    if(isemailvalid && isfnamevalid && ispassvalid)
    {
        window.location.href ="./dashboard.html";
        localStorage.setItem(`user-${sforminputvalue.username}`, JSON.stringify(sforminputvalue));
        console.log(sforminputvalue);
    }
    else{
        const inputs =document.querySelectorAll('.sign-up input');
        inputs.forEach((input)=>
        {
            if(input.value.trim('').length==0);{
                input.style.border='2px solid red';
            }
            })
        console.log('send is fail'); 
    }
});

/*sign in*/

let inmaildata='';
let inpassdata='';

function retrieveLoginData() {
    const storedLoginData = localStorage.getItem("user");
    if (storedLoginData) {
        return JSON.parse(storedLoginData);
    } else {
        return null;
    }
}

inemail.addEventListener('input', (e) =>
{
    const value=e.target.value;
    if(emailRegex.test(value))
    {
        invalidemail2.style.display='none';
        inemail.style.border='none';
        isinemailvalid=true;
        inmaildata=value;
    }
    else{
        invalidemail2.style.display='block';
        inemail.style.border='2px solid red';
        isinemailvalid=false;
    }
});
inpass.addEventListener('input', (e) =>
{
    const value=e.target.value;
    if(passRegex.test(value) )
    {
        invalidpassword2.style.display='none';
        inpass.style.border='none';
        isinpassvalid=true;
        inpassdata=value;
    }
    else{
        invalidpassword2.style.display='block';
        inpass.style.border='2px solid red';
        isinpassvalid=false;
    }
});
function validateLogin() {
    const storedData = retrieveLoginData();

    if (storedData.mail === inmaildata && storedData.password === inpassdata) {
        // Login successful
        return true;
    } else {
        // Login failed
        return false;
    }
}
loginbtn.addEventListener("click", (e) =>
{
    e.preventDefault();

    if(isinemailvalid  && isinpassvalid)
    {
        if (validateLogin()) {     
            window.location.href ="../dashboard.html";
        }
        else{
            console.log('data is fail');
        }
    }
    else{
        const inputs =document.querySelectorAll('.sign-in input');
        inputs.forEach((input)=>
        {
            if(input.value.trim('').length==0);{
                input.style.border='2px solid red';
            }
        })
        console.log('send is fail'); 
    }
});

