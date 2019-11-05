const app = require('./app');

async function main(params) {
    app.listen(3000);
    console.log('Server is running');
}

main();