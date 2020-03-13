$(document).ready(function () {

    $("#menu-img").click(function () {
        $(".nav-design").show();
        $("#x").show();
        $(".nav-design").addClass("navclick-design");
    });

    $("#x").click(function () {
        $(".nav-design").hide();
        $(".nav-design").addClass("navclick-design");
        location.reload();
    });
});

    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";

      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '390',
                width: '640',
                videoId: 'pQN-pnXPaVg',
                events: {
                    //'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
            event.target.playVideo();
        }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 6000);
        done = true;
        }
      }
      function stopVideo() {
            player.stopVideo();
        }

//הגדרות של הפופ-אפים בדף עד
jQuery(function ($) {
    var pop = $('.map-popup');
    pop.click(function (e) {
        e.stopPropagation();
    });

    $('a.marker').click(function (e) {
        $(".xpop").show();
        e.preventDefault();
        e.stopPropagation();
        $(this).next('.map-popup').toggleClass('open');
        $(this).parent().siblings().children('.map-popup').removeClass('open');
    });

    $('.xpop').click(function (e) {
        $(pop).hide();
        location.reload();
    });


    $('a.marker').click(function (e) {
        $(pop).show();
    });

    $(document).click(function () {
        pop.removeClass('open');
    });

    pop.each(function () {
        var w = $(window).outerWidth(),
            edge = Math.round(($(this).offset().left) + ($(this).outerWidth()));
        if (w < edge) {
            $(this).addClass('edge');
        }
    });
   
    //הגדרות ג'יסון

    var data = {     
        "qA": [{
            "question": "פתיחה",
            "answer": [
                "היכרות עם המושג",
                "תיאום ציפיות מהשיעור",
                "צפייה בסרטון ודיון"]
        }, {
                "question": "למה חשובים דפי העד?",
            "answer": [
                "סיבות שונות לחשיבות דפי העד - למידה מסיפורים",
                "דיון- קשיים ומורכבויות במילוי ואיסוף הדפים"]
            },
        {
            "question": "פעילות כיתה",
            "answer": [
                "משימה בזוגות- שרטוט של דף עד",
                "סיכום פעילות- הצגה ודיון"]
        },
        {
            "question": "איך- הסבר על מבנה דף העד ",
            "answer": [
                "היכרות עם מבנה הדף",
                "הסבר על הקריטריונים בדף ודיון"]
        },
        {
            "question": "סיכום שיעור ועבודת חקר",
            "answer": [
                "הצגת מסע לדוגמא",
                "דיון מסכם",
                "הסבר על עבודת החקר",
                "הסבר על הסביבה האישית"]
        }
        ]         
    }; 

    var html = "";
    var p ="<p class='GoodLuck'>בהצלחה!<p/>";
    $.each(data.qA, function (index, item) {
        //console.log(item);
        html += "<ul>" + item.question.fontsize('5pt');

        $.each(item.answer, function (index1, item1) {
            html += "<li>" + item1 + "</li>";

        });
        html += "</ul>";
    });
    $("#ccc").append(html);
    $("#ccc").append(p);
});
