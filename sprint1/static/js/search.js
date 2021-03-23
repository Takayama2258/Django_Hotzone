function searchLocation(){
    var q = document.getElementById("q").value;
    var url = 'https://geodata.gov.hk/gs/api/v1.0.0/locationSearch?q='+q;
    
    fetch(url, {method: 'GET'}).then(response => {
        
        if (response.status == 200){
            response.json().then( result => {
                
                document.getElementById("name").innerHTML = "name: " + result[0].nameEN;
                document.getElementById("address").innerHTML = "address: " + result[0].addressEN;
                document.getElementById("x_coordinate").innerHTML = "x_coordinate: " + result[0].x;
                document.getElementById("y_coordinate").innerHTML = "y_coordinate: " + result[0].y;
		})
        }
        else{
            let t = document.createTextNode("HTTP response is not successful.");
            let h = document.createElement("p");
            h.appendChild(t);
            document.body.appendChild(h);
        }
    })
}




