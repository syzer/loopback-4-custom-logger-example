"use strict";
// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-express-composition
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("./test-helper");
describe('ExpressApplication', () => {
    let server;
    let client;
    before('setupApplication', async () => {
        ({ server, client } = await test_helper_1.setupExpressApplication());
    });
    after('closes application', async () => {
        await server.stop();
    });
    it('displays front page', async () => {
        await client
            .get('/')
            .expect(200)
            .expect('Content-Type', /text\/html/);
    });
    it('displays a static page', async () => {
        await client
            .get('/notes.html')
            .expect(200)
            .expect('Content-Type', /text\/html/)
            .expect(/<h2>Notes/);
    });
    it('gets hello world', async () => {
        await client
            .get('/hello')
            .expect(200)
            .expect('Hello world!');
    });
    it('redirects to "api/explorer" from "api/explorer"', async () => {
        await client
            .get('/api/explorer')
            .expect(301)
            .expect('location', '/api/explorer/');
    });
    it('displays explorer page', async () => {
        await client
            .get('/api/explorer/')
            .expect(200)
            .expect('content-type', /html/)
            .expect(/url\: '\/api\/openapi\.json'\,/)
            .expect(/<title>LoopBack API Explorer/);
    });
});
//# sourceMappingURL=express.acceptance.js.map