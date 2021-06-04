<template>
<div>
  <nav class="navbar navbar-dark bg-dark">
    <a href="/" class="navbar-brand">Mevn Stack</a>
  </nav>

  <div class="container">
    <div class="row pt-4">
      <div class="col-md-5">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="addTask">
            <div class="form-group">
              <input type="text" v-model="task.title" class="form-control" placeholder="Dame el nombre de tu tarea">
            </div>
            <br><br>
            <div class="form-group">
              <textarea  class="form-control" v-model="task.description" cols="30" rows="10" placeholder="Inserta una descripcion"></textarea>
              </div>
              <br>
              <button class="btn btn-primary btn-block" >Agregar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


</div>
</template>

<script>
export default {
  
  data(){
    return {
      task: {
        title: '',
        description: ''
      }
    }
  },
  methods:{
    addTask(){
      console.log(this.task)
      this.task.title = '';
      this.task.description = '';
    }
  }
}
</script>

<style>

</style>