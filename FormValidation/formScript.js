function Validation() {
    var result=true;
    var i=doctument.getElementsByTagName("input");
    if(i[0].value.length==0)
        return false;
    return (result);
}