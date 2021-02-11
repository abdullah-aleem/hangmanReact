export function showNotification(setter){
    setter(true);
    setInterval(()=>{
setter(false);
    },2000);
}