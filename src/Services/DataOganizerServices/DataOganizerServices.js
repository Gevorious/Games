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
        const leaders = []
        if(data) { 
        for(let key in data){
            leaders.push(data[key])
            }
        }

      return leaders
    }

}

