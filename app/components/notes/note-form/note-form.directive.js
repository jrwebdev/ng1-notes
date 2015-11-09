let directive = () => {
    return {
        restrict: 'E',
        controller: () => {},
        controllerAs: 'noteFormCtrl',
        bindToController: {
            note: '='
        },
        scope: {},
        template: `
            <div class="note-form">
                <h2>Add Note</h2>
                <md-input-container>
                    <label>Title</label>
                    <input name="title" ng-model="noteFormCtrl.note.title">
                </md-input-container>
                <md-input-container>
                    <label>Note</label>
                    <textarea name="note" ng-model="noteFormCtrl.note.note"></textarea>
                </md-input-container>
            </div>
        `
    }
};

export default directive;