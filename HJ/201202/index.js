window.onload = function() {
    var color = ['green', 'red', 'blue', 'pink', 'yellow']
    
    for (var index in color) {
        var paragraph = document.createElement('div')
        paragraph.classList.add('box')
        paragraph.classList.add(color[index])
        paragraph.innerText = color[index]
        if ((index % 2) != 0) {paragraph.classList.add('circle') }
        document.getElementById("container").appendChild(paragraph)
    }


}