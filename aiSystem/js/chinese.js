var navListC = ['首页','项目简介','团队介绍','顾问','战略合作','联系我们'];
//var navListC = ['首页','项目简介','团队介绍','顾问','战略合作','立即购买','联系我们'];
var titleC ='量化交易数字资产';
var btnTextC = ['下载白皮书'];
//var btnTextC = ['购买NBC','下载白皮书'];
var aiPicC = ['images/szzc.png','images/ais.png'];
var mainTitleC = ['项目简介','团队介绍','顾问','战略合作','联系我们'];
//var mainTitleC = ['项目简介','团队介绍','顾问','战略合作','立即购买','联系我们'];
var productInfoC = ['New Bloc人工智能交易系统，是全球第一个通过人工智能帮助合格投资者管理数字资产的自动化工具。 投资者可以将New Bloc平台发行的结算单位NBC转入New Bloc交易系统的个人自动化账号，跟随AI交易策略，做多或者做空数字资产，将最佳投资组合尽收囊中，通过全球领先的AI算法实时调整资产组合，实现盈利与风险的最优平衡。','New Bloc 人工智能交易系统，由来自牛津、清华、北大、中科院的AI、区块链、金融专家设计开发。New Bloc 人工智能交易系统Beta版，将于2018年8月上线。New Bloc人工智能自动化交易平台，将通过机器学习的方法发掘多种投资策略的特点与适用场景，在多变的市场环境中做出智能选择与交易。','New Bloc将把发行NBC所得部分数字资产用于New Bloc生态基金。New Bloc生态基金将专注于一级市场投资，帮助数字资产交易市场业态更完整、运行更规范、对冲风险的金融产品及衍生品更多样化，托管及审计机制更健全，交易更安全更迅速，维护数字资产交易市场的健康发展。'];
var productTextC = ['AI数字资产管理工具','全球化布局数字资产生态'];
var personOfficeC = ['首席执行官','首席科学家','首席技术官','首席算法工程师','首席运营官','首席财务官'];
var personInfoC = ['中科院及哥本哈根商学院硕士，进化时代（获得数千万风险投资及千万用户）创始人。进化时代专注于母婴健康，通过AI辅助医疗，提高健康管理效率。Summer曾任职英资投行Vermillion Partners，从事跨境并购业务，熟悉金融市场规则，在全球资本市场有丰富的合作伙伴资源。此前，Summer曾任清华大学助理研究员，LTV主持人，哥本哈根商学院教学委员会委员、学生论坛主席，多次在国家核心期刊上发表著述。','英国牛津大学计算机博士、博士后，在计算机与人工智能领域从事前沿技术研究十余年，世界顶尖人工智能研究院科学家。专注于多智能体强化学习决策系统、股票与期货量化交易策略自主学习与优化。曾多次在国际人工智能大赛中获奖。','本科毕业于清华大学电子工程系，硕士毕业于北京大学计算机科学技术研究所，区块链技术专家，比特币布道元老，连续创业者。2009年起投身比特币，2013年创业从事比特币矿机研发，独立开发了基于第一代avalon芯片的比特币矿机，生产近千套。他精通区块链底层技术和BTC核心算法，他曾任火狐首席架构师，中科院软件所研究员，走秀网联合创始人，并在图像识别、无人机领域取得卓越成就。','北京大学计算机博士，专注人工智能机器学习方向，连续创业者。Charles曾领导多个人工智能和区块链方向的互联网创业项目，其创办的金融大数据征信平台，累计服务500家以上金融科技企业。此前，Charles任微信AI部高级算法工程师。','中科院计算计算所硕士，连续创业者，互联网产品运营专家。David曾任屹立互娱创始人。David在互联网行业产品、运营、客服、市场领域深耕多年，并取得卓越的成绩。','30年财务经验，8年药企VP；注册会计师、注册税务师、注册资产评估师；曾任天健会计师事务所合伙人，有70余个项目的IPO经验；曾任大连科技局评审专家；三次创业。']
var textQC =['手机：86 17611379055 (We Chat/Bee Chat/Telegram)','邮箱：summer@newbloc.org','版权所有 ©  2017 New Bloc']
//var textQC =['现在加入NBC私募','立享折扣','起投','手机：86 17611379055 (We Chat/Bee Chat/Telegram)','邮箱：summer@newbloc.org','版权所有 ©  2017 New Bloc'];
var counselorNameC=['Xiahu Chu','John Tang','Svian Ren','Kijwan Saffair'];
//var counselorInfoC=['Yuan jie Foundation chairman','E Fund Investment Fund manager','United States of America-China Chamber of Commerce President','Libraam Managing Partner'];
var counselorInfoC=["维优创始人兼"+"<br>"+"CEO元界基金会主席","量化交易金融专家"+"<br>"+"易方达基金管理有限公司"+"<br>"+"基金经理","中美总商会 会长","区块链投资人及专家"+"<br>"+"Libraam管理合伙人"];


function languageC(){
    $('#productrMargin').css({'margin-top':'25px'});
    $('#productLMargin').css({'margin-top':'5px'});
    for(var i=0; i<navListC.length; i++){
        $('.nav-list li a').each(function(i){
            $(this).text(navListC[i])
        });
    }
    for(var i=0; i<btnTextC.length; i++){
        $('#pageBtn p a').each(function(i){
            $(this).text(btnTextC[i])
        });
    }
    for(var i=0; i<mainTitleC.length; i++){
        $('.mainTitle').each(function(i){
            $(this).text(mainTitleC[i])
        });
    }
    for(var i=0; i<aiPicC.length; i++){
        $('#pagePic img').each(function(i){
            $(this).attr("src",aiPicC[i])
        });
    }
    for(var i=0; i<productInfoC.length; i++){
        $('.product-info').each(function(i){
            $(this).text(productInfoC[i])
        });
    }
    for(var i=0; i<productTextC.length; i++){
        $('.product-text').each(function(i){
            $(this).text(productTextC[i])
        });
    }
    for(var i=0; i<personInfoC.length; i++){
        $('.person-info').each(function(i){
            $(this).text(personInfoC[i])
        });
    }
    for(var i=0; i<textQC.length; i++){
        $('.textQ').each(function(i){
            $(this).text(textQC[i])
        });
    }
    for(var i=0; i<personOfficeC.length; i++){
        $('.person-office').each(function(i){
            $(this).text(personOfficeC[i])
        });
    }
    for(var i=0; i<counselorNameC.length; i++){
        $('.counselor-name').each(function(i){
            $(this).text(counselorNameC[i])
        });
    }
    for(var i=0; i<counselorInfoC.length; i++){
        $('.counselor-info').each(function(i){
            $(this).html(counselorInfoC[i])
        });
    }
    //for(var i=0; i<statementC.length; i++){
    //    $('.statementC').each(function(i){
    //        $(this).text(statementC[i])
    //    });
    //}
    $('.page-title h2').text(titleC);
    $('.page-btn_b a').text(btnTextC[0])
}
