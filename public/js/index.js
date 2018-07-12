document.addEventListener('DOMContentLoaded', function() {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
  } catch (e) {
    console.error(e);
    document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
  }
});

console.log('THIS IS THE INDEX SCRIPT', $);

$('#template-calendar').load('part/calendar.html');
$('#template-language-switcher').load('part/language-switcher.html');
$('#template-navbar-loc').load('modules/web-ex/03_navbar/public/part/navbar.html');
$('#template-table-loc').load('modules/web-ex/04_table/public/part/table.html');
$('#dish-menu-template-loc').load('modules/web-ex/05_diner_menu/public/part/diner-menu.html');

var $item = $('#template-table-loc');
$('#import-box').load('modules/web-ex/06_box/box.html');
$('#import-paper').load('modules/web-ex/07_paper/paper.html');
$('#import-layout').load('modules/web-ex/08_layout/layout.html');
$('#import-side-menu-black').load('modules/web-ex/side-menu-black/side-menu-black.html');
