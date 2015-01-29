window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {url: "./dist/style.css"},
        //js
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        // {url: "./bower_components/backbone/backbone.js"}
        // {url: "./js/game.js"}
    ).then(function(){
        document.querySelector("html").style.opacity = 1;
        // start app?
    })

}

;(function(){
    var Game = function(canvasId) {
        var canvas = document.getElementById(canvasId);
        var screen =Cavnas.getContext('2d');
        var gameSize = {x: canvas.width, y: canvas.height };
        console.log("hi")

        var self = this;
        var tick = function() {
            self.update();
            self.draw(screen, gameSize);
        };

        tick();
    };

    Game.prototype =  {
        update: function()  {
            console.log("hi")
        },

        draw: function(screen, gameSize) {
            scree.fillRect(30, 30, 40, 40);
        }
    };

    window.onload = function() {
         new Game("screen");
    };
 })();