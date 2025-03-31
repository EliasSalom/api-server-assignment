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


```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
