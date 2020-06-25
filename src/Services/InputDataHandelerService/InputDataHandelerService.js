export default class InputDataHandelerService {

    inputHandler = (name, value, result, data) => {
        data.result = result
        if(name === 'First Name:'){
            data.firstName = value.trim()
           }
           if(name ==='Last Name:'){
            data.lastName = value.trim()
           }

           return data
    }
   
}