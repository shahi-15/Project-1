let num=0;

function show(){
    num=num+1;
    const sidebar = document.querySelector('.sidebar');
    const lAr = document.querySelector('#space'); 
    sidebar.style.display = 'flex';
    if (num==0) {
        lAr.style.display = 'none';
    }
    else{
        lAr.style.display = 'block';
    }
}

function hide(){
    num=num-1;
    const sidebar = document.querySelector('.sidebar');
    const lAr = document.querySelector('#space'); 
    sidebar.style.display = 'none';
    if (num==0) {
        lAr.style.display = 'none';
    }
    else{
        lAr.style.display = 'block';
    }
}