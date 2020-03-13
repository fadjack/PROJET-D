const euro = document.getElementById('euro');
const dollar =  document.getElementById('dollar');
const indianRs =  document.getElementById('indianRs');
const franc =  document.getElementById('franc');
const cny = document.getElementById('cny');
const cad = document.getElementById('cad');
const jpy = document.getElementById('JPY');
const hkd = document.getElementById('hkd');


euro.addEventListener('input' , euroToDolarToIndianRsToFrancToCnyToCadTojpyTohkd);
function euroToDolarToIndianRsToFrancToCnyToCadTojpyTohkd() {
    const eu = parseInt(euro.value);
    const dl = 1.12*eu;
    const ir = eu*82.85;
    const td= eu*656.84;
    const ca = eu*1.55;
    const jp = eu*24.49;
    const hk = eu*8.70;
    dollar.value = dl;
    indianRs.value = ir;
    franc.value = td;
    cad.value = ca;
    jpy.value = jp;
    hkd.value = hk;
  
}
dollar.addEventListener('input' , dolarToEuroToIndianRsToFrancToCnyToCadTojpyTohkd);

function  dolarToEuroToIndianRsToFrancToCnyToCadTojpyTohkd() {
    const dl = parseInt(dollar.value);
    const eu = dl*0.89;
    const ir = dl*73.96;
    const td=  dl*586.41;
    const ca = dl*1.38;
    const jp = dl*21.83;
    const hk = dl*7.77;
    euro.value = eu;
    indianRs.value = ir;
    franc.value = td;
    cad.value = ca;
    jpy.value = jp;
    hkd.value = hk;

}
indianRs.addEventListener('input' , IndianRsToEuroTodolarToFrancToCnyToCadTojpyTohkd);

function  IndianRsToEuroTodolarToFrancToCnyToCadTojpyTohkd() {
    const ir = parseInt(indianRs.value);
    const eu = ir*0.012;
    const dl = ir*0.014;
    const td= ir*7.93;
    const ca = ir*0.019;
    const jp = ir*0.30;
    const hk = ir*0.11;
    euro.value = eu;
    dollar.value = dl;
    franc.value = td;
    cad.value = ca;
    jpy.value = jp;
    hkd.value = hk;
}

franc.addEventListener('input' ,FrancToEuroTodolarToIndianRsToCnyToCadTojpyTohkd);

function  FrancToEuroTodolarToIndianRsToCnyToCadTojpyTohkd() {
    const td = parseInt(franc.value);
    const eu = td*0.0015;
    const dl = td*0.0017;
    const ir= td* 0.13 ;
    const ca = td*0.0024;
    const jp = td*0.037;
    const hk = td*0.013;
    euro.value = eu;
    dollar.value = dl;
    indianRs.value = ir;
    cad.value = ca;
    jpy.value = jp;
    hkd.value = hk;
}

cad.addEventListener('input' ,CanToEuroTodolarToIndianRsTofrancToCadTojpyTohkd);

function CanToEuroTodolarToIndianRsTofrancToCadTojpyTohkd() {
    const ca = parseInt(cad.value);
    const eu = ca*0.65 ;
    const dl = ca*0.72;
    const ir=  ca* 53.49;
    const td = ca*424.28;
    const jp = ca*15.77;
    const hk = ca*5.62;
    euro.value = eu;
    dollar.value = dl;
    indianRs.value = ir;
    franc.value = td;
    jpy.value = jp;
    hkd.value = hk;
}
JPY.addEventListener('input' ,jpyToEuroTodolarToIndianRsTofrancToCadTohkd);

function jpyToEuroTodolarToIndianRsTofrancToCadTohkd() {
    const jp = parseInt(JPY.value);
    const eu = jp*0.041 ;
    const dl = jp*0.046;
    const ir= jp*3.39;
    const td = jp*26.92;
    const ca = jp*0.063;
    const hk = jp*0.36;
    euro.value = eu;
    dollar.value = dl;
    indianRs.value = ir;
    franc.value = td;
    cad.value = ca;
    hkd.value = hk;
}

hkd.addEventListener('input' ,hkdToEuroTodolarToIndianRsTofrancToCadTojpy);

function hkdToEuroTodolarToIndianRsTofrancToCadTojpy() {
    const hk = parseInt(hkd.value);
    const eu = hk*0.12 ;
    const dl = hk*0.13;
    const ir= hk*9.52;
    const td = hk*75.51;
    const ca = hk*0.18;
    const jp = hk*2.80;
    euro.value = eu;
    dollar.value = dl;
    indianRs.value = ir;
    franc.value = td;
    cad.value = ca;
    jpy.value = jp
}
/*
 dollar.addEventListener('input' , dollarToEuroToIndianRsTo);
 function dollarToEuroToIndianRsTo (){
     const dl = parseFloat(dollar.value)
     const eu = dl*0.90;
     const ir = dl*68.86;
     const lr = dl*176.19;
     euro.value = eu;
     indianRs.value = ir;
    
 }
 
 indianRs.addEventListener('input', indianRsToEuroToDollarTo);
 function indianRsToEuroToDollarToLankaRs () {
     const ir = parseFloat(indianRs.value)
     const eu = ir*0.13;
     const dl = ir*0.015;
     const lr = ir*2.56;
     euro.value = eu;
     dollar.value = dl;
     dollar.value = lr;
 }


 lankaRs.addEventListener('input' , lankaRsToEuroToDollarToIndianRs);
 function lankaRsToEuroToDollarToIndianRs () {
     const lr = parseFloat(lankaRs.value);
     const eu = lr*0.0051;
     const dl = lr*0.0057;
     const ir = lr*0.39;
     euro.value = eu;
     dollar.value = dl;
     indianRs.value = ir;

 }
 

 function main() {
    euroToDolarToIndianRsToFranc();
    dollarToEuroToIndianRsToLankaRs();
    indianRsToEuroToDollarToLankaRs();
    lankaRsToEuroToDollarToIndianRs();
 }

 main();
 */

