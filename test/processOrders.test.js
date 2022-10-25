const checkStockLevels = require('../helperMethods/checkStockLevels')
const request = require('request');


describe('Get request test for Orders API', () =>{

    it('tests orders/ end points',async () =>{
        let responseValue;
        await request('http://localhost:3000/orders', function (error, response, body) {
            responseValue = response
            expect(responseValue.body).toHaveLength(959);
            expect(responseValue.statusCode).toBe(200);
        })
       
        
    })
})

describe('Get request test for Orders API', () =>{

    it('tests orders/ end points',async () =>{
        let responseValue;
        await request('http://localhost:3000/orders/1123', function (error, response, body) {
            responseValue = response
            expect(responseValue.body).toHaveLength(270);
            expect(responseValue.statusCode).toBe(200);
        })
       
        
    })
})
describe('Get request test for Orders API', () =>{

    it('tests orders/ end points',async () =>{
        let responseValue;
        await request('http://localhost:3000/orders/11253', function (error, response, body) {
            responseValue = response
            expect(responseValue.body).toHaveLength(24);
            expect(responseValue.statusCode).toBe(404);
        })
       
        
    })
})

describe('Get request test for Orders API', () =>{

    it('tests products/ end points',async () =>{
        let responseValue;
        await request('http://localhost:3000/products', function (error, response, body) {
            responseValue = response
            expect(responseValue.body).toHaveLength(382);
            expect(responseValue.statusCode).toBe(200);
        })
       
        
    })
})

describe('Get request test for Orders API', () =>{

    it('tests products/ end points',async () =>{
        let responseValue;
        await request('http://localhost:3000/products/1', function (error, response, body) {
            responseValue = response
            expect(responseValue.body).toHaveLength(127);
            expect(responseValue.statusCode).toBe(200);
        })
       
        
    })
})

describe('Get request test for Orders API', () =>{

    it('tests products/ end points',async () =>{
        let responseValue;
        await request('http://localhost:3000/products/100', function (error, response, body) {
            responseValue = response
            expect(responseValue.body).toHaveLength(17);
            expect(responseValue.statusCode).toBe(404);
        })
       
        
    })
})
test('check stock levels to see if an order can nbe fulfilled or not',async () =>{
    expect(
        await checkStockLevels('1123')).toBe('1123')
})
test('check stock levels to see if an order can nbe fulfilled or not',async () =>{
    expect(
        await checkStockLevels('1124')).toBe(undefined)
})
test('check stock levels to see if an order can nbe fulfilled or not',async () =>{
    expect(
        await checkStockLevels('1125')).toBe('1125')
})