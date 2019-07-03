# project description 

What's the weather like to climb today? 

In this app, the user will be able to search specific climbing routes in a set longitude & latitude, as well as see what the weather is like for that region. Using the Mountain Porject Api from REI (link of API: https://www.mountainproject.com/data) and the weather Api from Open Weather (https://openweathermap.org). The app will be composed of a Home page where you will be able to see the current Weather Data in the Laurentians at that day, a Climb page where you will be able to search and see the information that the REI Api provides about the climbs in that area, as well as a contact us page where the user may submit a new climb that they have found. The header of the Climb page will have a video that will be responsive to a photo when it goes to a certain size.

wireframe: https://i.imgur.com/U8V5InL.jpg

## Issues 
The issues i see arrising is mixing multiple different API's together and how to structure everything in my documents. With the REI APi since there is no endpoint i can only search within a set longitude and latitude.

### POST MVP

Post MVP I would like to maybe add a third API. Adding the country api will let users see information of the place that they are looking to climb in. 


#### POST
What I would have liked to acheive is eventually if they make the REI Mountain Project API open ended, to be able to have a search by areas since the data base they have is super large. They have climbing data from all over the word but at the moment they only have the option to hard code in a latitude and longitude for a specific area. 

Seeing as I could only hard-code in a specific lat & long, I decided to do the same for the weather API so that it would only return the data of the Laurentians. 

Going back through my project, what I would change is adding more data about the weather in the area so that it is more specific. As well as add the third API with the country API so that you could also search about the country data of the place that you would like to go climbing in. 

##### Acheivements 

What I am proud of is adding the two APIs. 

##### Tech/Frame

Built using React.

###### Build Status 
The status of the App is currently working and deployed. It needs some tweeks, as mentioned higher but it is a working app. The user will be able to nativate through the website to see the current temperature in the Laurentians and a list of the climbs in the area with information about it. 