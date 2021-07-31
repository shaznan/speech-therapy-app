# Section Breakdown and Scope of Functionalities

![ReadTime](https://img.shields.io/badge/Readtime-2mins-orange.svg)


## :house: Homepage 

Introduce speech therapy, Make user understand Brain Fog with homepage content as well as few handpicked article contents & Engage user to perform test or write an article 

## :busts_in_silhouette: About us 

Convey organisation's goal, culture and introduce the team

## :page_facing_up: Articles 

Help user to educate on Brain Fog and related issues

**Features**: 

- Write Articles using react-draft-wysiwyg editor. <br>
- Delete article if user is author of the article. 
- View verified articles wriiten by experienced psychologists <br>
- View articles written by the community <br>

> *Todo*: 
- [ ] Edit article if user is author. <br>
- [ ] Drag and drop local images in write articles editor instead of copy & paste URL
- [ ] introduce comments and likes on articles to increase user engagement. 

## :books: Bookstore 

Monetizing part of the project through drop shipping books from other book stores offering BrainFog related products for a cheaper price. 

**Features**:

- Search books using title
- view books relating to chosen catergory.    *(Shopify-buy SDK to fetch all products)*
- view book description in detail.     *(Next-js dynamic pages)* 
- Add upto 5 items to cart at a time.     *(Shopify-buy sdk addItems to checkout)* 
- Delete items from cart.  *(Shopify-buy sdk remove items from checkout)*
- Retain checkout items after re-login.

> *Todo*:
- [ ] Wishlist 
- [ ] Edit items in cart - qty selected
- [ ] Introduce discounts: buy 4 get one free, percentage off and coupon code. 
- [ ] User reviews 
- [ ] Rank items based on top selling
- [ ] option for downloading pdf version of book item.

## :game_die: PerformTest 

Main section of the project, run series of test to determine if user is victim of brain fog.

**Features**:

- Carry out semantic fluency tests - *generate semantic category exemplars*
- phonemic fluency - *generate words beginning with a single letter*
- View current score status: 
  1. Change over prev score
  2. Average score
  3. Score Avg Criteria
  4. High Score
- Compete with others through social ranking
- Analyze performance over time using a graphical line-chart over view. *(Chart-js)*

> *Todo*:

- [ ] Display words spoken during the test after being analyzed.
- [ ] Stop recording time when user has run out of words instead of waiting for allocated time to finish. 
- [ ] Provide certificate of brainfog proof when user reaches a certain average score. 
- [ ] Suggest books from book store when displaying results based on user scores.
- [ ] Suggest verified articles when displaying results based on user scores. 
- [ ] Puzzle's to solve within a given period of time to evaluate mind focus. 
- [ ] Guess the word tests to analyze memory.  
- [ ] Other form of tests to imporove mental clarity.

## :iphone: Contact us 

Allow user to communicate with the team. 

## :lock: Authentication 

User sign in if existing user or sign up if new user. 
<br>
Authenticate if user is Admin based on user roles. 

> *Todo*:

- [ ] Google sign-in 

## :cop: Admin Panel 

Make changes to app state through the admin panel GUI.

**Features**:

- Restrict route access to admin page if user is not admin.
- Verifiy actions in admin dashboard by checking if user is admin from the backend and only then perform read, write actions.
- Delete user Articles
- Add, delete or modify products in bookstore by being redirected to shopify admin panel
- Add perform test topic catrgories and list of items belonging to that catergory for comparison. 

> *Todo*: 
 - Delete perform test catergories
 - ban user from writing article, or performing test. 









