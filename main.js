const mainContent = document.getElementById("main-content")

const onDataArrived = (data) => {
    console.log(JSON.stringify(data))
    for (let i = 0; i < 10; i++) {
        mainContent.innerHTML +=
            '<div class="play-wrapper">\n'+
            '    <div class="horizontal-divider"></div>\n' +
            '    <div class="play">\n' +
            '        <img class="play-img" src="' + data[i].url + '"/>' +
            '        <div class="play-text">\n' +
            '            <h3 class="play-title">accusamus beatae ad facilis cum similique qui sunt</h3>\n' +
            '            <p class="play-desc">accusamus beatae ad facilis cum similique qui sunt</p>\n' +
            '        </div>\n' +
            '    </div>' +
            '    <div class="horizontal-divider"></div>\n'
    }
}

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(onDataArrived)