// Description:
//   holiday detector script
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot is it weekend ?  - returns whether is it weekend or not
//   hubot is it holiday ?  - returns whether is it holiday or not

module.exports = function(robot) {
  robot.hear(/^\d+$/i, function(msg){
    var return_message = parseInt(msg.match[0],10)
    if(return_message % 7 === 0 || return_message % 10 === 7){
      return_message = "Juf"
    }
    msg.reply(return_message);
  });
};
