import { Middleware} from 'koa';

declare namespace KoaTooBusy {
    interface KoaTooBusyOptionsObject {
        maxLag?: number
        interval?: number
        status?: number
        message?: string
    }

    type KoaTooBusyOptions = KoaTooBusyOptionsObject

    interface KoaTooBusy {
        (options?: KoaTooBusyOptions): Middleware;
    }
}

declare const KoaTooBusy: KoaTooBusy.KoaTooBusy;
export = KoaTooBusy;
