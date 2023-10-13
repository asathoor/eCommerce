// If the're a connection with the JavaScript file you'll see the message below
console.log("Ok, from ./js/restapi.js")

// the REST API Endpoint (URL):
const endPoint = "https://woo.thoth.dk/wp-json/wc/v3/products"

// consumer key:
let ck  =  "consumer_key=" 
ck      += "CUSUMER-KEY-HERE"

// consumer secret:
let cs  =  "consumer_secret=" 
cs      += "CONSUMER-SECRETE-HERE"

// combine key and secret with the endpoint:
const wooRest = endPoint + "?" + ck + "&" + cs

// add more key value pairs if you need it

// now fetch() the data from the const woorest
fetch( wooRest ).then(

    response => {

    return response.json(); // let data be JSON
    
    }).then(data => {

        // what's inside the JSON?
        console.log( data ); // check this in the console!

        // Sample data (uncomment and watch this in the Inspect Tool / Console):
        // ....
        // console.log(data[3].images[0].name) // name of the image
        // console.log(data[0].images[0].src) // src of the image
        // ....

        // loop through the data object
        
        for (i=0; i < data.length; i++ ){

            // this will add the procucts as HTML to <div id="katalog"></div>
            catalog.innerHTML += `
                <section class="produkter">
                    <h3> ${data[i].name} </h3>
                    <figure>
                        <img 
                            src="${ data[i].images[0].src }" 
                            alt="${data[i].images[0].name}"
                            class="productImg">
                        <figcaption> ${data[i].description} </figcaption>
                        <a href="${data[i].permalink}"> Order Now! </a>
                    </figure>
                </section>`
        } 
        

    }).catch(err => {

        // error messages if things go awry
        console.log('Error: ' + err)

}) // /fetch()