window.onload = function(){
    // 초록색
    document.getElementById('btn-green').addEventListener('click', function(){
        document.getElementById('green').style.backgroundColor = "green";
    });
    // 노란색
    document.getElementById('btn-yellow').addEventListener('click', function(){
        document.getElementById('yellow').style.backgroundColor = "yellow";
    });
    // 빨간색
    document.getElementById('btn-red').addEventListener('click', function(){
        document.getElementById('red').style.backgroundColor = "red";
    });
}

