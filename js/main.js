
let Main = new function(){
    let $this = this;
    let WindowMaxWidth = 600;
    let Mobile = false;
    let ClickEvt = function(){
        $(".cls_ul > li").click(function(){
            if (Mobile) {
                let ContentTop = ($('.cls_li_content').offset().top - $(".navbar").height()) - 20 ;
                $('body,html').animate({
                    scrollTop: ContentTop
                }, 900);
            }
        });
    }
    let ReSize = function(){
        if ($(window).width() <= WindowMaxWidth) {
            Mobile = true;
        } else {
            Mobile = false;
        }
    }
    let CloseMenuList = function(){
        $(".cls_Menu > li").click(function(){
            if (Mobile) {
                $(".cls_Menu_btn").click();
            }
        });
    }
    $this.init = function(){
        ReSize();
        $(window).resize(function(){
            ReSize();
        });
        ClickEvt();
        CloseMenuList();
    }
    $this.init();
}