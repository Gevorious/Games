import axios from 'axios'

export default class APIService  {

    async getData (game) { 
        const res = await axios.get(`https://fun-games-46704.firebaseio.com/${game}.json`)      
                     return await res.data           
                }

    async sendData (game, data) {  
        const res = await axios.post(`https://fun-games-46704.firebaseio.com/${game}.json`, data)
        .catch(error => {
            console.log(error)
            })

        if(res.status === 200){
            return true
        }else{
            return false
        }
    }
}


