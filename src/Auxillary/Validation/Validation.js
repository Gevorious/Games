export default function Validation(firstName, lastName) {

    let isValid = true
 
    if(!firstName  || !lastName){
        isValid = false
    }

    if(lastName.length < 2 || firstName.length < 2){
        isValid = false
    }

     if(!lastName.match(/^[a-zA-Z]+$/) || !firstName.match(/^[a-zA-Z]+$/)) {
         isValid = false
     }

    return isValid
}