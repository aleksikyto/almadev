# Almadev practice 
Web application for saving and listing users favorite types of coffee / tea

# Getting Started 

To run this application you need Mongo Database `https://www.mongodb.com/atlas/database`

Clone repository
```
git clone https://github.com/aleksikyto/almadev.git
```

## To run web application
1. Move to backend directory
``` 
cd backend
```

2. Install npm packages
```
npm i
```

3. Add your own Mongo Database url & possible port you wish to use to `.env` file ( REACT_APP_TEST_MONGODB_URI only for test cases )
`REACT_APP_MONGODB_URI=mongodb+srv://almadev:<YOUR_PASSWORD>@cluster0.i6bi0kp.mongodb.net/almaDevApp?retryWrites=true&w=majority`
`REACT_APP_TEST_MONGODB_URI=mongodb+srv://almadev:<YOUR_PASSWORD>@cluster0.i6bi0kp.mongodb.net/testApp?retryWrites=true&w=majority`
`REACT_APP_PORT=<YOUR_PORT>`


4. Start backend 
```
npm start
```

## To run frontend locally

1. Move to frontend directory
```
cd frontend
```

2. Install npm packages
```
npm i
```

3. Modify base url in `src/services/favorites.js` if using dirrerent port
```
const baseUrl = "http://localhost:<YOUR PORT>api/favorites"
```

4. Run the appliocation
```
npm start
```

## Credits
In this project I used things learned from
```
https://fullstackopen.com/
```
Also got tips for dropdown from
```
https://www.simplilearn.com/tutorials/reactjs-tutorial/how-to-create-functional-react-dropdown-menu
```
