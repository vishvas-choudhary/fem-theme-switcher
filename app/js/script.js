 const radiobtns = document.querySelectorAll('.toggle__wrapper input');
 radiobtns.forEach(btn => {
    btn.addEventListener('click', e => {
        if(document.getElementById('dark').checked) {
            document.querySelector('body').classList = 'dark';
         } else document.querySelector('body').classList = 'light';
    })
 })
 
