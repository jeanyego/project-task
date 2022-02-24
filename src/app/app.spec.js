describe('TableController', function() {

    beforeEach(module('movieApp'));
  
    it('should create a `movies` model with 2 movies', inject(function($controller) {
      var scope = {};
      var ctrl = $controller('TableController', {$scope: scope});
  
      expect(scope.movies.length).toBe(2);
    }));
  
  });