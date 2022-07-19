const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=2a73e349a1e11d5767527bf1dae8b292&query=45,-75&units=f'


const request = http.request(url,(response)=>{

    let data = ' '

    response.on('data',(chunk) => {
        
        data= data + chunk.toString()
        

      

    })

    response.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(body)
        //console.log(data)
    })

})

request.on('error', (error) =>{
    console.log('An error', error)
})

request.end()