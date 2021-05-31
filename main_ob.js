//  Tạo đối tượng từ lớp đối tượng
var dssv = new DanhSachSinhVien();
var validation = new Validation();

getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
}

/**
 * Thêm sinh viên
 */
// getEle("btnAdd").onclick = function () {
//   console.log(123);
// };

function layDuLieuDauVao(isAdd) {
    var _maSV = getEle("txtMaSV").value;
    var _tenSV = getEle("txtTenSV").value;
    var _emailSV = getEle("txtEmail").value;
    var _matKhau = getEle("txtPass").value;
    var _ngaySinh = getEle("txtNgaySinh").value;
    var _khoaHoc = getEle("khSV").value;
    var _diemToan = getEle("txtDiemToan").value;
    var _diemLy = getEle("txtDiemLy").value;
    var _diemHoa = getEle("txtDiemHoa").value;

    //isValid : la true => Cho phep them sinh vien
    var isValid = true;

    /**
     * validation (Kiểm tra tính hợp lệ thông tin đầu vào)
     */

    // Kiểm tra Validation cho maSV
    // MÃ Sinh Viên

    if (isAdd) {
        isValid &=
            validation.kiemTraRong(
                _maSV,
                "divMaErr",
                "* Mã sinh viên không được rỗng"
            ) &&
            validation.kiemTraDoDaiKyTu(_maSV, "divMaErr", "Do dai ky tu tu 4 den 10", 4, 10) &&
            validation.kiemTraMaSvTrung(_maSV, "divMaErr", "* Mã sinh viên đã tồn tại", dssv.list);
    }


    // Tên Sinh Viên

    isValid &=
        validation.kiemTraRong(
            _tenSV,
            "divTenErr",
            "* Tên sinh viên không được rỗng"
        ) && validation.kiemTraKyTuChuoi(_tenSV, "divTenErr", "Ten Sv phai la chu");

    //Email Sinh Viên
    isValid &=
        validation.kiemTraRong(
            _emailSV,
            "divEmailErr",
            "* Email sinh viên không được rỗng"
        ) &&
        validation.kiemTraEmail(
            _emailSV,
            "divEmailErr",
            "Email khong dung dinh dang"
        );

    // Mật khẩu
    isValid &=
        validation.kiemTraRong(
            _matKhau,
            "divMatKhauErr",
            "* Mật khẩu sinh viên không được rỗng"
        ) &&
        validation.kiemTraMatKhau(
            _matKhau,
            "divMatKhauErr",
            "* Mat khau khong dung dinh dang"
        );

    // Ngày Sinh
    isValid &=
        validation.kiemTraRong(
            _ngaySinh,
            "divNgaySinhErr",
            "* Ngày sinh sinh viên không được rỗng"
        ) &&
        validation.kiemTraNgaySinh(
            _ngaySinh,
            "divNgaySinhErr",
            "* Ngay sinh khong dung dinh dang"
        );

    //Khóa học
    isValid &= validation.kiemTraKhoaHoc(
        "khSV",
        "divKHErr",
        "(*) Vui long chon khoa hoc"
    );

    //Kiểm tra số đúng dịnh dạng
    isValid &=
        validation.kiemTraRong(
            _diemToan,
            "divDToanErr",
            "* Điểm sinh viên không được rỗng"
        ) &&
        validation.kiemTraSo(_diemToan, "divDToanErr", "(*) Vui long nhap vao so");

    isValid &=
        validation.kiemTraRong(
            _diemLy,
            "divDLyErr",
            "* Điểm sinh viên không được rỗng"
        ) && validation.kiemTraSo(_diemLy, "divDLyErr", "(*) Vui long nhap vao so");

    isValid &=
        validation.kiemTraRong(
            _diemHoa,
            "divDHoaErr",
            "* Điểm sinh viên không được rỗng"
        ) &&
        validation.kiemTraSo(_diemHoa, "divDHoaErr", "(*) Vui long nhap vao so");

    //Tạo đối tượng sinhVien từ lớp đối tượng SinhVien
    //từ khóa new: tạo đối tượng từ lớp đối tượng
    if (isValid) {
        var sinhVien = new SinhVien(
            _maSV,
            _tenSV,
            _emailSV,
            _matKhau,
            _ngaySinh,
            _khoaHoc,
            _diemToan,
            _diemLy,
            _diemHoa
        );
        return sinhVien;
    }
    return null;

}

//callback function: Tham số 1 hàm, là 1 hàm khác
getEle("btnAdd").addEventListener("click", function (event) {
    //preventDefault chặn trang web bị load lại  trong form
    event.preventDefault();

    var sinhVien = layDuLieuDauVao(true);

    if (sinhVien) {
        sinhVien.tinhDTB();
        dssv.themSinhVien(sinhVien);
        taoBang(dssv.list);
        setLocalStorage();
    }
});

function taoBang(arr) {
    //reset tbody
    getEle("tbodySinhVien").innerHTML = "";

    for (var i = 0; i < arr.length; i++) {
        //Tạo ra dòng tr
        var tagTR = document.createElement("tr"); //tạo dòng bằng createAlement

        // tạo cột td - 6 cột
        var tagTD_MaSV = document.createElement("td");
        var tagTD_TenSV = document.createElement("td");
        var tagTD_EmailSV = document.createElement("td");
        var tagTD_Ngaysinh = document.createElement("td");
        var tagTD_KhoaHoc = document.createElement("td");
        var tagTD_DTB = document.createElement("td");
        var tagTD_Button_Edit = document.createElement("td");
        var tagTD_Button_Delete = document.createElement("td");

        //tạo nội dung 6 cột
        tagTD_MaSV.innerHTML = arr[i].maSV;
        tagTD_TenSV.innerHTML = arr[i].tenSV;
        tagTD_EmailSV.innerHTML = arr[i].emailSV;
        tagTD_Ngaysinh.innerHTML = arr[i].ngaySinh;
        tagTD_KhoaHoc.innerHTML = arr[i].khoaHoc;
        tagTD_DTB.innerHTML = arr[i].diemTB;
        tagTD_Button_Edit.innerHTML =
            '<button class="btn btn-info" onclick="suaSinhVien(\'' +
            arr[i].maSV +
            "')\">Sửa</button>";
        tagTD_Button_Delete.innerHTML =
            '<button class="btn btn-danger" onclick="xoaSinhVien(\'' +
            arr[i].maSV +
            "')\">Xóa</button>";

        //apenendChild 6 cột vào dòng
        tagTR.appendChild(tagTD_MaSV);
        tagTR.appendChild(tagTD_TenSV);
        tagTR.appendChild(tagTD_EmailSV);
        tagTR.appendChild(tagTD_Ngaysinh);
        tagTR.appendChild(tagTD_KhoaHoc);
        tagTR.appendChild(tagTD_DTB);
        tagTR.appendChild(tagTD_Button_Edit);
        tagTR.appendChild(tagTD_Button_Delete);

        //  appendChild dòng vào tbody
        getEle("tbodySinhVien").appendChild(tagTR);
    }
}

function xoaSinhVien(maSV) {
    dssv._xoaSinhVien(maSV);
    taoBang(dssv.list);
    setLocalStorage();
}

/**
 * sửa sinh viên
 */

function suaSinhVien(maSV) {
    var sinhVien = dssv.layThongTinSinhVien(maSV);

    //Mở lại button btnUpdate

    getEle("btnUpdate").style.display = "inline-block";

    // DOM tới các thẻ input show ra value

    getEle("txtMaSV").value = sinhVien.maSV;
    getEle("txtMaSV").disabled = true;

    getEle("txtTenSV").value = sinhVien.tenSV;
    getEle("txtEmail").value = sinhVien.emailSV;
    getEle("txtPass").value = sinhVien.matKhau;
    getEle("txtNgaySinh").value = sinhVien.ngaySinh;
    getEle("khSV").value = sinhVien.khoaHoc;
    getEle("txtDiemToan").value = sinhVien.diemToan;
    getEle("txtDiemLy").value = sinhVien.diemLy;
    getEle("txtDiemHoa").value = sinhVien.diemHoa;
}

// Cập nhật sinh viên

getEle("btnUpdate").addEventListener("click", function () {
    /**
     * Lấy thông tin mới nhất từ các thẻ iuput
     */
    var sinhVien = layDuLieuDauVao(false);


    sinhVien.tinhDTB();
    dssv.capNhatSinhVien(sinhVien);
    taoBang(dssv.list);
    setLocalStorage();
});

/**
 * 
 *  Nút reset form 
 */


getEle("btnReset").addEventListener("click", function () {
    //DOM  tới các thẻ input gắn value cho rỗng hết

    getEle("formSV").reset();
    getEle("btnUpdate").style.display = "none";
    getEle("txtMaSV").disabled = false;

})

/**
 * Tìm kiếm sinh viên
 */


//keyup khi nhập vào sẽ hiểu
getEle("txtSearch").addEventListener("keyup", function () {
    var keyWord = getEle("txtSearch").value;
    var listTimKiem = dssv.timKiemSinhVien(keyWord);
    taoBang(listTimKiem);
})

function setLocalStorage() {
    //Chuyển kiểu JSON sang kiểu String (JSON.Stringify)
    var arrString = JSON.stringify(dssv.list);
    localStorage.setItem("DSSV", arrString);
}

function getLocalStorage() {
    // chuyển từ String về JSON
    if (localStorage.getItem("DSSV")) {
        var data = localStorage.getItem("DSSV");
        dssv.list = JSON.parse(data);
        taoBang(dssv.list);
        // JSON.parse(localStorage.getItem("DSSV"));
    }
}
