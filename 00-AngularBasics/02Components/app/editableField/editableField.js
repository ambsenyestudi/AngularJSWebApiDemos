(function (angular) {
    'use strict';
    function EditableFieldController($scope, $element, $attrs) {
        var ctrl = this;
        ctrl.editMode = false;
        ctrl.inputID = "ID";
        
        ctrl.handleModeChange = function () {
            if (ctrl.editMode) {
                ctrl.onUpdate({ value: ctrl.fieldValue });
                ctrl.fieldValueCopy = ctrl.fieldValue;
            }
            ctrl.editMode = !ctrl.editMode;
            console.log("handleModeChange::clicked");
        };

        ctrl.reset = function () {
            ctrl.fieldValue = ctrl.fieldValueCopy;
        };

        ctrl.$onInit = function () {
            // Make a copy of the initial value to be able to reset it later
            ctrl.fieldValueCopy = ctrl.fieldValue;
            
            // Set a default fieldType
            if (!ctrl.fieldType) {
                ctrl.fieldType = 'text';
                ctrl.fieldLabel = 'Text';
            }
            ctrl.inputID = ctrl.fieldType + "ID";
        };
        /*binding < one way for inputs*/
        /*binding @ one way for strings*/
    }
    angular.module('clientInfoApp').component('editableField',{
            templateUrl: 'app/editableField/editableField.html',
            controller: EditableFieldController,
            bindings: {
                
                fieldValue: '<',
                fieldType: '@?',
                fieldLabel:"@",
                onUpdate: '&'
            }
        });
})(window.angular);