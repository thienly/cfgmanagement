var somePromise = new Promise((resolve,reject) => 
{   
    resolve('it worked');
    setTimeout(() => {
        reject('It is not work');
    }, 2500);
});
somePromise.then((message)=>{

},(errorMessage)=>{
    console.log(errorMessage);
});