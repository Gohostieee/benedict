


export function PasswordValid(x:string | undefined) {
    if( x === undefined || x?.length === 0) {
        return 1;
    }
    if(x.length < 4) {
        return 2;
    }


    return 0;
}
export function EmailValid(x:string | undefined){
        if( x == undefined) {
            return 2;
        }
        return !x.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );



}
export function UsernameValid(x:string | undefined) {
    if( x == undefined || x?.length === 0) {
        return 1;
    }

    return 0;
}