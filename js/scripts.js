//Executa quando iniciar o documento
$(document).ready(function() {

    //Progress Bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {
        
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1000,
        from: { color: '#AAA' },
        to: { color: '#64DAF9'},

        step: function(state, circle){
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 40);

            circle.setText(value);

        }

    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {
        
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1900,
        from: { color: '#AAA' },
        to: { color: '#64DAF9'},

        step: function(state, circle){
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 10000);

            circle.setText(value);

        }

    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {
        
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2100,
        from: { color: '#AAA' },
        to: { color: '#64DAF9'},

        step: function(state, circle){
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 100000);

            circle.setText(value);

        }

    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {
        
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#64DAF9'},

        step: function(state, circle){
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 900);

            circle.setText(value);

        }

    });

    //Iniciando a animação quando o usuário chegar em certa parte da pagina
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {
        
        let scroll = $(window).scrollTop();

        if (scroll > (dataAreaOffset.top - 500) && stop == 0){

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }

    });


    //Parallax
    setTimeout(function() {

        $('#data-area').parallax({imageSrc: 'https://wallpapercave.com/wp/wp1915608.jpg'});

    }, 250);


});
