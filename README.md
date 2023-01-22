# EventTrackerProject

# API Calls

|  **HTTP Verb** | **URI**                          | **Request Body**                  | **Response Body**               |
| :---           |        :----:                    |     :----:                        |                            ---: |
| ```GET```      | :--- ```/api/arcades```          |                                   | JSON ```List<Arcade>```         |
| ```GET```      | ```/api/arcades/1```             |                                   | JSON ```Arcade``` 1             |
| ```GET```      | ```/api/arcades/search/ghost```  |                                   | JSON ```Arcade```               |
| ```POST```     | ```/api/arcades```               | JSON of new ```Arcade```          | JSON created ```Arcade```       |
| ```PUT```      | ```/api/arcades/1```             | JSON of updated ```Arcade```      | JSON updated ```Arcade```       |
| ```DELETE```   | ```/api/arcades```               |                                   |                                 |
