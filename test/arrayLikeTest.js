/**
 * Created by menzhongxin on 16/4/29.
 */
var list = function(){
    var array = [];
    var self = {
        constructor : array,
        length:function(){
            return array.length;
         },
        add:function(item){
          array.push(item);
        }
      };
  return self;
};