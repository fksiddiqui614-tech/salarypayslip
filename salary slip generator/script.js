const logoUpload=document.getElementById('logoUpload');
const logoPreview=document.getElementById('logoPreview');
const logoText=document.getElementById('logoText');
const previewLogo=document.getElementById('previewLogo');

logoUpload.addEventListener('change',function(e){
const file=e.target.files[0];
if(file){
const reader=new FileReader();
reader.onload=function(ev){
logoPreview.src=ev.target.result;
previewLogo.src=ev.target.result;
logoText.style.display='none';
}
reader.readAsDataURL(file);
}
});

const calculateBtn=document.getElementById('calculateBtn');
const downloadBtn=document.getElementById('downloadBtn');

calculateBtn.addEventListener('click',function(){
const basic=+document.getElementById('basicSalary').value||0;
const hraV=+document.getElementById('hra').value||0;
const med=+document.getElementById('medical').value||0;
const other=+document.getElementById('otherAllowance').value||0;
const bonusV=+document.getElementById('bonus').value||0;
const deduct=+document.getElementById('deductions').value||0;
const taxP=+document.getElementById('taxPercent').value||0;
const cur=document.getElementById('currency').value; // user selected currency

const totalAllow=hraV+med+other;
const gross=basic+totalAllow+bonusV;
const taxAmt=(gross*taxP)/100;
document.getElementById('tax').value=taxAmt.toFixed(2);
const net=gross-deduct-taxAmt;

// Fill preview with currency symbol
document.getElementById('previewName').innerText=document.getElementById('employeeName').value;
document.getElementById('previewDesignation').innerText=document.getElementById('employeeDesignation').value;
document.getElementById('previewID').innerText=document.getElementById('employeeID').value;
document.getElementById('previewDate').innerText=document.getElementById('payDate').value;

document.getElementById('previewBasic').innerText=cur+basic.toFixed(2);
document.getElementById('previewHRA').innerText=cur+hraV.toFixed(2);
document.getElementById('previewMedical').innerText=cur+med.toFixed(2);
document.getElementById('previewOther').innerText=cur+other.toFixed(2);
document.getElementById('previewBonus').innerText=cur+bonusV.toFixed(2);
document.getElementById('previewDeductions').innerText=cur+deduct.toFixed(2);
document.getElementById('previewTax').innerText=cur+taxAmt.toFixed(2);
document.getElementById('previewNet').innerText=cur+net.toFixed(2);
});

downloadBtn.addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const payslip = document.getElementById('payslipPreview');

    html2canvas(payslip, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'pt', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('PaySlip.pdf');
    });
});