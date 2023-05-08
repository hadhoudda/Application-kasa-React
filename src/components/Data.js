
function Data(){
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        const data = response.json()
        return data;
      })
      .then(function(myJson) {
        console.log(myJson);
      });
}
export default Data