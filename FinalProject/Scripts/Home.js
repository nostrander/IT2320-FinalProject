function animateLeft($src, $tgt) {
    var $parent = $src.parent();
    var width = $parent.width();
    var srcWidth = $src.width();
    $src.css({ position: 'absolute' });
    $tgt.hide().appendTo($parent).css({ left: width, position: 'absolute' });
    $src.animate({ left: -width }, 500, function () {
        $src.hide();
        $src.css({ left: null, position: null });
    });
    $tgt.show().animate({ left: 0 }, 500, function () {
        $tgt.css({ left: null, position: null });
    });
}
$(function () {
    var $first = $("#first");
    var $second = $("#second");
    $second.hide();
    $("#btnAnimate").click(function () {
        animateLeft($first, $second);
        var tmp = $first;
        $first = $second;
        $second = tmp;
    });
})

$(document).ready(function () {
    $('.account').hide();


    contentAnimation();

    $('.login').click(function () {

        $.ajax({

            url: "Home/GetAccountInformation",

            data: {
                "Username": $(".oldUser").val(),
            }


        })
    })

    $('.create').click(function () {

        $.ajax({

            url: "Home/CreateAccount",

            data: {
                "Username": $(".newuser").val(),
                "Password": $(".newPass").val(),
                "EmailAdd": $(".email").val(),
                "EmailCon": $(".email").val()
            },

            success: function (createAccount) {
                alert(Message);
            }
        })
    })
});

function contentAnimation() {

    $('#login').click(function () {
        $(".login").hide('500');
        $(".account").show('500');
    })

    $('#create').click(function () {
        $(".login").hide('500');
        $(".account").show('500');
    })

}