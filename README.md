# Deno-Blog-API

> Markdown Blog API endpoint using Deno

CRUD Markdown Blog posts.

## Viewing Logs on cli
> heroku logs --tail -a deno-blog-api

## Directories

### Controllers

Hold the JS files that will handle the requests arriving,
the further calls to the services and below layers and,
finally, the delivery of the responses. All of those
objects are inherited from Deno, so you don’t need to
worry about whether you’ll need to handle requests/responses
manually.

### db

The folder hosting our SQL script of creation and the
direct connection to our Postgres database.

### Repositories

These JS files will handle the management of the database
operations. Each create, delete, or update will take place,
in its logic, here.

### Services

These are the files that will handle the business logic
of our operations, such as validations, transformations
over the data, etc.

##### TODO

- [x] Setup end point
- [x] Handle post request for creating posts
- [x] Handle get request for posts
- [x] Handle delete request for post
- [x] Handle put request for updating post
- [x] Deploy it!

