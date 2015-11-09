let directive = () => {
    return {
        restrict: 'E',
        controller: () => {},
        controllerAs: 'noteListCtrl',
        bindToController: {
            notes: '='
        },
        scope: {},
        template: '<note ng-repeat="note in noteListCtrl.notes" note="note"></note>'
    }
};

export default directive;