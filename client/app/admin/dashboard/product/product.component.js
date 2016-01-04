System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var ProductComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ProductComponent = (function () {
                function ProductComponent(http) {
                    var _this = this;
                    this.http = http;
                    http.get('api/products')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (products) {
                        console.log(products.data);
                        _this.productsList = products.data;
                    });
                }
                ProductComponent = __decorate([
                    core_1.Component({
                        selector: 'manage-products',
                        templateUrl: './app/admin/dashboard/product/product.component.html',
                        viewProviders: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProductComponent);
                return ProductComponent;
            })();
            exports_1("ProductComponent", ProductComponent);
        }
    }
});
//# sourceMappingURL=product.component.js.map