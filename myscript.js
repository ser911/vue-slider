var app = new Vue (
  {
  el: "#app",
  data: {
    images: [
    "https://www.globalpsa.com/wp-content/uploads/190128-Palermo-Sicily-Italy-IMG00.jpg",
    "https://www.costacrociere.it/content/dam/costa/costa-magazine/article-images/palermo-beaches/9-spiagge-palermo-694x390.jpg.image.694.390.low.jpg",
    "https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d383737363036333638"],
    imgIndex: 0
  },
  methods: {
  nextImg: function(){
  this.imgIndex++;

  if (this.imgIndex == 3) {
    this.imgIndex = 0;
  }

},
 prevImg: function(){
this.imgIndex--;
if (this.imgIndex < 0) {
  this.imgIndex = 2;
}
 }

  }

}
);
