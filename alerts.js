
(function (angular) {
    'use strict';

    var alerts = angular.module('alerts', []);

    alerts.factory('AlertsFactory', [
        '$rootScope',
        function () {
            return function () {
                var store = [];
                var addListeners = [];
                var clearListeners = [];
                this.clear = function () {
                    store = [];
                    angular.forEach(clearListeners, function (listener) {
                        listener.call(null);
                    });
                };
                this.add = function (message, type) {
                    if (angular.isUndefined(store)) {
                        store = [];
                    }
                    var data = {
                        message: message,
                        type: type || 'info'
                    };
                    store.push(data);
                    angular.forEach(addListeners, function (listener) {
                        listener.call(null, data);
                    });

                };
                this.get = function () {
                    return store;
                };

                this.onAdd = function (listener) {
                    addListeners.push(listener);

                };

                this.onClear = function (listener) {
                    clearListeners.push(listener);
                };

            };
        }
    ]);

    alerts.directive('alerts', [
        function () {
            return {
                restrict: 'A',
                templateUrl: 'templates/alerts/alerts.html',
                transclude: true,
                scope: {
                    alerts: '='
                },
                link: function (scope) {
                    scope.$watch('alerts', function (alerts) {
                        if (angular.isDefined(alerts)) {
                            // Wire up the alerts
                            scope.messages = scope.alerts.get();
                            alerts.onAdd(function (message) {
                                scope.messages.push(message);
                            });
                            alerts.onClear(function () {
                                scope.messages = [];
                            });
                        }
                    });
                }
            };
        }]
    );

    alerts.run(['$templateCache', function ($templateCache) {
        $templateCache.put('templates/alerts/alerts.html',
            '<alert ng-repeat="item in messages" type="item.type" ng-bind="item.message"></alert>'
        );
    }]);

}(window.angular));
