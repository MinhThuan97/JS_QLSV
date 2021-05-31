function DanhSachSinhVien() {
    this.list = [];

    this.themSinhVien = function (sv) {
        this.list.push(sv);
    };

    this._timViTri = function (maSV) {
        /**
         * tìm vị trị mã sinh viên muốn xóa thông qua mảng list
         *  0. var index = -1 ;
         *  1. duyệt mảng
         *  2. nếu item.maSv == maSV => index (i)
         *  3. splice (index, 1)
         */
        var index = -1;
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].maSV == maSV) {
                index = i;
                break;
            }
        }
        return index;
    };

    this._xoaSinhVien = function (maSV) {
        var index = this._timViTri(maSV);
        //Xóa Sinh viên
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    };

    this.layThongTinSinhVien = function (maSV) {
        // lẤY VỊ TRÍ
        var index = this._timViTri(maSV);
        if (index !== -1) {
            return this.list[index];
        }
    };

    this.capNhatSinhVien = function (sinhVien) {
        var index = this._timViTri(sinhVien.maSV);

        if (index !== -1) {
            this.list[index] = sinhVien;
        }
    };

    // this.timKiemSinhVien = function (){

    // };
}

DanhSachSinhVien.prototype.timKiemSinhVien = function (keyWord) {
    /**
     *  0. Tạo 1 mảng tìm kiếm= []
     *  1. Duyệt mảng list
     *  2. nếu như keyWord trùng với sinhVien.tenSV
     *      => tìm thấy: thêm tenSV vào mảng tìm kiếm
     *  3. return về mangTimKiem
     */
    var listTimKiem = [];

    for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].tenSV.toLowerCase().indexOf(keyWord.toLowerCase()) != -1) {
            listTimKiem.push(this.list[i]);
        }
    }
    return listTimKiem;
};
