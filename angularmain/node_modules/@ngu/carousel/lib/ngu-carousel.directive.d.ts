import { TemplateRef, ViewContainerRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NguCarouselItemDirective {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NguCarouselItemDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NguCarouselItemDirective, "[NguCarouselItem]", never, {}, {}, never>;
}
export declare class NguCarouselNextDirective {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NguCarouselNextDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NguCarouselNextDirective, "[NguCarouselNext]", never, {}, {}, never>;
}
export declare class NguCarouselPrevDirective {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NguCarouselPrevDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NguCarouselPrevDirective, "[NguCarouselPrev]", never, {}, {}, never>;
}
export declare class NguCarouselPointDirective {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NguCarouselPointDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NguCarouselPointDirective, "[NguCarouselPoint]", never, {}, {}, never>;
}
export declare class NguCarouselDefDirective<T> {
    template: TemplateRef<any>;
    when: (index: number, nodeData: T) => boolean;
    constructor(template: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NguCarouselDefDirective<any>>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NguCarouselDefDirective<any>, "[nguCarouselDef]", never, {}, {}, never>;
}
export declare class NguCarouselOutlet {
    viewContainer: ViewContainerRef;
    constructor(viewContainer: ViewContainerRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NguCarouselOutlet>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NguCarouselOutlet, "[nguCarouselOutlet]", never, {}, {}, never>;
}

//# sourceMappingURL=ngu-carousel.directive.d.ts.map