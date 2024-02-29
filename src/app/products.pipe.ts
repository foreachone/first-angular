import { HttpClient } from "@angular/common/http";
import { OnDestroy, Pipe, PipeTransform } from "@angular/core";
import { Product } from "./products";

@Pipe({ 
    name: 'cheapProducts'
    // Pure pipe won't update display 
})
export class CheapProductsPipe implements PipeTransform {

    transform(allProducts: Product[]) {
        console.log('Pure pipe exceed')
        return allProducts.filter(product => product.price <= 500)
    }

}

@Pipe({ 
    name: 'expensiveProducts',
    pure: false
})
export class ExpensiveProductsPipe implements PipeTransform {

    transform(allProducts: Product[]) {
        return allProducts.filter(product => product.price > 500)
    }

}

@Pipe({ 
    name: 'fetchShipping',
    pure: false
})
export class FetchShippingPipe implements PipeTransform, OnDestroy {

    private cachedData: any = null;
    private cachedUrl = '';
    constructor(private http: HttpClient) {

    }
    ngOnDestroy(): void {
        
    }

    transform (url: string) {
        console.log('Pipe transform exceed')
        debugger
        if(url != this.cachedUrl) {
            this.cachedData = null
            this.http.get(url).subscribe(result => this.cachedData = result)
            this.cachedUrl = url
        }
        
        return this.cachedData
    }

}