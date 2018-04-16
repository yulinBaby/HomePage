$(function(){
    var sexPeople = '0';  //性别男
    var sexWoman = '1';  //性别女
    var young_man='2';  //成人
    var child=3;  //儿童
    var front='0'; //正面
    var new_status = [];
    new_status["200"] = ["man-z"];   //成年男性（正面）
    new_status["210"] = ["woman-z"];   //成年女性（正面）
    new_status["300"] = ["boy-z"];     //男孩（正面）
    new_status["310"] = ["girl-z"];    //女孩（正面）
    new_status["201"] = ["man-b"];   //成年男性（背面）
    new_status["211"] = ["woman-b"];   //成年女性（背面）
    new_status["301"] = ["boy-b"];     //男孩（背面）
    new_status["311"] = ["girl-b"];    //女孩（背面）

    $(document).on("click",".checkSex",function(){
       sexPeople = $(this).val();
        var new_status_check = young_man+sexPeople+front;
        var id = new_status[new_status_check];
        $("#"+id).show().siblings().hide();
        //return false
        //if(sexPeople==0){shu
        //    $("#man-z").show().siblings().hide();
        //}else{
        //    $("#woman-z").show().siblings().hide();
        //}
       /* changeUStatus();*/

    });

    $(document).on("click",".checkAge",function(){
        young_man = $(this).val();
        //var new_status_check = young_man+sexPeople+front;
        //var id = new_status[new_status_check];
        //$("#"+id).show().siblings().hide();
        changeUStatus();
    });

    $(document).on("click",".turn-back",function(){
         if(front==0){
             front = 1;
         }else{
             front = 0;
         }
        changeUStatus();
    });

    function changeUStatus(){
        var new_status_check = young_man+sexPeople+front;
        var id = new_status[new_status_check];
        $("#"+id).show().siblings().hide();
    }




    var header= 15, //头部
        neck = 16,  //颈部
        arm = 5,   //上肢
        chest = 12,  //胸部
        belly =10,    //腹部
        genitals = 6,  //生殖器
        leg = 4,  //下肢
        back = 11, //后背
        arse = 8;  //臀部
    var _this = " ";
    function skip(index){
        $(".mask-layer").animate({left:"0"},500);
        $(".pup-up-box").animate({left:"0"},500);
        _this=list_li.eq(index-1);
        var _index=_this.index();
        if(!_this.hasClass('on')){
            $('.tab_main_list').eq(_index).show().siblings().hide();
        }
        list_li.eq(index-1).addClass('on').siblings().removeClass('on');
    }
    var list_li=$('#list_ul li');
    $(document).on("click",".m-header",function(){
        skip(header);
    });

    $(document).on("click",".m-neck",function(){
        skip(neck);
    });

    $(document).on("click",".arm",function(){
        skip(arm);
    });

    $(document).on("click",".chest",function(){
        skip(chest);
    });

     $(document).on("click",".belly",function(){
         skip(belly);
    });

    $(document).on("click",".genitals",function(){
        skip(genitals);
    });

     $(document).on("click",".leg",function(){
         skip(leg);
    });

     $(document).on("click",".man-back",function(){
         skip(back);
    });

     $(document).on("click",".man-arse",function(){
         skip(arse);
    });


    var showH = true;    //遮罩层是否显示
    $(document).on("click",".mask-layer",function(){
        if(showH){
            $(this).animate({left:"-100%"},800);
            $(".pup-up-box").animate({left:"-6rem"},800);
        }
    });

    $(document).on("click","#list_ul li",function(){
        var _index=$(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.tab_main_list').eq(_index).show().siblings().hide();
    });

    $(document).on("click",".tab_main_list li",function(){
        window.location.href="index-test.html";
    });

});
