# EventTrackerProject

# Description

This is a full-stack application that allows users to look up information about existing arcades. People can also create and share new arcades that they discover locally or during travel. Users can also update existing arcade information, play a select few games in the arcade, and will someday be able to add new games to an arcade's games library, as well as add or delete comments on an arcade's page.

# API Calls

|  **HTTP Verb** | **URI**                          | **Request Body**                  | **Response Body**                               |
| :---           |        :----:                    |     :----:                        |                                           :---: |
| ```GET```      | ```/api/arcades```               |             ```-```               | JSON ```List<Arcade>```                         |
| ```GET```      | ```/api/arcades/1```             |             ```-```               | JSON ```Arcade``` with ```id``` of "1"          |
| ```GET```      | ```/api/arcades/search/arcade``` |             ```-```               | JSON ```Arcade``` with ```name``` like "arcade" |
| ```POST```     | ```/api/arcades```               | JSON of new ```Arcade```          | JSON created ```Arcade```                       |
| ```PUT```      | ```/api/arcades/1```             | JSON of updated ```Arcade```      | JSON updated ```Arcade```                       |
| ```DELETE```   | ```/api/arcades```               |                 ```-```           |                   ```-```                       |

# Technologies
- Angular
- TypeScript
- Eclipse
- REST API
- Postman
- JUnit
- Java
- JavaScript
- HTML
- CSS
- BootStrap
- MySQL
- SQL
- MYSQL Database
- MYSQL WorkBench
- Hibernate
- Spring Boot
- Spring Data JPA
- Gradle
- Tomcat Server
- AWS
- Command Line
- Atom Text Editor
- Git
- GitHub

# Lessons Learned

The first part of this project was building out the backend and database. Having moved on to Spring Data JPA, this project provided a great opportunity to get more familiar with ```Service``` and ```Repository``` which extends ```JpaRepository``` as well as the list of methods provided by these new annotations and interfaces. I also got more practice with building out entities, writing ```CRUD``` operations to add and manipulate data in the database, and testing each entity mapping using ```JUnit```. ```TDD``` (Test Driven Development) has been crucial for ensuring that each step of development is sound before moving on to the next. Speaking of databases, I did not get a chance to build a database in my previous project, so I finally got more hands-on with ```MySql Workbench``` and built out a database for my entities. With ```CRUD``` operation logic and the database out of the way, it was time to map all of these through REST annotated controllers. After ```@Autowire```ing in my ```Service``` and ```Repository```, I wrote all of my mappings (```Get```, ```Post```, ```Put```, ```Delete```, etc.). I took this opportunity to learn about ```HttpServletResponse```s and ```HttpServletRequest```s, which allowed me to change the response status when an action is successful or not, and use ```StringBuffer``` to generate a url and append its corresponding query parameters. Finally, with the backend looking solid, I used ```Postman``` to test all of my mappings and statuses were correctly implemented.

With some JavaScript under my belt, I implemented logic which allows JavaScript to communicate with the back-end using ```AJAX``` and ```XMLHttpRequests```. I learned not only the fundamental syntax for JavaScript, but also the incredible flexibility it provides. I was able to build a ```Single Page Application``` which displays and hides ```div``` containers which hold content within by targeting their display properties. Another major milestone with this project was working with the ```Document Object Model (DOM)``` and learning how to use ```Chrome developer tools``` to not only ```debug``` in the ```console```, but also get a better look at the document's overall ```hierarchy``` in the ```elements``` tab. Doing so allowed me to map out routes which I could traverse the DOM and retrieve parent/child data, even through roundabout ways such as permanently hidden divs that are specifically used to transfer entity ids from one party to another. This newly discovered tool has proven itself invaluable and I'll be using it from here on out to increase debugging efficiency. ```XMLHttpRequests``` allowed me to parse to and from ```JavaScript Object Notation (JSON)``` in the form of Http Requests and Responses with the back-end. The final noteworthy item is my introduction to ```HTML Canvas```. I walked through a few tutorials to learn how to implement animated background and shapes for the desired effect based on keyframes. The third weekend working on this project had me transition to an Angular front-end. This was a great learning opportunity and a chance to put my newly acquired skills and knowledge to the test. The end result is very much still a work in progress, but I am particularly proud of the table that I was able to put together.
