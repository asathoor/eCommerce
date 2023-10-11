console.log("Ok, from ./js/restapi.js")

// the REST API Endpoint (URL) with key and secret
const endPoint = "https://woo.thoth.dk/wp-json/wc/v3/products"
const ck = "consumer_key=ck_1b7c550d193eceaece991fdff96c8c1280cc43c0"
const cs = "consumer_secret=cs_a642dfe44f6455a67f167443604beb8e480f6a57"
// add key and secret to the endpoint
const wooRest = endPoint + "?" + ck + "&" + cs
// if it be your will add more queries separated by + "&" + key=value

// fetch() the data from the const woorest
fetch( wooRest ).then(

    response => {

    return response.json(); // get data as JSON
    
    }).then(data => {

        // what's inside the JSON?
        console.log( data ); // check the console!

        // Sample data (uncomment and watch this in the Inspect Tool / Console):
        // ....
        //console.log(data[0].images[0].name) // name of the image
        //console.log(data[0].images[0].src) // src of the image
        // ....

        // loop through the data object
        for (i=0; i < data.length; i++ ){

            // add the procucts to <div id="katalog"></div>
            katalog.innerHTML += `
                <section class="produkter">
                    <h3> ${data[i].name} </h3>
                    <figure>
                        <img 
                            src="${data[i].images[0].src}" 
                            alt="${data[i].images[0].name}"
                            class="productImg">
                        <figcaption> ${data[i].description} </figcaption>
                        <a href="${data[i].permalink}"> Bestil nu! </a>
                    </figure>
                </section>`
        } 

    }).catch(err => {

        // error messages if things go awry
        console.log('Error: ' + err)

}) // /fetch()
