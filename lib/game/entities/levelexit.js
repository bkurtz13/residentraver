/**
 * Created with JetBrains WebStorm.
 * User: Brad
 * Date: 3/11/13
 * Time: 12:10 AM
 * To change this template use File | Settings | File Templates.
 */

ig.module(
    'game.entities.levelexit'
)
.requires(
    'impact.entity'
)
.defines(function()
{
   EntityLevelexit = ig.Entity.extend(
   {
       _wmDrawBox: true,
       _wmBoxColor: 'rgba(0, 0, 255, 0.7)',
       size: {x: 8, y: 8},
       level: null,
       checkAgainst: ig.Entity.TYPE.A,

       update: function(){},

       check: function(other)
       {
           if (other instanceof EntityPlayer)
           {
               if (this.level)
               {
                   var levelName = this.level.replace(/^(Level)?(\w)(\w*)/,
                       function(m, l, a, b) { return a.toUpperCase() + b;
                   });
                   ig.game.loadLevelDeferred(ig.global['Level'+levelName]);
               }
           }
       }
   });
});