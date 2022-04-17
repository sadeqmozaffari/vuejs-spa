<template>
<div class="row">
  <div class="Details text-center   col-md-10  p-5 mx-auto" >
    <!-- {{$route.params.slug}} -->
     <h2>{{article.title}}</h2>
     <p>{{article.description}} </p>
    <p>{{article.content}} </p>
      <hr class="mb-5"/>
      <button @click="edit=!edit" class="btn btn-warning m-2">Edit</button>
       <button @click="doRemove" class="btn btn-danger">Remove Article</button>
  </div> 
  <div class="Edit card shadow col-md-6 mx-auto my-5 p-5" v-if="edit">
     <form @submit.prevent="editArticle">
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
        <button class="btn btn-success float-end mt-2" type="submit" v-if="$store.state.isAuthenticated">Save</button>
        
      </form>
  </div>
  </div>
</template>


<script>
export default {
  name: 'DetailsView',
  data(){
   
    let articleslist=localStorage.getItem("articles")
    let articles = JSON.parse(articleslist)
  //  console.log(articles)
   let article = articles.find(article=> 
        article.slug == this.$route.params.slug
        )
//  console.log(article)
      return {
        articles:articles,
         edit:false,
        article:article,
        title:article.title,
        description:article.description,
        content:article.content
      }
  },
  methods:{
    editArticle(){
       let i = this.articles.findIndex(article=> 
        article.slug == this.$route.params.slug
        )
      this.articles[i]={
        title:this.title,
        description:this.description,
        content:this.content,
        slug:this.title.replaceAll(" ","-").toLowerCase(),
      }
        let database= JSON.stringify(this.articles)
        localStorage.setItem("articles",database)
        this.article=this.articles[i]
        this.edit=false
        this.$router.push(`/article/${this.articles[i].slug}`)
    },
    doRemove(){
           let i = this.articles.findIndex(article=> 
        article.slug == this.$route.params.slug
        )
        this.articles.splice(i,1)
        let database= JSON.stringify(this.articles)
        localStorage.setItem("articles",database)
        this.$router.push("/")
    }
  }
}
</script>
