import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyDSYKjrcGsFlLuV3DlyLP2uZhxj6HiLmvA',
  authDomain: 'curso-react-8bea4.firebaseapp.com',
  databaseURL: 'https://curso-react-8bea4.firebaseio.com',
  storageBucket: 'curso-react-8bea4.appspot.com',
  messagingSenderId: '486631775886'
})

import App from './components/App'

render(<App />, document.getElementById('root'))
