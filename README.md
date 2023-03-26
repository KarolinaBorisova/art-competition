# Art competition

### React application


> Art competiton is applicaiton used in kindergardens and preschools for holding a drawing competitons. Users can easely register and login.
> Registered users can add drawings with author`s information. Also registered users can vote for drawings, except for those they created.
> Еach drawing falls into a different category depending on which kindergarden group the child is.


## Project overview

### Home page
> Home page contains gallery with all drawings.
![home](https://user-images.githubusercontent.com/85222435/227804340-5344bbad-fff5-49bd-9000-613a0d7fa126.png)


### Login page

![login](https://user-images.githubusercontent.com/85222435/227804353-e070fdcf-b3ac-4f71-bea6-13aae398a070.png)

### Categories
>The categories are divided by kindergarden`s age groups. 
>Each category lead you to the specific group gallery.
![categories](https://user-images.githubusercontent.com/85222435/227804381-6d481cfb-293c-4274-b436-ecc8b7eb138f.png)


### Group gallery
>In group gallery there are drawings with information about their artist and votes.
>User drawings are marked with yellow border.
![gallery](https://user-images.githubusercontent.com/85222435/227804390-033aa15c-7090-4f35-8942-476ce771691b.png)

### Drawing details
>Click on the drawing and you can see details and different options. 
>User can edit and delete. Others can vote for the drawing.
![detail](https://user-images.githubusercontent.com/85222435/227804395-34b5e754-14a2-428b-b7d3-94f866832918.png)
![detail](https://user-images.githubusercontent.com/85222435/227804400-f4f48351-27b3-4073-8a5c-6db12e1c18e5.png)


## Project structure

- Components
>In this folder are all of the function components used in the app.

![components](https://user-images.githubusercontent.com/85222435/227801576-f9ee83e6-1dd7-4896-bc6c-1b56b91c57a0.png)

- Common

![common](https://user-images.githubusercontent.com/85222435/227802106-3f5e235f-da85-4b39-abd6-c1ae78d79546.png)

- Contexts

![contexts](https://user-images.githubusercontent.com/85222435/227802173-fa36b417-9fbe-48fc-8078-c6a0879ebf52.png)

- Hooks
>This folder contains the hook which is responsible for authentication data persistence.
![hooks](https://user-images.githubusercontent.com/85222435/227802183-f4ed33e3-cc24-4593-bbb0-5cb810a6d531.png)

- Services
>This folder contains the services responsible for the requests to server.
![services](https://user-images.githubusercontent.com/85222435/227802200-d9a01dbd-ac4a-4278-bc68-16c4591f716d.png)

- Validators

![validators](https://user-images.githubusercontent.com/85222435/227802210-f4c380fc-172a-4c9b-bee9-e078584c950b.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##  In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### This app uses softuni prictice server : [ https://github.com/softuni-practice-server/softuni-practice-server ]

To start the server manually open a command prompt and run node server.js.