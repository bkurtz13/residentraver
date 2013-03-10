/**
 * Created with JetBrains WebStorm.
 * User: Brad
 * Date: 3/9/13
 * Time: 8:12 PM
 * To change this template use File | Settings | File Templates.
 */

ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function(){

    EntityPlayer = ig.Entity.extend(
    {
        animSheet: new ig.AnimationSheet( 'media/player.png', 16, 16 ),
        size: {x: 8, y: 14},
        offset: {x: 4, y: 2},
        flip: false,
        maxVel: {x: 100, y: 150},
        friction: {x: 600, y: 0},
        accelGround: 400,
        accelAir: 200,
        jump: 200,

        init: function( x, y, settings )
        {
            this.parent( x, y, settings );
            // Add the animations
            this.addAnim( 'idle', 1, [0] );
            this.addAnim( 'run', 0.07, [0,1,2,3,4,5] );
            this.addAnim( 'jump', 1, [9] );
            this.addAnim( 'fall', 0.4, [6,7] );
        }
    });
});