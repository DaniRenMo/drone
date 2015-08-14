var Cylon = require('cylon');
var bot;

// Initialise the robot
Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"
    })
    .on("ready", fly);
    
// Fly the bot

function fly(robot) {
    bot = robot;
    bot.drone.disableEmergency();
    bot.drone.ftrim();
    bot.drone.takeoff(4 * 1000);
    after(9 * 1000, function () {
        bot.drone.land();
    });
    after(15 * 1000, function () {
        bot.drone.stop();
    });
    bot.drone.left(0.2);
    after(1 * 1000, function () {
        bot.drone.left(0)
    })
    bot.drone.forward(0.2);
    after(4 * 1000, function () {
        bot.drone.forward(0)
    })
    bot.drone.right(0.2);
    after(1 * 1000, function () {
        bot.drone.right(0)
    })
    bot.drone.back(0.35);
    after(2 * 1000, function () {
        bot.drone.back(0)
    })
}
    Cylon.start();
