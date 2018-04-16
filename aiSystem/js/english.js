var navListE = ['Home','Project','Team','Consultant','Cooperation','Contact'];
//var navListE = ['Home','Project','Team','Consultant','Cooperation','Buy now','Contact'];
var titleE ='Digital Assets AI Transaction';
var btnTextE = ['Download white paper'];
//var btnTextE = ['Buy NBC','Download white paper'];
var aiPicE = ['images/szzc2.png','images/ais2.png'];
var mainTitleE = ['Project Introduction','Team Introduction','Consultant','Strategic cooperation','Contact Us'];
//var mainTitleE = ['Project Introduction','Team Introduction','Consultant','Strategic cooperation','Buy Now','Contact Us'];
var productInfoE = ['On New Bloc (NB) Artificial Intelligence Trading Platform, the users may adopt NBC and artificial trading (AI) trading strategies for long or short sale of digital assets. They may invest in derivatives like digital assets futures and indexes, as well as anchor currencies based on foreign exchanges and precious metals, thereby achieving optimum portfolio. By taking advantage of our internationally-leading AI algorithm, the users may adjust their portfolios in a real-time manner, and realize the optimal balancing between profits and risks.','NB Artificial Intelligence Digital Asset System is designed and developed by experts in AI, block chain and finance from University of Oxford, Tsinghua University, Peking University and Chinese Academy of Sciences. Benefiting from the constantly improving portfolios through AI, the Platform assures the stable growth of assets. Beta Version will be launched in the August 2018. Moreover, based on machine learning methods, the Platform is able to discover the characteristics and scenarios of various investment strategies, and make intelligent choices and transactions in the changing market environment.','New Bloc uses part of its digital assets gained from the issuing of NBCs for New Bloc Fund. New Bloc Fund focuses on the investment of the primary market, making the digital asset transactions market more complete with more standard operations, more diverse financial products as well as derivatives of hedging risks, healthier trusteeship mechanism and auditing mechanism, and safer and quicker transactions, ensuring the healthy development of the digital asset transactions market.']
var productTextE = ['AI  Digital Asset Management  Tools','Globalization Digital Asset Ecology'];
var personOfficeE = ['CEO','Chief  Scientist','CTO','Chief Algorithm Engineer','COO','CFO']
var personInfoE = ['Summer Zhang ,dual master of UCAS and CBS ,founder of Evolving Era ,former analyst of Vermillion Parteners ,assistant researcher of Tsinghua University ,host of LTV .','James Ma received his doctoral degree in Computer Science from University of Oxford.  He has been pursuing research in Artificial Intelligence for more than a decade, with specialisations in Quantitative Trading, Machine Learning and Robotics. He was the first prize winner in some of the recent international AI competitions.',"Suai Wang，graduated from Tsinghua University with a master's degree in computer science and technology from Peking University. He has worked in software institutes such as CAS, and Firefox. He has many years of software and hardware development experience.",'Charles Lee, Ph.D., Peking University, focuses on machine learning in artificial intelligence. Former WeChat AI senior algorithm engineer, who led a number of artificial intelligence and blockchain Internet project direction.','David Hong，master of computing, Chinese Academy of Sciences, has served as the general manager of the UGC center of Ali Youku group, Stand Tower entertainment Founder','30 years of financial experience, 8 years of pharmaceutical companies VP; Certified Public Accountant, Certified Tax Agent, Registered Assets Appraiser; Former Tianjian Certified Public Accountants partner, has more than 70 projects IPO experience; Former Dalian Science and Technology Bureau review expert'];
var textQE =['Phone：86 17611379055 (We Chat/Bee Chat/Telegram)','Email：summer@newbloc.org','Copyright ©  2017 New Bloc'];
//var textQE =['Now join NBC private equity','Discount','From the vote','Phone：86 17611379055 (We Chat/Bee Chat/Telegram)','Email：summer@newbloc.org','Copyright ©  2017 New Bloc'];
var counselorNameE=['Xiahu Chu','John Tang','Svian Ren','Kijwan Saffair'];
var counselorInfoE=['Yuan jie Foundation chairman','E Fund Investment Fund manager','United States of America-China Chamber of Commerce President','Libraam Managing Partner'];

function languageE(){
    $('#productrMargin').css({'margin-top':'155px'});
    $('#productLMargin').css({'margin-top':'55px'});
    for(var i=0; i<navListE.length; i++){
        $('.nav-list li a').each(function(i){
            $(this).text(navListE[i])
        });
    }
    for(var i=0; i<btnTextE.length; i++){
        $('#pageBtn p a').each(function(i){
            $(this).text(btnTextE[i])
        });
    }
    for(var i=0; i<aiPicE.length; i++){
        $('#pagePic img').each(function(i){
            $(this).attr("src",aiPicE[i])
        });
    }
    for(var i=0; i<mainTitleE.length; i++){
        $('.mainTitle').each(function(i){
            $(this).text(mainTitleE[i])
        });
    }
    for(var i=0; i<productTextE.length; i++){
        $('.product-text').each(function(i){
            $(this).text(productTextE[i])
        });
    }
    for(var i=0; i<productInfoE.length; i++){
        $('.product-info').each(function(i){
            $(this).text(productInfoE[i])
        });
    }
    for(var i=0; i<personInfoE.length; i++){
        $('.person-info').each(function(i){
            $(this).text(personInfoE[i])
        });
    }
    for(var i=0; i<textQE.length; i++){
        $('.textQ').each(function(i){
            $(this).text(textQE[i])
        });
    }
    for(var i=0; i<personOfficeE.length; i++){
        $('.person-office').each(function(i){
            $(this).text(personOfficeE[i])
        });
    }
    for(var i=0; i<counselorNameE.length; i++){
        $('.counselor-name').each(function(i){
            $(this).text(counselorNameE[i])
        });
    }
    for(var i=0; i<counselorInfoE.length; i++){
        $('.counselor-info').each(function(i){
            $(this).text(counselorInfoE[i])
        });
    }
    //for(var i=0; i<statementE.length; i++){
    //    $('.statementC').each(function(i){
    //        $(this).text(statementE[i])
    //    });
    //}
    $('.page-title h2').text(titleE);
    $('.page-btn_b a').text(btnTextE[0]);
}
