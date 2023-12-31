function checkKeycode(e) {
    const cKeyCode = document.querySelector(".keycode");
    let key = e.key;
    const keycode = e.keyCode;

    if (key === " ") {
        key = "Space";
    }

    cKeyCode.textContent = `${key}: ${keycode}`;
}

document.addEventListener("keyup", checkKeycode);
