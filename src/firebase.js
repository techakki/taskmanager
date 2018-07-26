import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDQE9JRoiLAhXwvvokcqXW4DnNyGPEZ2po",
    authDomain: "taskmanager-d63c9.firebaseapp.com",
    databaseURL: "https://taskmanager-d63c9.firebaseio.com",
    projectId: "taskmanager-d63c9",
    storageBucket: "",
    messagingSenderId: "717608447892"
};

export const firebaseApp = firebase.initializeApp(config);

export const tasksRef = firebase.database().ref('tasks');

export const completeTasksRef = firebase.database().ref('completeTasksRef');
