# EventTrackerProject

# Description

This is a full-stack application that allows users to look up information about existing arcades. People can also create and share new arcades that they discover locally or during travel. Users can also update existing arcade information, add new games to an arcade's games library, add or delete comments on an arcade's page.

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
- Eclipse
- REST API
- Atom Text Editor
- Postman
- JUnit
- Java
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
- Git
- GitHub

# Lessons Learned

The first part of this project was building out the backend and database. Having moved on to Spring Data JPA, this project provided a great opportunity to get more familiar with ```Service``` and ```Repository``` that extends ```JpaRepository``` as well as the list of methods provided by these new annotations and interfaces. I also got more practice with building out entities, writing ```CRUD``` operations to add and manipulate data in the database, and testing each entity mapping using ```JUnit```. ```TDD``` (Test Driven Development) has been crucial for ensuring that each step of development is sound before moving on to the next. Speaking of databases, I did not get a chance to build a database in my previous project, so I finally got more hands-on ```MySql Workbench``` and built out a database for my entities. With ```CRUD``` operation logic and the database out of the way, it was time to map all of these through REST annotated controllers. After ```@Autowire```ing in my ```Service``` and ```Repository```, I wrote all of my mappings (```Get```, ```Post```, ```Put```, ```Delete```, etc.) I took this opportunity to learn about ```HttpServletResponse```s and ```HttpServletRequest```s, which allowed me to change the response status when an action is successful or not, and use ```StringBuffer``` to generate a url and append its corresponding query parameters. Finally, with the backend looking solid, I used ```Postman``` to test all of my mappings and statuses were correctly implemented.
