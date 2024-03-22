//# Chrome devtools for IceWarp client (IceWarp Web Client)
//document.getElementById('gui.frm_main.stat/3').click(); // Chat 

document.getElementById('gui.frm_main.stat/0').click(); // threads
document.getElementById('gui.frm_main.stat/1').click(); // chat
document.getElementById('gui.frm_main.stat/2').click(); // cal
document.getElementById('gui.frm_main.stat/3').click(); // upload
document.getElementById('gui.frm_main.stat/4').click(); // settings

// create functions from the above
function threads () {
    document.getElementById('gui.frm_main.stat/0').click();
}   
function chat () {
    document.getElementById('gui.frm_main.stat/1').click();
}
function cal () {
    document.getElementById('gui.frm_main.stat/2').click();
}
function upload () {
    document.getElementById('gui.frm_main.stat/3').click();
}
function settings () {
    document.getElementById('gui.frm_main.stat/4').click();
}

// create a function to close the menu
function closeMenu () {
    document.getElementById('gui.frm_main.rslide.settings#btn_close').click();
}

// How to call a function
threads();

//## Conferences

// IM Status types
document.getElementsByClassName('obj_input obj_select_im')[0].click(); // Menu Selection
document.getElementById('gui.frm_main.rslide.im.status').click(); // Status Menu

document.getElementById('gui.frm_main.rslide.im.status')[0].click(); // slider menu options
document.getElementsByClassName('ico im online')[0].click(); // online
document.getElementsByClassName('ico im away')[0].click(); // away
document.getElementsByClassName('ico im dnd')[0].click(); // do not disturb
document.getElementsByClassName('ico im offline')[0].click(); // offline

// Main Window
document.getElementById('gui.frm_main.filter#D').click(); // dashboard
document.getElementById('gui.frm_main.filter#M').click(); // mail
document.getElementById('gui.frm_main.filter#I').click(); // teamchat
document.getElementById('gui.frm_main.filter#E').click(); // calendar
document.getElementById('gui.frm_main.filter#C').click(); // contacts
document.getElementById('gui.frm_main.filter#F').click(); // documents
document.getElementById('gui.frm_main.filter#T').click(); // tasks
document.getElementById('gui.frm_main.filter#N').click(); // notes  
document.getElementById('gui.frm_main.filter#B').click(); // bookmarks
document.getElementById('gui.frm_main.filter#X').click(); // hidden
document.getElementById('gui.frm_main.favorites#main').click(); // favorites

// Chat side panel 
document.getElementById('gui.frm_main.stat/1').click(); // IM


// Main Menu New 
document.getElementById('gui.frm_main.new#main').click(); // Main New
document.getElementById('gui.frm_main.new#mail').click(); // Mail
document.getElementById('gui.frm_main.new#conference').click(); // Conference
document.getElementById('gui.frm_main.new#event').click(); // Event/Appointment
document.getElementById('gui.frm_main.new#note').click(); // Note
document.getElementById('gui.frm_main.new#word').click(); // Document
document.getElementById('gui.frm_main.new#excel').click(); // Spreadsheet
document.getElementById('gui.frm_main.new#powerpoint').click(); // Presentation
document.getElementById('gui.frm_main.new#task').click(); // Task
document.getElementById('gui.frm_main.new#contact').click(); // Contact


// Mail Search 
document.querySelector('[data-hook="placeholder"]').click(); // search bar    

