import angular from 'angular';

function MainController () {

    this.notes = [{
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

}

export default angular.module('app.main', [])
                      .controller('mainController', MainController);