On may 1 2022 I started to learn Web development What I know until this point has been thanks to great communities on Youtube as FreeCodeCamp, Scrimba and Front end Masters. I started learning the basics. Html, css and javascript. After weeks and dozens of weird looking pages I wanted to create something that I really could use.

After creating I can't remember how many hardcoded pages I got curious if there was a way of doing something about that. I went to google and somehow I found out about Reacts and saw the potential that it had. I started to learn and practice with the basics like components, props, state, effects, etc. this project is the results of hours of practicing and studying. I'm still everyday looking for a way to get better.

# This is JuliCooks a web recipe page.

This project was created using ReactsJS, Sass and firebase. It was created to fullfil a need that my girlfriend and I have witch is that we lose the recipes that we like all the time.

### I started the project using Figma to conceptualize the idea I had in mind.

![Screenshot_2](https://user-images.githubusercontent.com/105512009/184285585-851d549a-6c4a-468f-8778-1f7b9f0c15a5.png)

## React Js

The structured of folder I've been using so far 

![Screenshot_3](https://user-images.githubusercontent.com/105512009/184289903-6c2f8460-be3d-4b6c-87e2-7f6fbcba069c.png)

### Landing Page 

I created using SwiperJs two sections where the firts one will show the last 8 recipes created, and the second one the last 8 desserts, this is filtered using query from firebase, limit and order by the last added recipes to the collection, inside the swiper there's a component being render with the img and title from the call to firestore collection.

![home](https://user-images.githubusercontent.com/105512009/184291607-38fb0276-ab40-41ad-bce3-aab56cefcb0f.png)

### Recetas

this section of the page will only show the recipes, after clicking the show more button it will make a call for the next 4 docs and after reaching the end it will show a message that there is no more recipes left. As before the cards in this page is a component being render based on the data received from the call to firestore.

![recetas](https://user-images.githubusercontent.com/105512009/184291666-3bd70642-bb12-4d3d-8dd3-7b80fc7267d4.png)

### Postres

this section will only show the desserts, with the use of query firestore it's just sending the docs on my collection that has the field Postre == true; 

![screenshot](https://user-images.githubusercontent.com/105512009/184291734-729045d7-edc4-46d5-8232-da2a710399d6.png)

### Details 

Using params from react-router-dom I can get the id of the card that was clicked and make a call to the database and store that data in a state that I can use to render the details of the recipe.

![ff](https://user-images.githubusercontent.com/105512009/184291957-2dbafc79-e253-4fa8-8e66-851165dcfc7e.png)

# Mobile


<img src="https://user-images.githubusercontent.com/105512009/184296030-dd202a13-f2b2-46d1-a6cf-a91e421f744d.jpeg" width="300">
<img src="https://user-images.githubusercontent.com/105512009/184296037-2e4e8225-ea79-4dde-98ce-68a8b70dc378.jpeg" width="300">
<img src="https://user-images.githubusercontent.com/105512009/184296043-8e7dcd29-196a-4d7c-a36d-0919972c265b.jpeg" width="300">
<img src="https://user-images.githubusercontent.com/105512009/184296308-1ed67017-41b2-484b-8d87-efda81843199.jpeg" width="300">


I am trying to learn as much as possible everyday.

There's more work to be done.

