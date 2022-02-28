///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//code here
const summPrice = cart.reduce((acc, curr) => acc + curr,0)

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let finalPrice = cartTotal + (cartTotal * tax) - couponValue
    console.log(cartTotal * tax)

    return finalPrice
}

console.log(calcFinalPrice(15,3, .05))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
I would make a object simular to array above that has a list of different properties that can be extracted in a simular way to the way that price was extracted from the problem above. I would use the costomers payment amount, the costomers name, email so you can sell their data, and address we can send them lots of adds.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const costomerData = [
    {
        name: 'pizza', 
        price: 9.99,
        address: '109302 s that one street',
        email: 'thename.gmail'
    }, 
    {
        name: 'pasta', 
        price: 8.99,
        address: '109302 s that one street',
        email: 'email@gmail.com', 
    }, 
    {
        name: 'salad', 
        price: 7.99,
        address: '109302 s that one street',
        email: 'anemail@gmail.com', 
    }
]