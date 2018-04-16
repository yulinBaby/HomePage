$(function(){
    var amend= 0; //修改状态为0;
    var pitch_on= " ";  // 单选选中的答案
    var check_info=" ";   // 多选选中的答案
    $('.question-amend').hide();
    $('.question-answer').hide().eq(0).show();
    $('.answer').hide();
    $('.stop-test').hide();

    //点击修改选中之后的选项
    $(document).on("click",".question-amend",function(){
        if(amend==0){
            amend=1;
            $(this).html('取消').css("color",'#666');
            $(this).prev().removeClass('no-click');
            $(this).prev().children().children().find('input').attr("disabled",false);
        }else {
            amend=0;
            $(this).html('修改').css("color",'#5d67a4');
            $(this).prev().addClass('no-click');
            $(this).prev().children().children().find('input').attr("disabled",true);
        }
        return false;
    });

    //单选
    $(document).on("click",".question_option_radio p",function(){
        pitch_on = $(this).children('label').text();
        $(this).children('input').attr("checked",true);
        $(this).parent().parent().next().show().html('修改').css("color",'#7ea3ed');
        $(this).parent().parent().parent().parent().next().show();
        $(this).siblings().children('input').attr("disabled",true);
        $(this).parent().parent().addClass('no-click');
        $(this).parent().parent().parent().parent().next().find('.user-answer').html(pitch_on);
        $(this).parent().parent().parent().parent().parent().next().show();
        $(window).scrollTop($('.wrap').height());
        amend=0;
        return false;
    });

    //多选
     $(document).on("change",".question_option_checkbox",function(){
         var check_ed=$(this).children().children('input:checkbox:checked').length;
         if(check_ed>0){
             $(this).children().children('button').addClass('affirm-checkbox-on');
         }else {
             $(this).children().children('button').removeClass('affirm-checkbox-on');
         }
     });



    //多选确认按钮
    $(document).on("click",".affirm-checkbox",function(){
        check_info=$(this).parent().siblings('p').children('input:checkbox:checked').next();
        var check_d=" ";
        for(var i=0; i<check_info.length; i++){
            check_d+=check_info.eq(i).text();
            //判断最后添加的字符串是不是最后一个，不是最后一个添加逗号，是最后一个不添加
            if(i!=check_info.length-1){
                check_d+= ' , ';
            }
        }
        var option_check=$(this).parent().siblings('p').find("input");
        var option_check_l=$(this).parent().siblings('p').find("input").length;  //多选题选项的长度
        var is_true = 0;
        option_check.each(function(){
            if(!$(this).is(":checked")){
                is_true++;
            }
        });
        if(is_true==option_check_l){
            alert('一个都没有');
        } else{
            $(this).parent().parent().parent().parent().parent().next().show();
            $(this).parent().parent().parent().parent().parent().next().find('.user-answer').html(check_d);
            $(this).parent().parent().parent().siblings().html('修改').css("color",'#7ea3ed');
            $(this).parent().parent().parent().siblings().show();
            $(this).parent().parent().parent().addClass('no-click');
            $(this).parent().siblings().find('input').attr("disabled",true);
            $(this).parent().parent().parent().parent().parent().parent().next().show();
            $(window).scrollTop($('.wrap').height());
            $('.stop-test').show();
        }
        amend=0;
    });

    //多选选项含有以上均不是逻辑判断
    $(document).on("change",".check_no",function(){
        $(this).parent().siblings().find("input").attr({checked:false});
    });
    //选择除了“以上都不是”之外的任意一个按钮，都要取消“以上都不是”按钮选中样式
    var i_true = [];
    $(document).on("change",".check_no_true",function(){
        var all_info = $(this).parent().nextAll().find("input");
        all_info.each(function(){
            if($(this).context.checked){
                if($(this).attr("title")){
                    i_true.push(2);
                }else{
                    i_true.push(1);
                }
                //count++;
            }
        });
        if($.inArray(2,i_true)!= -1){
            all_info.each(function(){
                if($(this).attr("title")){
                    $(this).attr({checked:false})
                }
            });
        }
        i_true = [];
    });


    //导诊建议手风琴导航
    var $click_list=$('.doubt-symptom-list');
    $click_list.click(function(){
        var $main=$(this).next();
        if($(this).hasClass('on')){
            $(this).next().slideUp();
            $(this).removeClass('on');
            $(this).children().find('i').removeClass('on');
        }
        if($main.is(":hidden")){
            $('.doubt-symptom-main').slideUp();
            $('.doubt-symptom').find('.doubt-symptom-list').children().find('i').removeClass('on');
            $('.doubt-symptom').find('.doubt-symptom-list').removeClass('on');
            $(this).addClass('on');
            $(this).children().find('i').addClass('on');
            $main.slideDown();
        }else {
            $main.slideUp(600);
        }

    });


    //结束答题 弹窗
    $('.stop-test').click(function(){
        $('html,body').css('overflow','hidden');
        $(".modal-mask").css({'visibility':'visible','opacity':1});
        $(".modal-container").css({'visibility':'visible','opacity':1});
        return false;
    });
    $('.modal-mask,#cancel-button').click(function(){
        $('html,body').css('overflow','visible');
        $(".modal-mask").css({'visibility':'hidden','opacity':0});
        $(".modal-container").css({'visibility':'hidden','opacity':0});
        return false;
    });


    $('#affirm-button').click(function(){
        window.location.href="index-suggest.html";
    });


    //最后一道询问最近身体状况的问题
    $(document).on("click","#affirm_checkbox",function(){
        $(this).parent().parent().parent().parent().parent().next().show();
        var check_text_d=" ";
        var check_option_d=" ";
        var answer=" ";
        var statusText=$(this).parent().siblings().children().children('span');
            for(var i=0; i<statusText.length; i++){
                //选项的标题
                check_text_d=statusText.eq(i).text();
                //选中的选项
                check_option_d=statusText.eq(i).next().children().children('input:radio:checked').next().text();
                answer+=check_text_d+'&nbsp; &nbsp; '+check_option_d+'<br>';
            }
        $(this).parent().parent().parent().parent().parent().next().find('.user-answer').html(answer);
        $(window).scrollTop($('.wrap').height());
        $(this).parent().parent().parent().addClass('no-click');
        $(this).parent().parent().parent().next().show();
        $(this).parent().parent().parent().next().html('修改').css("color",'#7ea3ed');
        amend=0;
    });


    $(document).on("click","#last_question_amend",function(){
        //alert(111)
        //console.log($(this).parent().parent().attr('class'));
        $(this).parent().parent().removeClass('no-click');
    })
});
