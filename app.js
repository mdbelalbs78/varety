document.getElementById('add-btn').addEventListener('click', function () {
    const inputText = document.getElementById('text-input').value;
    const container = document.getElementById('parent-container')
    const li = document.createElement('li');
    li.innerText = inputText;
    li.classList.add("new-li");
    container.appendChild(li);

    const allList = document.getElementsByClassName('new-li');
    for (const item of allList) {
        item.addEventListener('click', function (e) {
            e.target.parentNode.removeChild(e.target);
        })
    }
})



