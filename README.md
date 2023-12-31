## GraphQL

- GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.
- GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

## GraphQL vs REST

- REST is an architectural style for building APIs.
- GraphQL is a query language for APIs.
- In REST, `GET, POST, PUT, PATCH, and DELETE` are actions to perform on the resources.
- In GraphQL, you can perform `query, mutation, and subscription` on the resources.
- In REST, you can only send a single request to the server at a time.
- In GraphQL, you can send multiple queries, mutations, and subscriptions to the server in a single request.

### QUERY

- In GraphQL, Query is the way using which you can get the data from the server, same as GET method in REST.

### MUTATION

- In GraphQL, Mutation is the way using which you can add, update, and delete the data from the server, same as POST, PUT, PATCH, and DELETE method in REST.

### SUBSCRIPTION

- In GraphQL, Subcription is way to retrieve data just like query, but it will keep the connection alive and send the data to the client whenever there is a change in the data that the client has subscribed to.
- In REST, you can use WebSockets to achieve the same functionality.

### SCHEME

- In GraphQL, Schema is the way to define the data structure of the data that you can send and receive from the server.

### RESOLVER

- In GraphQL, Resolver is function that is responsible for providing data to each field that is defined in the Schema. Resolver data can come from any source like database, cache, or any third party API.

