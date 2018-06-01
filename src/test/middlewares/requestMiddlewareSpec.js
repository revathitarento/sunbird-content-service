var configService = require('../../service/configService')
var req = require('request')

mockSuccesResponse = {
    id: "api.v1.search",
    params: { resmsgid: "b131b010-6576-11e8-acde-61b03635ae59", msgid: "b10f8210-6576-11e8-a86b-a1a09e4aff25" },
    responseCode: "OK",
    result: [{
        appId: "qa.ekstep.in",
        channel: "in.ekstep"
    }, {
        appId: "qa.ekstep.in",
        channel: "in.ekstep"
    }]
}

mockErrResponse = {
    id: "api.v1.search",
    params: { resmsgid: "b131b010-6576-11e8-acde-61b03635ae59", msgid: "b10f8210-6576-11e8-a86b-a1a09e4aff25" },
    responseCode: "OK",
    statusCode: "500",
    error: "CLIENT_ERROR",
    result: ''
}

describe("filter of channels", function () {
    it('check getchannelsgetChannelSearchStringearchstring function', function () {
        spyOn(configService, 'getChannelSearchString').and.callFake(mockErrResponse);
        // setTimeout(() => {
            configService.getChannelSearchString(req, mockErrResponse);
        // }, 100);
      
        // expect(configService.getChannelSearchString).toHaveBeenCalled();
        expect(mockErrResponse.statusCode).toBe(500)
        expect(mockErrResponse.error).toBeDefined()
    })
})

// describe("Testing for error response", function() {
// it('get Channel to be called with error', function() { 
//     spyOn(configService, 'getChannelSearchString').and.throwError();
//     configService.getChannelSearchString();
//     expect(configService.getChannelSearchString).toHaveBeenCalled();
// } );

// });