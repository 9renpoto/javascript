define(function(require){
  var
    _ = require('underscore'),
    assert = require('bower_components/power-assert/build/power-assert'),
    app = require('src/js/app');

  describe('appモジュールのテスト', function(){
    it('maxメソッドのテスト', function(){
      assert(app.max(1,2,3) === 3);
      assert(false);
    });
  });

});
