const net=require('net');
const server=net.createServer((socket)=>{
    const date=new Date();
    socket.end(date.getFullYear()+'-'+verifyNumber(date.getMonth()+1)+'-'+verifyNumber(date.getDate())+' '+date.getHours()+':'+date.getMinutes()+'\n');
});
function verifyNumber(number){
    if(number<10)
        return '0'+number;
    return number;
}
server.listen(process.argv[2]);