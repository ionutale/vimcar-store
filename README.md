# Vimcar Coding Challenge

Welcome to the Vimcar Coding Challenge!

The challenge is here to get a basic understanding of your current knowledge and skills. We want to see how you think and solve common problems.

Feel free to use any frameworks/libs of your liking to achieve this.

## Rationale

Notice that this challenge has nothing to do with what we do, it's rather an experiment to see how you structure your application and how you solve typical problems.

## What should be done

We want to have the best shop! Each team provided their requirements for the new shop system. Everybody agrees that users must buy as much as possible. Of course we'll need a virtual shopping cart. They can add items. According to Accounting removing items hurts the bottom line. The user must not remove items from the cart. Marketing says filling out forms and spending money hurts the conversion rate. So NO FORMS! Stock is limited. That's why the Backend decided to create a stock management. It's a bit glitchy, but we'll need to believe what ever the backend service tells us.

We need the following features:

- When a user clicks on an item it should be added to their cart
- The user should see the number of items they are buying.
- Stick to the [design](https://github.com/vimcar/frontend-challenge/tree/master/design)

## Implementation details

To validate that there are enough items in stock, you should use the backend. We implemented a mock for `fetch`. You may use it in your implementation. It's located in [the `/api/mock.js` module](https://github.com/vimcar/frontend-challenge/tree/master/api/mock.js).

The API specification can be found [here](https://github.com/vimcar/frontend-challenge/tree/master/api.swagger.yml). You can use the online [Swagger editor](http://editor.swagger.io/) to view it.

## Rules

- You are allowed to use a quickstarter repo to get started quickly, e.g. [create-react-app](https://github.com/facebookincubator/create-react-app).
- Have fun!



### Ion Notes

- used the CRA because i like it as a boilerplate
- ejected the app to use css modules
- the items in the store are created dynamicaly based on the api response
- for the items list in the store i used the diasplay: flex and center all the items
    on desktop looks a bit weird, but this way on smaller screen desn't give the feeling items are not aligned properly

- the graphic is not identical but close enough. to improve the graphic at this point 
        i usually talk with the: client, designer, project manager ..etc
- added test for all the components
- some of the components are stateless, because they need no state ( even if use redux )
- product images placed in the public directory to simulate a CDN or server public directory
- the mock had no get method, added one with just 2 cases: 1 wehen everything is great, 1 when something whent wrong
- created a mockItems array to mock a api json response
- for the purchase i used alert as a feed back to the user.
    in normal cases i would talk to client, designer, project manager ..etc and maybe use a notification modal
- added a toolbar, was not in the design but i think with a toolbar the code and the page is much more organized


## missing parts
- better feed back to the user when purchasing items
- error handler
- complete app.js tests
- add test to mock api
- cart page listing all the items and the amount of each
- on mobile the imageCard overlay is showing after the first tap. not sure how is best to handle this.
    case1: on mobile no overlay
    case2: on mobile first tap show the overlay, 2 tap will add item to the cart
    case3: on mobile just show the "add to cart" under the image so the user can press it and add to cart the item



## harderst part
- understanding the mock api. the  *Implementation details* are a bit confusing.

