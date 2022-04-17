<template>
  <div class="home text-center">
   <article v-for="article in articles">
     
        <router-link  :to="`/article/${article.slug}`">
     <h2>{{article.title}}</h2>
  </router-link>
     <p>{{article.description}} <router-link  :to="`/article/${article.slug}`">+more</router-link></p>
      <hr class="mb-5"/>
   </article>
  
  </div> 
 
</template>


<script>
export default {
  name: 'HomeView',
  data(){
    let articleslist=localStorage.getItem("articles")
    articleslist = JSON.parse(articleslist)

      return {
        articles:articleslist 
      }
  }
}
</script>
