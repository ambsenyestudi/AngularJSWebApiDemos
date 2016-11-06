(function (angular) {
    'use strict';
    function ClientInfoController($scope, $element, $attrs)
    {
        var ctrl = this;
        ctrl.clientList = [
            {
                name: 'Guillem',
                surname: 'Bibiloni',
                phone: '55522355',
                email: 'gBibi@bibilonicopr.tk'
            },
            {
                name: 'Joan Miquel',
                surname: 'Femenias',
                phone: '55532255',
                email: 'joanmiquel@femeniascompany.tk'
            },
            {
                name: 'Joana Maria',
                surname: 'Quetgles',
                phone: '55522255',
                email: 'joaneta@quetglescluster.tk'
            },
            {
                name: 'Maria Francisca',
                surname: 'Morey',
                phone: '555333555',
                email: 'fancisca@moreihub.tk'
            },
            {
                name: 'Pedro',
                surname:'Ramirez',
                phone: '55512355',
                email:'perdo@ramirezfamily.tk'
            },
            {
                name: 'Juana',
                surname: 'Sanchez',
                phone: '55532155',
                email: 'jsanchez@sanchez.tk'
            }
        ];

        ctrl.updateClient = function (client, prop, value) {
            client[prop] = value;
        };
        ctrl.deleteClient = function (client) {

            var index = ctrl.clientList.indexOf(client)
            if (index >= 0) {
                ctrl.clientList.splice(index, 1);
            }
        };
    }
    angular.module('clientInfoApp').component('clientList', {
        templateUrl: 'app/clientList/clientList.html',
        controller: ClientInfoController
    });
})(window.angular);
