//Blog Test
// let theUrl = "https://mamooredesigns.wordpress.com/blog/"

window.onload = function(){
    const apiUrl = "https://mamooredesigns.wordpress.com/blog/"
    console.log("api URL: ", apiUrl)
    
    fetchData(apiUrl)
    .then(data => console.log("in the then", data))
    .catch(error => console.log("in the catch", error))
}

function fetchData(url) {
    return fetch(url)
            .then(res => res.json())
}