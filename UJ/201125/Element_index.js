window.onload = function() {
    document.getElementById('btn-black').addEventListener('click', function(){
        document.getElementById('hh').setAttribute('class','black')
    });

    document.getElementById('btn-red').addEventListener('click', function(){
        document.getElementById('hh').setAttribute('class','red')
    });

    document.getElementById('btn-blue').addEventListener('click', function(){
        document.getElementById('hh').setAttribute('class', 'blue')
    });

    document.getElementById('btn-green').addEventListener('click', function(){
        document.getElementById('hh').setAttribute('class','green')
    });

    document.getElementById('btn-orange').addEventListener('click', function(){
        document.getElementById('hh').setAttribute('class','orange')
    });
}