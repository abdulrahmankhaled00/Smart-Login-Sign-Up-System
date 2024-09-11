let nameInput=document.getElementById('nameInput')
let emailInput=document.getElementById('emailInput')
let passwordInput=document.getElementById('passwordInput')
let signup= document.getElementById('sginup')
let sginin= document.getElementById('sginin')
let warrning= document.getElementById('warning')
let welcome=document.getElementById('welcome')
let logOutBtn=document.getElementById('logOut')

let users=[]

let localUsers;

let logedInUser;




if(signup !=null){
    signup.addEventListener('click' ,function(){
    signUp()
})}

if(sginin !=null){
    sginin.addEventListener('click' ,function(){
    signin()
})
}
if(logOutBtn !=null){
    logOutBtn.addEventListener('click' ,function(){
        logOut()
})
}


function validateSignUp(){
    if(emailInput.value ==''||
       nameInput.value ==''||
       passwordInput.value ==''){
        warrning.classList.replace('d-none','d-block')
        warrning.innerHTML='All inputs is required'
        warrning.style.color='red'

        return false
        
       }
    for (let i = 0; i < localUsers.length; i++) {
        if(localUsers[i].name==nameInput.value||localUsers[i].email==emailInput.value){
                warrning.classList.replace('d-none','d-block')
                warrning.style.color='red'
                warrning.innerHTML='This email already existed'
                
                     return false
   
        }
        
    }
    console.log('www')
    warrning.classList.replace('d-none','d-block')
    warrning.innerHTML='sucsess'
    warrning.style.color='green'
    return true
}

function validateSignIn(){
    if(emailInput.value ==''||
      passwordInput.value ==''){
     return false
    }
    return true
}

function signUp(){
     localUsers=JSON.parse(localStorage.getItem('users'))
    if(validateSignUp()){
    let  user ={
        name:nameInput.value,
        email:emailInput.value,
        passwaord:passwordInput.value,
    }
    users.push(user)
    console.log(users)
    localStorage.setItem("users",JSON.stringify(users))
    }
}

function signin(){
    localUsers=JSON.parse(localStorage.getItem('users'))
    if(validateSignIn()){
        for (let i = 0; i < localUsers.length; i++) {
            if(localUsers[i].email==emailInput.value && localUsers[i].passwaord==passwordInput.value){
                logedInUser=localUsers[i]
                localStorage.setItem('name',logedInUser.name)
                window.open("/home.html",'_self') ; 
            
            }
            if(!logedInUser){
                warrning.classList.replace('d-none','d-block')
                warrning.innerHTML='incorrect email or password'
            }
       }
    }else{
        warrning.classList.replace('d-none','d-block')
        warrning.style.color='red'
        warrning.innerHTML='All inputs is required'
    }
    
}

if(welcome !=null){
    let welName =localStorage.getItem('name')
    welcome.append(welName)

}

function logOut(){
    localStorage.removeItem('name') 
       window.open("/index.html",'_self') 
}


