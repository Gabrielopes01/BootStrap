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
        $('#apply-area').parallax({imageSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e4d8c950-fd98-4d0c-ae4c-299a79a85972/da0fs9m-5b437ba0-4b55-47d4-8249-87756238bb4d.jpg/v1/fill/w_1192,h_670,q_70,strp/steam_valve_background_4_by_ragnarthedane_da0fs9m-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDgwIiwicGF0aCI6IlwvZlwvZTRkOGM5NTAtZmQ5OC00ZDBjLWFlNGMtMjk5YTc5YTg1OTcyXC9kYTBmczltLTViNDM3YmEwLTRiNTUtNDdkNC04MjQ5LTg3NzU2MjM4YmI0ZC5qcGciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.QzTmdgRp8qUltl_-CK4UttWEdaivzfjK38SMV09GJIw'});

    }, 250);


    //Filtro do Portifolio

    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active'); 

        if (type == 'valve-btn') {
            eachBoxes('valve', boxes);
        } else if (type == 'mojang-btn') {
            eachBoxes('mojang', boxes);
        } else if (type == 'nintendo-btn'){
            eachBoxes('nintendo', boxes);
        } else {
            eachBoxes('all', boxes);
        }


    });

    function eachBoxes(type, boxes){
        if(type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }

    }

});
