/* jshint esversion: 6 */

function inputfocus() {
    document.getElementById('input').focus();
}

function clearOutput() {
    document.getElementById('about').classList.remove('active');
    document.getElementById('projects').classList.remove('active');
    document.getElementById('contact').classList.remove('active');
    document.getElementById('fail').classList.remove('active');
    document.getElementById('fail').textContent = '';
}

function showAbout() {
    clearOutput();
    document.getElementById('about').classList.add('active');
}

function showProjects() {
    clearOutput();
    document.getElementById('projects').classList.add('active');
}

function showContact() {
    clearOutput();
    document.getElementById('contact').classList.add('active');
}

function setTheme() {
    const html = document.getElementById('html').classList;
    console.log(document.getElementById('switch').value);
    if(document.getElementById('switch').checked === true) {
        html.add('dark');
        return ;
    }
    html.remove('dark');
}

document.addEventListener('keyup', function (event) {
    const inputValue = document.getElementById('input').value.toLowerCase();
    const inputClasslist = document.getElementById('input').classList;
    if(inputValue === 'about' || inputValue === 'projects' || inputValue === 'contact') {
        inputClasslist.add('valid');
        if (event.key === 'Enter') {
            clearOutput();
            document.getElementById(inputValue).classList.add('active');
            document.getElementById('input').value = '';
        }
        return;
    }

    if(inputValue === 'clear') {
        inputClasslist.add('valid');
        if (event.key === 'Enter') {
            clearOutput();
            document.getElementById('input').value = '';
        }
        return;
    }

    inputClasslist.remove('valid');
    if (event.key === 'Enter') {
        clearOutput();
        document.getElementById('fail').classList.add('active');
        document.getElementById('fail').textContent = '' + inputValue + ': command not found';
        document.getElementById('input').value = '';
    }
});

console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
console.log(' ');
console.log('If you are interested in code, visit my GitHub repositories.');
console.log('https://github.com/Mxxibtw/');
console.log(' ');
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');