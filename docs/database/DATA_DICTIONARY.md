# Data Dictionary
Description a database schema for users.

### Table User
| PK/FK | Column | Data Type | Description | Check | Value Default
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| PK  | code_user | `INT` | code that will differentiate users. | `NOT NULL`
| | email | `VARCHAR(80)` | email of the user that will serve to login. | `UNIQUE`, `NOT NULL`
| | name | `VARCHAR(50)` | name of user | `NOT NULL`
| | password | `CHAR(32)` | enctrypted password in MD5 | `NOT NULL`
| | status | `BOOLEAN` | flag that will indicate user is active (`true`) or not (`false`) | `NOT NULL` | `TRUE`

### Table Post
| PK/FK | Column | Data Type | Description | Check | Value Default
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| PK | code_post | `INT` | code that will differentiate posts. | `NOT NULL` | 
| PK, FK | code_user | `INT` | user code that posted | `NOT NULL` |
| | title | `VARCHAR(80)` | title of post | `NOT NULL`
| | body | `TEXT(1000)` | post body in `MARKDOWN` format | `NOT NULL`
| | views | `INT` | post views counter | `NOT NULL` | 0
| | date_creation | `DATETIME` | post creation date | `NOT NULL` | `DATETIME.NOW()`
| | date_modification | `DATETIME` | post modification date | | 
| | status | `BOOLEAN` | flag that will indicate post is deleted (`false`) or not (`true`) | `NOT NULL` | `TRUE`

### Table Tag
| PK/FK | Column | Data Type | Description | Check | Value Default
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| PK | code_tag | `INT` | code that will differentiate tags. | `NOT NULL` |
| | title | `VARCHAR(30)` | tag title. | `UNIQUE`, `NOT NULL` |
| | status | `BOOLEAN` | flag that will indicate tag is deleted (`false`) or not (`true`) | `NOT NULL` | `TRUE`

### Table PostTag
| PK/FK | Column | Data Type | Description | Check | Value Default
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| PK, FK | code_post | `INT` | post code. | `NOT NULL` |
| PK, FK | code_tag | `INT` | tag code . | `NOT NULL`
| | status | `BOOLEAN` | flag that will indicate post tag is deleted (`false`) or not (`true`) | `NOT NULL` | `TRUE`