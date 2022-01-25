

$(".mobile_header").on("click",function(){
    console.log("hi")
    
    $(this).parents().find(".mobile_nav").toggle()
    
    if($(".mobile_menu_icon2").hasClass("openmobile_menu_icon2"))
    {$(".mobile_menu_icon1").removeClass("openmobile_menu_icon1")
    $(".mobile_menu_icon2").removeClass("openmobile_menu_icon2")
    $(".mobile_menu_icon3").removeClass("openmobile_menu_icon3")
    console.log("remove")
    }else{
        $(".mobile_menu_icon1").addClass("openmobile_menu_icon1") 
        $(".mobile_menu_icon2").addClass("openmobile_menu_icon2") 
        $(".mobile_menu_icon3").addClass("openmobile_menu_icon3") 
    
    
    }
    
    })

    $(".group").on("click",function() {
        // console.log($(this).text())
        // 當我點選到當前群組，找到下層的question的兄弟，並顯示
        $(this).find(".question").siblings().slideDown()
        // $(this).find("i").removeClass("fa-bone")
        // $(this).find("i").addClass("fa-bone-break")
    
    //  當我點選當前群組，找到同層兄弟，往下層找.answer。並影藏
        $(this).siblings().find(".answer").slideUp()
        // $(this).siblings().find("I").removeClass("fa-bobe-break")
        // $(this).siblings().find("I").addClass("fa-regular")
    
    
        
        })  

        $(".social_box div").hover( function(){
          
          if( $(".social_box div").hover())
          
          { $(this).find("i").toggle(400)
       
        } else{
     
          }
        })

        wow = new WOW(
          {
          boxClass:     'wow',      // default
          animateClass: 'animated', // default
          offset:    0,          // default
          mobile:       true,       // default
          live:         true        // default
        }
        )
        wow.init();