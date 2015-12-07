import './note.css';

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
            <div class="note">
                <header class="note__header">
                    <md-checkbox ng-model="noteCtrl.note.isSelected" aria-label="Select"></md-checkbox>
                    <h2>{{noteCtrl.note.title}}</h2>
                </header>
                <p class="note__content">{{noteCtrl.note.note}}</p>
            </div>
        `
    }
};

export default directive;