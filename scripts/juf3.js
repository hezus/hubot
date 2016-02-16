module.exports = function(robot){
  robot.hear(/hallo/i, function(msg){
    msg.reply("Hai");    
  })
}
