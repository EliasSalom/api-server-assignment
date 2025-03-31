# NestJS TypeScript Server Test

### Run Project
to run the project you need to have the following installed:
1. be in the root directory of the project
2. run the docker build `docker build -t server -f docker/server.dockerfile .`
3. start the docker container `docker run -p 3000:3000 -t server`
4. open your browser and go to `http://localhost:3000/`
5. you should see the message *Server is running*


### endpoints
>localhost:3000

| Method | Endpoint            | Description                      | params |
|:-------|:--------------------|----------------------------------|:------:|
| GET    | /                   | Health check                     |  283   |
| POST   | /login              | login                            |        |
| POST   | /signup             | signup                           |        |
|        |                     |                                  |        |
| POST   | /cart               | add Product To Cart              |        |
| PATCH  | /cart/{id}          | change Product Amount            |        |
| DELETE | /cart/{id}          | delete Product From Cart         |        |
|        |                     |                                  |        |
| GET    | /product/{id}       | get all product base on category |        |
| GET    | /product/categories | get all categories               |        |
| POST   | /product/categories | create new categories            |        |
| POST   | /product            | create new product               |        |


### objects
```json
{
    "id":"67eb20cd6b53b5f57e0fde7d",
    "action":"decrement",
    "amount": 1
}
```

### Database
> I used MongoDB as a database, i already added the database in the dockerfile


### .ENV
> I already added the `environment` variables in the `dockerfile`
