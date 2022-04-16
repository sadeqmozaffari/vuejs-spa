<template>
<div class="row">
    <div class="col-4 mx-auto rounded p-4 mt-4 card border shadow">
        <div class="form-group">
        <h1 class="text-center mb-4">Login</h1>
        <form @submit.prevent="doLogin" >
            <div class="form-group mt-2">
                <label for="UserName">User Name</label>
                 <input type="text" class="form-control" v-model="username"  placeholder="User Name" id="UserName"
                 :class="{
                     'is-invalid':userNameE===true,
                     'is-valid':userNameE===false,
                     }"
                 />
                 <div class="invalid-feedback" v-if="userNameE">
                     {{userNameM}}
                 </div>
            </div>
               
            <div class="form-group mt-2">
                 <label for="Password">Password</label>
                 <input type="password" class="form-control" v-model="password"  placeholder="Password" id="Password"
                 :class="{
                     'is-invalid':passwordE===true,
                     'is-valid':passwordE===false,
                     }"
                 />
                   <div class="invalid-feedback" v-if="passwordE">
                     {{passwordM}}
                 </div>
            </div>
               
                <button type="submit" class="btn btn-success mt-2 ">login</button>   
        </form>
        </div>
    
 </div>
</div>
</template>
<script>

export default{
    name:'Login',
    data(){
    return{
        username:'',
        password:'',
        userNameE:'',
        passwordE:'',
        userNameM:'',
        passwordM:''
    }
    },
    methods: {
        doLogin(){
            let access=true
            if(this.username.length<5){
                this.userNameE=true
                access=false
                if(this.username.length===0){
                     this.userNameM="user name required."
                }
                  else{
                      this.userNameM="User Name must be at least 5 character long."
                }
            }else{
                this.userNameE=false
                this.userNameM=''
            }
                if(this.password.length<5){
                 access=false
                this.passwordE=true
                if(this.password.length===0){
                     this.passwordM="password required."  
                }
                else{
                    this.passwordM="password must be at least 5 character long."
                }
            }else{
                this.passwordE=false
                this.passwordM=''
            }
            if(access){
             this.$store.commit("login",'sdsd')
             this.$router.push('/profile')
            }
           
            // console.log(this.password)
            // console.log(this.username)
        }
    },
}

</script>