var configService = require("../../service/configService.js")
var whiteListedChannelList = ['in.ekstep', 'abcd']
var blackListedChannelList = ['xyz', 'zxy']
var allowedChannels = whiteListedChannelList
var blackListedChannels = blackListedChannelList

var searchString = {}
var req = require('request')

var mockAllowed = whiteListedChannelList
var mockErrResponse = true


describe('getChannelSearchString', function () {
    process.env.sunbird_content_service_whitelisted_channels_new = ['in.ekstep'];
    console.log("whitelisted", process.env.sunbird_content_service_whitelisted_channels_new)
    process.env.sunbird_content_service_blacklisted_channels_new = ['sun.channel']

    describe('generateChannelSearchString for allowed channels', function () {

        it('allowed channels exists', function () {
            expect(allowedChannels.length).toEqual(2)
            expect(whiteListedChannelList).toBeDefined()
        })

        it('check the return value', function () {
            function getChannelSearchString(req, callback) {
                setTimeout(function (callback) {
                    callback()
                }, 1000)
            }
        })

        it('if allowedchannels is greater than 0', function () {
            searchString = allowedChannels;
            expect(allowedChannels).toBe(whiteListedChannelList)
            expect(allowedChannels.length).toBeGreaterThan(0)
            expect(searchString).toEqual(allowedChannels)
        });

        if (allowedChannels) {
            it("for allowed Channels", function () {
                searchString = allowedChannels
                expect(allowedChannels).toEqual(searchString)
            });
        } else {
            it("for blacklisted channels", function () {
                searchString = { 'ne': blackListedChannels }
                expect(blackListedChannels).toEqual(searchString)
            });
        }
    });
    describe('generate Channel String for blacklisted channels', function () {

        it('blackListed channels exists', function () {
            expect(blackListedChannels.length).toEqual(2);
            expect(blackListedChannels).toBeDefined();
        });

        it('check the return value', function () {
            whiteListedChannelList = ['fsdfsd', 'fdsfds']
            blackListedChannelList = ['fdsf', 'fsdfdsfdasfsadf']
            spyOn(getChannelSearchString, 'generateChannelSearchString')
            getChannelSearchString.generateChannelSearchString(whiteListedChannelList, blackListedChannelList)
            expect(getChannelSearchString.getChannelSearchString).toHaveBeenCalled()
        });
    });
});
