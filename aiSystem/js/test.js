//点击英文切换
function languageEnglish(){
    languageE();
    $('.buy-text-c').hide();
    $('.buy-text-e').show();
    $('.buy-text-j').hide();
    $('.buy-text-k').hide();
    $('#pagePic img:last-child').addClass('page-pic2');
    $("title").html("New Bloc Artificial Intelligence Trading Platform");
    $("meta[name='keywords']").attr('content',"NB，New bloc，Artificial intelligence, Blockchain,Ico， Bitcoin, Ethereum");
    $("meta[name='description']").attr('content',"The New Bloc is the world's first system to trade digital assets.");

}
//点击中文切换
function languageChinese(){
    languageC();
    $('.buy-text-c').show();
    $('.buy-text-e').hide();
    $('.buy-text-j').hide();
    $('.buy-text-k').hide();
    $('#pagePic img:last-child').removeClass('page-pic2');
    $("title").html("NB人工智能交易系统");
    $("meta[name='keywords']").attr('content',"NB，new bloc，，区块链，ico，比特币，以太坊");
    $("meta[name='description']").attr('content',"New Bloc 是全球第一个交易数字资产的系统");

}

function languageJapanese(){
    languageJ();
    $('.buy-text-c').hide();
    $('.buy-text-e').hide();
    $('.buy-text-j').show();
    $('.buy-text-k').hide();
    $("title").html("New Bloc Artificial Intelligence Trading Platform");
    $("meta[name='keywords']").attr('content',"NB，New bloc，Artificial intelligence, Blockchain,Ico， Bitcoin, Ethereum");
    $("meta[name='description']").attr('content',"The New Bloc is the world's first system to trade digital assets.");

}

function languageKorean(){
    languageK();
    $('.buy-text-c').hide();
    $('.buy-text-e').hide();
    $('.buy-text-j').hide();
    $('.buy-text-k').show();
    $("title").html("New Bloc Artificial Intelligence Trading Platform");
    $("meta[name='keywords']").attr('content',"NB，New bloc，Artificial intelligence, Blockchain,Ico， Bitcoin, Ethereum");
    $("meta[name='description']").attr('content',"The New Bloc is the world's first system to trade digital assets.");

}

$('#languageChoose').click(function(){
    $('#languageList').slideDown();
});

$('#languageList li').click(function(){
    $('#languageList').slideUp();
    $('#languageChoose b').text($(this).text());

});
//$('#languageList li').first().click();
$('#languageList li').click(function(){
    $('#languageList').slideUp();
    $(this).addClass('active').siblings().removeClass('active');
    $('#languageChoose b').text($(this).text());
});