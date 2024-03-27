export const validateInput=(email,password)=>{
    
    const isEmailIdValid =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    
    if(!isEmailIdValid) return "Email Id is not valid"

    if(!isPasswordValid) return "password is not valid"

    return null
}