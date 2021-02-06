function toggleDescription(event) {
    event = event || window.event;
    var source = event.target || event.srcElement;
    var next = source.nextElementSibling;
    while (next) {
        if (next.classList.contains('hiddenItem')) {
            next.classList.remove('hiddenItem');
        } else {
            next.classList.add('hiddenItem');
        }
        next = next.nextElementSibling;
    }
}

window.onload = function () {
    document.getElementById(document.getElementsByClassName('content')[0].id + "Button")
        .classList.add('current');
    for (var elem of document.getElementsByClassName('toggler')) {
        elem.addEventListener('click', toggleDescription);
    }
}
