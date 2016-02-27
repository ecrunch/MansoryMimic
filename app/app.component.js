System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Testing heading';
                    this.group = [
                        { "id": 1, "name": "tacoman", "width": '200px', "height": '300px' },
                        { "id": 2, "name": "Buritoman", "width": '200px', "height": '300px' },
                        { "id": 3, "name": "Testman", "width": '200px', "height": '300px' },
                        { "id": 4, "name": "Flyman", "width": '200px', "height": '300px' },
                        { "id": 5, "name": "Oman", "width": '200px', "height": '300px' },
                        { "id": 6, "name": "man", "width": '200px', "height": '300px' },
                        { "id": 7, "name": "Bman", "width": '200px', "height": '300px' },
                        { "id": 8, "name": "Coman", "width": '200px', "height": '300px' },
                        { "id": 9, "name": "Rman", "width": '200px', "height": '300px' },
                        { "id": 10, "name": "Tman", "width": '200px', "height": '300px' },
                        { "id": 1, "name": "tacoman", "width": '200px', "height": '300px' },
                        { "id": 2, "name": "Buritoman", "width": '200px', "height": '300px' },
                        { "id": 3, "name": "Testman", "width": '200px', "height": '300px' },
                        { "id": 4, "name": "Flyman", "width": '200px', "height": '300px' },
                        { "id": 5, "name": "Oman", "width": '200px', "height": '300px' },
                        { "id": 6, "name": "man", "width": '200px', "height": '300px' },
                        { "id": 7, "name": "Bman", "width": '200px', "height": '300px' },
                        { "id": 8, "name": "Coman", "width": '200px', "height": '300px' },
                        { "id": 9, "name": "Rman", "width": '200px', "height": '300px' },
                        { "id": 10, "name": "Tman", "width": '200px', "height": '300px' }
                    ];
                    this.width = '200px';
                    this.containerWidth = '660px';
                }
                AppComponent.prototype.onClickMe = function (i) {
                    console.log('here');
                    if (this.group[i].width === '200px') {
                        this.group[i].width = '420px';
                        this.group[i].height = '620px';
                        this.tmp = this.group[i];
                        this.group[i] = this.group[0];
                        this.group[0] = this.tmp;
                        this.tmp = '';
                    }
                    else {
                        this.group[i].width = '200px';
                        this.group[i].height = '300px';
                    }
                };
                AppComponent.prototype.containerChange = function () {
                    if (this.containerWidth === '440px') {
                        this.containerWidth = '660px';
                    }
                    else {
                        this.containerWidth = '440px';
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/view.html',
                        styleUrls: ['app/style.css'],
                        directives: [common_1.NgStyle]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map