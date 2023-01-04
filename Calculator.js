var screen = document.querySelector('#screen');
const btn = document.querySelectorAll('.btn');
    for (item of btn) {
        item.addEventListener('click', (e) => {
            btntext = e.target.innerText;

            if (btntext == '×') {
                btntext = '*';
            }

            if (btntext == '÷') {
                btntext = '/';
            }
            screen.value += btntext;
        });
    }

    function inverse() {
        screen.value = 1/screen.value;
    }
    function per() {
        screen.value = screen.value/100;
    }

    function cos() {
        screen.value = Math.cos(screen.value);
    }

    function neg() {
        screen.value = -(screen.value);
    }

    function pow() {
        screen.value = Math.pow(screen.value, 2);
    }

    function sqrt() {
        screen.value = Math.sqrt(screen.value, 2);
    }

    function log() {
        screen.value = Math.log(screen.value);
    }

    function e() {
        screen.value = 2.71828182846;
    }

    function fact() {
        var i, num, f;
        f = 1
        num = screen.value;
        for (i = 1; i <= num; i++) {
            f = f * i;
        }

        i = i - 1;

        screen.value = f;
    }

    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }