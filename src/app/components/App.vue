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
class Task{
  constructor(title, description){
    this.title = title;
    this.description = description;
  }
}
export default {
  
  data(){
    return {
      task: new Task()
    }
  },
  methods:{
    addTask(){
      fetch('tasks',{
        method: 'POST',
        body: JSON.parse(this.task),
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => console.log(data));

      this.task = new Task();
    }
  }
}
</script>

<style>

</style>