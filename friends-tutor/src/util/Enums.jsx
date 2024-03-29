const METHOD = {
    "get" : "get",
    "post" : "post",
    "delete" : "delete",
    "put" : "put"
};

const HOST = {
    "address" : "https://www.gdsc-gist-lms.page",
    "port" : 443
}

const FE_PATH = {
    main : "/",
    auth : {
        signin : "/sign-in",
        signup : "/sign-up"
    },

    mypage : {
        mypage : "/mypage",
        certificate : "/certificate"
    },
    course : {
        upload : "/course/upload",
        list : "/course/list",
        view : "/course/view"
    }
};

const BE_PATH = {

};


export {METHOD, HOST, FE_PATH, BE_PATH};