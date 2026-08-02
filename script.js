const p=document.getElementById('requestPopup');
const o=document.getElementById('openRequest');
const x=document.getElementById('closeRequest');
if(o&&p){o.onclick=()=>p.style.display='flex';}
if(x&&p){x.onclick=()=>p.style.display='none';}
window.onclick=e=>{if(e.target===p)p.style.display='none';};
