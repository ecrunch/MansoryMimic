	import {Component} from 'angular2/core';
	import {NgStyle} from 'angular2/common';

@Component({
    selector: 'my-app',
    templateUrl: 'app/view.html',
    styleUrls: ['app/style.css'],
	directives: [NgStyle]
})
export class AppComponent { 
	public title = 'Testing heading';
	public group[] = [
		{ "id": 1, "name": "tacoman", "width": '250px' , "height": '300px'},
		{ "id": 2, "name": "Buritoman", "width": '250px', "height": '300px' },
		{ "id": 3, "name": "Testman", "width": '250px', "height": '300px' },
		{ "id": 4, "name": "Flyman", "width": '250px', "height": '300px' },
		{ "id": 5, "name": "Oman", "width": '250px', "height": '300px' },
		{ "id": 6, "name": "man", "width": '250px', "height": '300px' },
		{ "id": 7, "name": "Bman", "width": '250px', "height": '300px' },
		{ "id": 8, "name": "Coman", "width": '250px', "height": '300px' }, 
		{ "id": 9, "name": "Rman", "width": '250px', "height": '300px' },
		{ "id": 10, "name": "Tman", "width": '250px', "height": '300px' },
		{ "id": 1, "name": "tacoman", "width": '250px', "height": '300px' },
		{ "id": 2, "name": "Buritoman", "width": '250px', "height": '300px' },
		{ "id": 3, "name": "Testman", "width": '250px', "height": '300px' },
		{ "id": 4, "name": "Flyman", "width": '250px', "height": '300px' },
		{ "id": 5, "name": "Oman", "width": '250px', "height": '300px' },
		{ "id": 6, "name": "man", "width": '250px', "height": '300px' },
		{ "id": 7, "name": "Bman", "width": '250px', "height": '300px' },
		{ "id": 8, "name": "Coman", "width": '250px', "height": '300px' }, 
		{ "id": 9, "name": "Rman", "width": '250px', "height": '300px' },
		{ "id": 10, "name": "Tman", "width": '250px', "height": '300px' }
	]
		

	public width = '200px';
	public containerWidth = '1080px';
	public tmp
	public sideView = 'none';

	// '660px'

	onClickMe(i) {
		console.log('here');
		if (this.group[i].width === '250px'){
			this.containerChange()
			this.group[i].width = '790px';
			this.group[i].height = '620px';
			this.tmp = this.group[i];
			this.group[i] = this.group[0];
			this.group[0] = this.tmp;
			this.tmp = '';
			this.sideView = 'inline';


		} else {
			this.group[i].width = '250px';
			this.group[i].height = '300px';
			this.containerChange()
			this.sideView = 'none';
		}

	}

	containerChange() {
		if (this.containerWidth === '1080px') {
			this.containerWidth = '810px';
		} else {
			this.containerWidth = '1080px';

		}
	}

	}