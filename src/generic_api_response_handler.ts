// [][][] Project: Generic API response handler

// step-1: API response interface (generic)
interface APIResponseInterface<T> {
    status: number;
    message: string;
    data: T;
    author: {
        name: string;
        age: number;
        isStudent: boolean;
        subjects: string[];
    }
}

// step-2: write a function to fetch API
const handleAPIResponse = <T>(response: APIResponseInterface<T>): T => {
    if(response.status === 200){
        console.log("Success:", response.message);
        console.log("Response:", response)
        return response.data;
    }else{
        throw new Error("Something went wrong! or Bad API request");
    }
}

// for a user API response
const userResponseAPI = handleAPIResponse<{name: string, age: number}>({
    status: 200,
    message: "User fetcched successfully",
    data: {
        name: "MD WALIDUR RAHMAN TANJIM",
        age: 25
    },
    author: {
        name: "Walidur Tanjim",
        age: 25,
        isStudent: true,
        subjects: ['Bangla', "English", "Math"]
    }
});

// console.log(userResponseAPI);

// for a product API response
const productResponseAPI = handleAPIResponse<string>({
    status: 400,
    message: "Products API fetched successfully",
    data: "Desktop",
    author: {
        name: "MD WALIDUR RAHMAN TANJIM",
        age: 25,
        isStudent: true,
        subjects: ['Bangla', "English", "Math"]
    }
})
// console.log(productResponseAPI);