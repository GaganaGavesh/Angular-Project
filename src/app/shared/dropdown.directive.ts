import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    //css class ekat open kiyana eka attach karanawada deattach karanawada kiyana wade thama meken karanne
    @HostBinding('class.open') isOpen = false;

    //hostlistner eken karanne ape element ekata wena ewa gana listn karan inna eka
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }

}