import  * as hapi  from "hapi";

 const server = new hapi.Server({
    host:"localhost",
    port:3000
});


const init = () => {
     server.start().then(
         (res) => {
            console.log(`res `,res);
         },
         (err) => {
            console.error(err)
         }
     );
    console.log(`Server running at: ${server.info.uri}`);

}

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'Hello, world!';
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, h) => {
        return 'Hello, ' + encodeURIComponent(request.params.name) ;
    }
});


init();