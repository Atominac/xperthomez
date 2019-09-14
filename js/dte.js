var a=document.getElementById('sl');
var date=document.getElementById('sd');
a.addEventListener('change',display);
function display()
{
    if(a.value=='Immediate')
    {
        date.style.display='none';
    }
    else{
        date.style.display='inline';
    }
}