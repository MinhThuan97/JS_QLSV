function Validation() {
    this.kiemTraRong = function (input, divID, mess) {
        if (input.trim() === "") {
            //Thông báo lỗi
            getEle(divID).innerHTML = mess;
            getEle(divID).className = "alert alert-danger";
            return false;
        } else {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }
    };

    this.kiemTraDoDaiKyTu = function (input, divID, mess, min, max) {
        if (input.length >= min && input.length <= max) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }

        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.kiemTraKyTuChuoi = function (input, divID, mess) {
        var letter =
            "^[a-zA-Z_Ă€ĂĂ‚ĂƒĂˆĂ‰Ăáº¾ĂŒĂĂ’Ă“Ă”Ă•Ă™ĂÄ‚ÄÄ¨Å¨Æ Ă Ă¡Ă¢Ă£Ă¨Ă©ĂªĂ¬Ă­Ă²Ă³Ă´ĂµĂ¹ĂºÄƒÄ‘Ä©Å©Æ¡Æ¯Ä‚áº áº¢áº¤áº¦áº¨áºªáº¬áº®áº°áº²áº´áº¶" +
            "áº¸áººáº¼á»€á»€á»‚Æ°Äƒáº¡áº£áº¥áº§áº©áº«áº­áº¯áº±áº³áºµáº·áº¹áº»áº½á»á»á»ƒáº¿á»„á»†á»ˆá»á»Œá»á»á»’á»”á»–á»˜á»á»œá»á» á»¢á»¤á»¦á»¨á»ªá»…á»‡á»‰á»‹á»á»á»‘á»“á»•á»—á»™á»›á»á»Ÿá»¡á»£" +
            "á»¥á»§á»©á»«á»¬á»®á»°á»²á»´Ăá»¶á»¸á»­á»¯á»±á»³á»µá»·á»¹\\s]+$";
        if (input.match(letter)) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.kiemTraEmail = function (input, divID, mess) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (input.match(letter)) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }

        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.kiemTraMatKhau = function (input, divID, mess) {
        var letter =
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if (input.match(letter)) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }

        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.kiemTraNgaySinh = function (input, divID, mess) {
        var letter = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
        if (input.match(letter)) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }

        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.kiemTraKhoaHoc = function (idSelect, divID, mess) {
        if (getEle(idSelect).selectedIndex != 0) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.kiemTraSo = function (input, divID, mess) {
        var letter = /^[0-9]+$/;
        if (input.match(letter)) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.kiemTraMaSvTrung = function (input, divID, mess, arr) {
        /**
         *  1. Duyệt mảng array
         *  2. Nếu như item.MaSV trùng với input
         *      => Trùng maSV
         *  3. Ngược lại không trùng
         */
        var status = true;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].maSV === input) {
                status = false;
                break;
            }
        }

        if (status) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };
}
