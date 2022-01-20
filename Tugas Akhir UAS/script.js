const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const d = new Date();
let day = weekday[d.getDay()];
let name = month[d.getMonth()];
document.getElementById("hari").innerHTML = day;
document.getElementById("bulan").innerHTML = name;
document.getElementById("tahun").innerHTML = d.getFullYear();
let tgl = d.getUTCDate();
document.getElementById("tgl").innerHTML = tgl;


window.setTimeout("waktu()", 1000);
        function waktu(){
            var waktu = new Date();
            window.setTimeout("waktu()", 1000);
            document.getElementById("jam").innerHTML = waktu.getHours();
            let minutes = waktu.getMinutes();
            document.getElementById("menit").innerHTML = minutes;
            if(minutes<10){
                document.getElementById("menit").innerHTML ="0" + minutes;
            }
        }


