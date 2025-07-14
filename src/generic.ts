// function withour generic
const logString = (value: string): void => {
    console.log(value);
}

const logNumberOrBoolean = (value: number | boolean): void => {
    console.log(value);
}
// logNumberOrBoolean(false);

// function with generic
const genLog = <T>(value: T): void => {
    console.log(value);
}
// genLog<string>("Walidur Tanjim");
// genLog<number>(123);
// genLog<boolean>(false);


// define interface using generic
interface APIResponse<T> {
    success: boolean;
    data: T
}

const userResponse: APIResponse<{name: string}> = {
    success: true,
    data: {
        name: "MD WALIDUR RAHMAN TANJIM"
    }
}

const numberResponse: APIResponse<number> = {
    success: false,
    data: 25
}