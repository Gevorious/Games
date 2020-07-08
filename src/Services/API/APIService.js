import axios from 'axios'

export default class APIService  {

    _APIUrlBase = 'https://fun-games-46704.firebaseio.com'

    async getData (game) { 
        const res = await axios.get(`${this._APIUrlBase}/${game}.json`)      
                     return await res.data            
                }
               

    async sendData (game, data) {  
        const res = await axios.post(`${this._APIUrlBase}/${game}.json`, data)
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


