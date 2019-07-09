const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const request = require('request');

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/author/:id', (req, res) => {
        var apiUrl = 'https://jsonplaceholder.typicode.com/users/' + req.params.id;

        request(apiUrl, function (error, response, body) {
            var authorDataName = "";

            if (error) {
                return next(error);
            } else if (!error && response.statusCode == 200) {
                const data = JSON.parse(body);
                if( data.name ){
                    authorDataName = data.name;
                }
            } else {
                authorDataName = "Author Page";
            }

            const actualPage = '/AuthorPosts';
            const queryParams = { authorId: req.params.id, authorName: authorDataName };
            app.render(req, res, actualPage, queryParams);
        });
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });