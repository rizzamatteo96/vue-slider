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
        nextPic() {
            (this.contatore == this.immagini.length - 1) ? this.contatore = 0 : this.contatore++;
        },
        prevPic() {
            (this.contatore == 0) ? this.contatore = this.immagini.length - 1 : this.contatore--;
        },
        selectPic(index){
            this.contatore = index;
        }
    },
    created : function(){
        setInterval(() => {
            (this.contatore == this.immagini.length - 1) ? this.contatore = 0 : this.contatore++;
        }, 3000);
    }
});