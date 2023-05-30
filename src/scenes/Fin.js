// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Fin extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("fin");
  }

  init(data) {
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
    console.log(data);
    this.cantidadEstrellas = data.cantidadEstrellas;
  }

  create() {
    this.juegoGanadoTexto = this.add.text(
      200,
      150,
      "¡HAS GANADO!", {
        fontSize: "50px", fill: "#FFBE33"
      }
    )
    this.cantidadEstrellasTexto = this.add.text(
      120,
      350,
      "Estrellas totales: " + this.cantidadEstrellas,
      { fontSize: "30px", fill: "#FFFFFF" }
    );
  }
}
