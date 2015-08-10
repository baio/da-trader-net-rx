/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="../dist/index.d.ts"/>
import chai = require('chai'); 
import traderNetRx = require('../dist/index');
var expect = chai.expect;

const TRADER_NET_URL = process.env.TRADER_NET_URL || 
process.env.npm_config_TRADER_NET_URL || 
process.env.npm_package_config_TRADER_NET_URL;

const TRADER_NET_API_KEY = process.env.TRADER_NET_API_KEY || 
process.env.npm_config_TRADER_NET_API_KEY || 
process.env.npm_package_config_TRADER_NET_API_KEY;

const TRADER_NET_SEC_KEY = process.env.TRADER_NET_SEC_KEY ||
process.env.npm_config_TRADER_NET_SEC_KEY ||
process.env.npm_package_config_TRADER_NET_SEC_KEY;

describe("tests traderNetRx",  () => {

	it("connect / disconnect to trader-net server",  (done) => {
		var tn = new traderNetRx.TraderNet(TRADER_NET_URL);
		var opts : traderNetRx.ITraderNetAuth = {
			apiKey: TRADER_NET_API_KEY,
			securityKey: TRADER_NET_SEC_KEY 
		}			
		tn.connect(opts).subscribe(res => {
			expect(res).eqls({ login: 'max.putilov@gmail.com', trade: false, mode: 'demo' });			
			tn.disconnect();
			done();	
		})																															
	})		
}) 
