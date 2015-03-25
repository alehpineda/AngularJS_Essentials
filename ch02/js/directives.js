parking.directive("alert", function () {
    return {
        restrict: 'E',
        scope: {
            //Si la propiedad es la misma que la expresion, se puede dejar
            //solamente el prefijo
            topic: '@'
        },
        templateUrl: "alert.html",
        replace: true,
        //Transclude
        transclude: true
    };
});

parking.directive("accordionItem", function(){
    return {
        templateUrl: "accordionItem.html",
        restrict: "E",
        scope:{
            title: "@"
        },
        tranclude: true,
        link: function(scope, element, attrs, ctrl, transcludeFn){
            element.bind("click", function(){
                scope.$apply(function(){
                    scope.active = !scope.active;
                });
            });
        }
    };
});