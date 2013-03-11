ig.module(
	'game.main' 
)
.requires(
	'impact.game',
    'game.levels.dorm1',
    'game.levels.dorm2'
)
.defines(function()
{
    MyGame = ig.Game.extend(
    {
        gravity: 300,

        init: function()
        {
            // Initialize your game here; bind keys etc.
            // Bind keys
            ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
            ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
            ig.input.bind(ig.KEY.X, 'jump');
            ig.input.bind(ig.KEY.C, 'shoot');
            ig.input.bind(ig.KEY.Z, 'switch');

            // Load level
            this.loadLevel(LevelDorm1);
        },

        update: function()
        {
            // screen follows the player
            var player = this.getEntitiesByType(EntityPlayer)[0];
            if (player)
            {
                this.screen.x = player.pos.x - ig.system.width/2;
                this.screen.y = player.pos.y - ig.system.height/2;
            }

            // Update all entities and backgroundMaps
            this.parent();
        },

        draw: function()
        {
            // Draw all entities and backgroundMaps
            this.parent();


            // Add your own drawing code here

        }
    });

    // Start the Game with 60fps, a resolution of 320x240, scaled
    // up by a factor of 2
    ig.main('#canvas', MyGame, 60, 320, 240, 2);

});
