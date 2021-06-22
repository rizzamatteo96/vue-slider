const app = new Vue({
    el : '#app',
    data : {
        contatore : 0,
        immagini : [
            'img/img1.jpg', 
            'img/img2.jpg',
            'img/img3.jpg',
            'img/img4.jpg',
            'img/img5.jpg',
            'img/img6.jpg'
        ]
    },
    methods : {
        nextPic : function () {
            (this.contatore == this.immagini.length - 1) ? this.contatore = 0 : this.contatore++;
        },
        prevPic : function () {
            (this.contatore == 0) ? this.contatore = this.immagini.length - 1 : this.contatore--;
        },
        selectPic : function (index) {
            this.contatore = index;
        }
    },
    created : function(){
        setInterval(() => {
            (this.contatore == this.immagini.length - 1) ? this.contatore = 0 : this.contatore++;
        }, 3000);
        
        document.addEventListener('keyup', (e) => {
            if(e.code == 'ArrowLeft'){
                // console.log(this);
                this.prevPic();
            }
            else if(e.code == 'ArrowRight'){
                // console.log(this);
                this.nextPic();
            }
        });
    }
});