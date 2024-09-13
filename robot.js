// Clase Mano
class Mano {
    constructor(lado) {
      this.lado = lado; // Atributo: lado (izquierda o derecha)
      this.numeroDedos = 5; // Atributo: número de dedos
    }
  
    agarrar() {
      console.log(`La mano ${this.lado} está agarrando un objeto.`);
    }
  }
  
  // Clase Pierna
  class Pierna {
    constructor(lado) {
      this.lado = lado; // Atributo: lado (izquierda o derecha)
      this.fuerza = 100; // Atributo: fuerza de la pierna
    }
  
    saltar() {
      console.log(`La pierna ${this.lado} está saltando.`);
    }
  }
  
  // Clase Torso
  class Torso {
    constructor() {
      this.capacidadBateria = 100; // Atributo: capacidad de la batería
      this.material = 'aleación de titanio'; // Atributo: material del torso
    }
  
    rotar() {
      console.log('El torso está rotando.');
    }
  }
  
  // Clase Cabeza
  class Cabeza {
    constructor() {
      this.numeroOjos = 2; // Atributo: número de ojos
      this.tipoVision = 'visión nocturna'; // Atributo: tipo de visión
    }
  
    analizar() {
      console.log('La cabeza está analizando el entorno.');
    }
  }
  
  // Clase Robot que compone todas las partes
  class Robot {
    constructor() {
      this.manoIzquierda = new Mano('izquierda');
      this.manoDerecha = new Mano('derecha');
      this.piernaIzquierda = new Pierna('izquierda');
      this.piernaDerecha = new Pierna('derecha');
      this.torso = new Torso();
      this.cabeza = new Cabeza();
      this.outfit = null; // Outfit aplicado al robot
    }
  
    aplicarOutfit(outfit) {
      this.outfit = outfit;
      console.log(`Outfit aplicado: ${outfit.nombre}`);
    }
  }
// Clase Outfit
class Outfit {
    constructor(nombre) {
      this.nombre = nombre; // Atributo: nombre del outfit
    }
  
    aplicarAlRobot(robot) {
      robot.aplicarOutfit(this);
    }
  }
  
  // Clase Hija 1: Armadura de Combate
  class ArmaduraCombate extends Outfit {
    constructor() {
      super('Armadura de Combate');
      this.proteccion = 80; // Atributo: nivel de protección
    }
  
    activarEscudo() {
      console.log('El escudo de la armadura de combate está activado.');
    }
  }
  
  // Clase Hija 2: Traje Espacial
  class TrajeEspacial extends Outfit {
    constructor() {
      super('Traje Espacial');
      this.resistenciaRadiacion = 95; // Atributo: resistencia a la radiación
    }
  
    activarModoFlotante() {
      console.log('El modo flotante del traje espacial está activado.');
    }
  }
// Crear un nuevo robot
const miRobot = new Robot();

// Crear instancias de diferentes outfits
const armaduraCombate = new ArmaduraCombate();
const trajeEspacial = new TrajeEspacial();

// Aplicar armadura de combate al robot
armaduraCombate.aplicarAlRobot(miRobot);

// Hacer que el robot realice algunas acciones
miRobot.manoDerecha.agarrar(); // La mano derecha está agarrando un objeto.
miRobot.cabeza.analizar(); // La cabeza está analizando el entorno.

// Aplicar traje espacial al robot
trajeEspacial.aplicarAlRobot(miRobot);

// Realizar más acciones
miRobot.piernaIzquierda.saltar(); // La pierna izquierda está saltando.
    