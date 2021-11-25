var linebot = require('linebot');
 
var bot = linebot({
  channelId: "",
  channelSecret: "",
  channelAccessToken: ""
});



// 當收到信息時~
bot.on('message', function (event) {

    console.log( event ) ;

    event.reply( "test!!!!!" ).then(function (data) {
      // success
    }).catch(function (error) {
      // error
    });

});


// 當有人追蹤你的Bot時~
bot.on('follow', function (event) {
    console.log( event ) ;
});

// 當有人退追你的Bot時~
bot.on('unfollow', function (event) {
  console.log( event ) ;
});

// 當你的Bot被加到群組時~
bot.on('join', function (event) {
  console.log( event ) ;
});

// 當你的Bot被踢出群組時~
bot.on('leave', function (event) {
  console.log( event ) ;
});

// 當你的Bot的群組中有新人加入時~
bot.on('memberJoined', function (event) {
  console.log( event ) ;
});

// 當你的Bot的群組中有人被踼出時~
bot.on('memberLeft', function (event) {
  console.log( event ) ;
});


// 暫不理會~
bot.on('postback', function (event) {
 
  console.log( event ) ;
});


// 要有藍牙~~~~
bot.on('beacon', function (event) {
  console.log( event ) ;
});

bot.listen('/linewebhook', 3000);