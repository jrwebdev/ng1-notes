let directive = () => {
    return {
        restrict: 'E',
        controller: function() {
            this.add = () => {
                //this.onAdd({note: {title: this.note.title, note: this.note.note}});
                this.note.title = '';
                this.note.note = '';
            }
        },
        controllerAs: 'noteFormCtrl',
        bindToController: {
            note: '=',
            onAdd: '&'
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
                <md-button type="button" ng-click="noteFormCtrl.add()">Add</md-button>
            </div>
        `
    }
};

export default directive;