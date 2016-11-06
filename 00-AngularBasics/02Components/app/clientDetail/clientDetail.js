(function (angular) {
    'use strict';
    function ClientDetailController() {
        var ctrl = this;

        ctrl.delete = function () {
            ctrl.onDelete({ client: ctrl.client });
        };
        ctrl.update = function (prop, value) {
            ctrl.onUpdate({ client: ctrl.client, prop: prop, value: value });
        };
    }
    angular.module('clientInfoApp').component('clientDetail',
        {
            templateUrl: 'app/clientDetail/clientDetail.html',
            controller: ClientDetailController,
            bindings:
                {
                    //client binded one way
                    client: '<',
                    //on delete binded two way
                    onDelete: '&',
                    onUpdate: '&'
                }
        });
})(window.angular);
