document.querySelector('.btnTinh').onclick = Tinh;
document.getElementById('btn1').onclick = getNumberFromArray;
var resutl 
var arrResutl = [];

function getNumberFromArray() {
    var diem = document.getElementById('ipArray').value;
    arrResutl.push(diem);
    console.log(arrResutl)
    document.querySelector('.dvArray').innerHTML = arrResutl
    document.getElementById('ipArray').value = '';
}

function Tinh(){
    var ChucNang = document.getElementById('.')
    var selectedIndex  = document.getElementById('idChucnang').selectedIndex;
    var selectValue = document.getElementById('idChucnang').options[selectedIndex].value;

    switch (selectValue) {
        case "TongSoDuong":
            var sum = 0;
            for (let i = 0; i < arrResutl.length; i++){
                console.log(arrResutl[i]);
                sum += parseInt(arrResutl[i])
            }
            document.querySelector('.dvResutl').innerHTML = "Tong cac so trong mang: "+ sum;
            break;
        
        case "DemSoDuong":
            var count = 0;
            for (let i = 0; i < arrResutl.length; i++){
                if(arrResutl[i] > 0){
                    count++;
                }
            }
            document.querySelector('.dvResutl').innerHTML = "So luong so duong trong mang: "+ count;
            break;

        case "SoNhoNhat":
            var min = arrResutl[0];
            for (let i = 0; i < arrResutl.length; i++){
                if(min > arrResutl[i]){
                    min = arrResutl[i];
                }
            }
            document.querySelector('.dvResutl').innerHTML = "So nho nhat trong mang: "+ min;
            break;

        case "SoDuongNhoNhat":
            var min = arrResutl[0];
            for (let i = 0; i < arrResutl.length; i++){
                if(min > arrResutl[i] && arrResutl[i] > 0){
                    min = arrResutl[i];
                }
            }
            document.querySelector('.dvResutl').innerHTML = "So duong nho nhat trong mang: "+ min;
            break;

        case "SoChanCuoiCung":
            var sochan = 0
            for (let i = arrResutl.length; i <= arrResutl.length; i--){
                if(arrResutl[i] % 2 == 0){
                    sochan = arrResutl[i];
                    break;
                }else if(i == 0 && arrResutl[i] % 2 != 0){
                    sochan = -1
                    break;
                }
            }
            document.querySelector('.dvResutl').innerHTML = "So chan cuoi cung trong mang: "+ sochan;
            break;
        
        case "ThuTuTangDan":
            var resutl = arrResutl.sort(compareNumbers)
            document.querySelector('.dvResutl').innerHTML = "So chan cuoi cung trong mang: "+ resutl;
            break;

        default:
            break;
    }
}

function compareNumbers(a, b) {
    return a - b;
  }
