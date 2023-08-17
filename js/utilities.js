// style button function 
function makeStyle(id, style) {
    document.getElementById(id).addEventListener('click', function (event) {
        const target = event.target.parentNode;
        const textElement = document.getElementById('text');
        if (textElement.className.includes(style)) {
            target.style.background = '';
            return textElement.classList.remove(style);
        } else {
            textElement.classList.add(style);
            target.style.background = 'gray';
        }

    })
}

function makeAlign(id, style) {
    document.getElementById(id).addEventListener('click', function (event) {
        const target = event.target.parentNode;
        const textElement = document.getElementById('text');
        if (textElement.className.includes(style)) {
            target.style.background = '';
            return textElement.classList.remove(style);
        } else {
            textElement.classList.add(style);
            target.style.background = 'gray';
            if (id === 'left') {
                document.getElementById('right').style.background = '';
                textElement.classList.remove('text-right');
                document.getElementById('center').style.background = '';
                textElement.classList.remove('text-center');
            } else if (id === 'center') {
                document.getElementById('right').style.background = '';
                textElement.classList.remove('text-right');
                document.getElementById('left').style.background = '';
                textElement.classList.remove('text-left');
            } else if (id === 'right') {
                document.getElementById('center').style.background = '';
                textElement.classList.remove('text-center');
                document.getElementById('left').style.background = '';
                textElement.classList.remove('text-left');

            }
        }

    })
}