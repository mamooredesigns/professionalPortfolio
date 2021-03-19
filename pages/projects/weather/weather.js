let city = document.getElementById("city")

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

document.getElementById("search").addEventListener("click", function(){
    let content = document.getElementById("info");
    if (content) {
        removeAllChildNodes(content);
    }
    userTyped = city.value
    console.log("city is:", typeof userTyped, userTyped)
    apiKey = "b2a6c5863316c58e6a97c6a48e78ca12";

    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+userTyped+"&appid="+apiKey
    console.log("api URL: ", apiUrl)

    fetch(
        apiUrl
    )
    .then(response => response.json())
    .then(responseData => {
        console.log('All response data', responseData);
        if (responseData.cod === "404") {
            let errorMessageDiv = document.createElement("div");errorMessageDiv.textContent = "You have entered an invalid city, please retry.";
            document.getElementById("info").appendChild(errorMessageDiv)
        } else {
        const currentWeather = responseData.main;
        console.log('Cut down to just main: ', currentWeather)
        const temp = (currentWeather.temp - 273.15) * (9/5) + 32;
        const feelsLike = (currentWeather.feels_like - 273.15) * (9/5) + 32;
        let condition = document.createElement("p")
        condition.textContent = "Condition:"
        let weatherCond = document.createElement("p")
        weatherCond.textContent = responseData.weather[0].main
        let iconImg = document.createElement("img")
        let iconUrl = "http://openweathermap.org/img/wn/" + responseData.weather[0].icon + "@4x.png"
        iconImg.src = iconUrl
        let iconDiv = document.createElement("div")
        iconDiv.appendChild(condition)
        iconDiv.appendChild(iconImg)
        iconDiv.appendChild(weatherCond)
        let tempDiv = document.createElement("div")
        tempDiv.textContent = 'Current Temperature: ' + temp.toFixed(0) + '\u00B0' + 'F'
        let feelsLikeDiv = document.createElement("div")
        feelsLikeDiv.textContent = 'Feels Like: ' + feelsLike.toFixed(0) + '\u00B0' + 'F'

        //(0K − 273.15) × 9/5 + 32 = -459.7°F

        document.getElementById("info").appendChild(iconDiv)
        document.getElementById("info").appendChild(tempDiv)
        document.getElementById("info").appendChild(feelsLikeDiv)
        }
        }
    )
})


// let city = document.getElementById("city")
// console.log("user entered: ", city.textContent)

// let apiKey = "b2a6c5863316c58e6a97c6a48e78ca12"

// document.getElementById("search").addEventListener("click", function(){
//     let userTyped = city.value
//     console.log("city is:", typeof city, city, userTyped)

//     const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+userTyped+"&appid="+apiKey
//     console.log("api URL: ", apiUrl)
    
//     fetch(apiUrl)
//     // .then(data => console.log("in the then", data))
//     // .catch(error => console.log("in the catch", error))

// //     try{
// //         let request = new XMLHttpRequest();
// //         request.open("GET", apiUrl);
// //         request.send();
// //         request.onload = () => {
// //             console.log(request);
// //             if (request.status === 200) {
// //                 console.log(JSON.parse(request.repsonse));
// //             } else {
// //                 console.log(`error ${request.status} ${request.statusText}`)
// //             }
// //         }
// //     } 
// //     catch (err) {
// //         alert("CITY NOT FOUND")
// //     }
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// }
// )

//     // function fetchData(url) {
//     //     return fetch(url)
//     //             .then(res => res.json())
//     // }
    
        
    
//     //     let weatherData;
    
// //         // .then(response => response.json())
// //         // .then(responseData => {
// //             // console.log('All response data', responseData)
// //             // const currentWeather = responseData.main;
// //             // const currentTemp = currentWeather.temp;
// //             // console.log("temp is: ", currentTemp)
// //             // const temp = (currentTemp - 273.15) * (9/5) + 32;
// //             // let tempDiv = document.createElement("div")
// //             // tempDiv.textContent = temp.toFixed(0) + '\u00B0' + 'F'
// //             // document.getElementById("info").appendChild(tempDiv)
// //             // weatherData = responseData
// //         // }
        
// //     // }
// //     // catch{console.log("in the catch")}
// //     // finally{}
// // })
    
// //     // catch{
// //     //     console.log("in the catch")
// //     //     alert("CITY NOT FOUND");
// //     // }

    

// //     // fetch(
// //     //     apiUrl
// //     // )
// //     // .then(response => response.json())
// //     // .then(responseData => {
// //     //     console.log('All response data', responseData)
// //     //     const currentWeather = responseData.main;
// //     //     const currentTemp = currentWeather.temp;
// //     //     console.log("temp is: ", currentTemp)
// //     //     const temp = (currentTemp - 273.15) * (9/5) + 32;
// //     //     let tempDiv = document.createElement("div")
// //     //     tempDiv.textContent = temp.toFixed(0) + '\u00B0' + 'F'
// //     //     document.getElementById("info").appendChild(tempDiv)
// //     // }
// //     // )
// //     //})
// // //         console.log('Cut down to just main: ', currentWeather)
// // //         const temp = (currentWeather.temp - 273.15) * (9/5) + 32;
// // //         const feelsLike = (currentWeather.feels_like - 273.15) * (9/5) + 32;
// // //         let tempDiv = document.createElement("div")
// // //         tempDiv.textContent = temp.toFixed(0) + '\u00B0' + 'F'
// // //         let feelsLikeDiv = document.createElement("div")
// // //         feelsLikeDiv.textContent = 'Feels Like: ' + feelsLike.toFixed(0)

// // //         //(0K − 273.15) × 9/5 + 32 = -459.7°F


// // //         document.getElementById("info").appendChild(tempDiv)
// // //         document.getElementById("info").appendChild(feelsLikeDiv)
// // //         }
// // //     )
