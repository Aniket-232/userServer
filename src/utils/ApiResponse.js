
class ApiResponse{
    constructor(status,message="na",data="null"){
        this.status=status;
        this.message=message;
        this.data=data;
    }
    static success(message,data){
        return new ApiResponse(0,message,data);
    }
    static error(message,data){
        return new ApiResponse(1,message,data);
    }
    static notFound(message,data){
        return new ApiResponse(2,message,data);
    }
}

export {ApiResponse};