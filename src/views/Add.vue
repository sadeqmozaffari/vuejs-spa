<template>

  <div class="Add  row">
      <div class="col-md-6 card shadow border mx-auto p-4">
      <form @submit.prevent="addArticle">
          <div class="form-group mt-2">
              <lable id="titleinput" class="label">Title</lable>
              <input class="form-control" for="titleinput" type="text" placeholder="Type your Title" v-model="title"/>
          </div>
           <div class="form-group mt-2">
              <lable id="descriptioninput" class="label">Description</lable>
              <textarea class="form-control" for="description" type="text" placeholder="Type your description" rows="3" v-model="description"></textarea>
          </div>
            <div class="form-group mt-2">
              <lable id="contentinput" class="label">Description</lable>
              <textarea class="form-control" for="contentinput" type="text" placeholder="Type your content" rows="6" v-model="content"></textarea>
          </div>
        <button class="btn btn-success float-end mt-2" type="submit">Save</button>
      </form>
  </div> 
  </div>
 
</template>


<script>
export default {
  name: 'Add',
   
  data(){
   let articles=localStorage.getItem("articles")
    articles=JSON.parse(articles)
    
      return {
        articles:articles,
        title:'',
        description:'',
        content:''
      }
  },
  methods:{
      addArticle(){

         let article ={
             title:this.title,
             description:this.description,
             content:this.content,
             slug:this.title.replace(" ","-").toLowerCase()
         }
       this.articles.push(article)
       let data=JSON.stringify(this.articles)
        localStorage.setItem("articles",data)
        this.$router.push(`/article/${article.slug}`)
      }
  }
}
</script>
