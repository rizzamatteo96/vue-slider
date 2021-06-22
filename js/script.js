const app = new Vue({
    // dichiarazione elemento chiave
    el : '#app',
    // dichiarazione dei dati
    data : {
        contatore : 0,
        immagini : [
            'img/img1.jpg', 
            'img/img2.jpg',
            'img/img3.jpg',
            'img/img4.jpg',
            'img/img5.jpg',
            'img/img6.jpg',
            'img/img7.jpg',
            'img/img8.jpg',
            'img/img9.jpg',
            'img/img10.jpg',
            'img/img11.jpg',
            'img/img12.jpg',
            'img/img13.jpg',
        ]
    },
    // dichiarazione delle funzioni / metodi
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
    // dichiarazione delle funzioni al caricamento della pagina
    created : function(){
        //* intervallo per scorrimento automatico con richiamo di funzione
        setInterval(() => {
            this.nextPic();
        }, 3000);
        
        //* ascolta i pulsanti della tastiera per richiamare le funzioni di cambio immagine
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