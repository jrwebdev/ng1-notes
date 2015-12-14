import {INote} from './note.interface';
import {addNote} from '../../actions.ts';

/*
let notes: INote[];

notes = [{
    title: 'Note 1',
    note: 'Note 1 note text'
},{
    title: 'Note 2',
    note: 'Note 2 note text'
},{
    title: 'Note 3',
    note: 'Note 3 note text'
},{
    title: 'Note 4',
    note: 'Note 4 note text'
},{
    title: 'Note 5',
    note: 'Note 5 note text'
}];
*/

function MainController ($ngRedux) {

    //this.notes = notes;

    /**
    this.addNote = (note: INote) => {

        this.notes.push(note);

    };
    **/

    console.log('abc');

    this.mapStateTothis = function (state) {
        return {
            notes: state.notes.notes
        }
    };

    //let unsubscribe = $ngRedux.connect(this.mapStateTothis, CounterActions)(this);
    $ngRedux.connect(this.mapStateTothis, {addNote})(this);

}

MainController.$inject = ['$ngRedux'];

export default angular.module('app.main', [])
                      .controller('mainController', MainController);