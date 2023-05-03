const app = new Vue({
  el: '#app',
  
  data () {
   return {
      courses: [],//Un propiedad courses que sea un array y permita almacenar la lista de cursos
     
     title: '',
     time: ''//Tener una propiedad title y otra time que se usean para agregar un nuevo curso a la lista, estas propiedades deben estar enlazados a los inputs usando v-model
   }
  },
  
  computed: {
    totalTime () {
      if (!this.courses.length) { return 0 }
      
      return this.courses.reduce((a, b) => a + parseInt(b.time), 0)
    }//Una propiedad computada totalTime que recorra toda la lista de cursos y retorne la suma del tiempo invertido en educacion.
  },
  
  methods: {
    addCourse () {
      if (!this.title || !this.time) { return }
      
      this.courses.push({
        title: this.title,
        time: this.time
      })
      
      this.title = ''
      this.time = 0
    }//Un boton con un metodo addCourse (enlazado con v-on) que permita agregar un nuevo courso usando los valores de title y time.
  }
})