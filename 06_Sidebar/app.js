const sidebarToggle = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar');
const btnClose = document.querySelector('.btn-close');

// show sidebar
sidebarToggle.addEventListener('click', function() {
    
    sidebar.classList.toggle('show-sidebar');
    
    // if (sidebar.classList.contains('show-sidebar')) {
    //     sidebar.classList.remove('show-sidebar');
    // } else {
    //     sidebar.classList.add('show-sidebar');
    // }
    
});

// close sidebar
btnClose.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
});