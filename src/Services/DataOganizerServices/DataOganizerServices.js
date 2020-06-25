export default class StatsOganizerServices {
    
    sort = leaders => {
        if(isNaN(leaders[0].result)){
            leaders.sort((a,b) => {
                return  Number(a.result.replace(/:/g,'')) - Number(b.result.replace(/:/g,''))
              })
        }else {
            leaders.sort((a,b) => {
                return   b.result - a.result 
              })
        }
    }

    transformData = data => {
        const keys = Object.keys(data)
        const leaders = []
        if(data) {                
           keys.map(key => {
                const person = data[key]                  
                return leaders.push(person)                   
            })
        }

      return leaders
    }

}

