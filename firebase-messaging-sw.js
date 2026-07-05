importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAmyELH7Ko0leRHec6338BEfcd1aOz31zQ",
  authDomain: "kofe-chek.firebaseapp.com",
  projectId: "kofe-chek",
  storageBucket: "kofe-chek.firebasestorage.app",
  messagingSenderId: "197452688420",
  appId: "1:197452688420:web:6af05be296aa99963fbcb1"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const title = (payload.notification && payload.notification.title) || 'Кофе Чек';
  const options = {
    body: (payload.notification && payload.notification.body) || '',
    icon: undefined
  };
  self.registration.showNotification(title, options);
});
