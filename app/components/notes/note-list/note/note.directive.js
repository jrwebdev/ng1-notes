let directive = () => {
    return {
        restrict: 'E',
        controller: () => {},
        controllerAs: 'noteCtrl',
        bindToController: {
            note: '='
        },
        scope: {},
        template: `
            <div class='note'>
                <md-checkbox ng-model="noteCtrl.note.isSelected"></md-checkbox>
                <h2>{{noteCtrl.note.title}}</h2>
                <p>{{noteCtrl.note.note}}</p>
            </div>
        `
    }
};

export default directive;