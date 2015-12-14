class Notes {

    _notes: any;

    set notes (notes: any) {
        console.warn('notes', notes);
        this._notes = notes;
    }

    get notes () : any {
        return this._notes;
    }

}

let directive = () => {
    return {
        restrict: 'E',
        controller: Notes,
        controllerAs: 'noteListCtrl',
        bindToController: {
            notes: '@'
        },
        scope: {},
        template: '<note ng-repeat="note in noteListCtrl.notes" note="note"></note>'
    }
};

export default directive;