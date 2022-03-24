<template>
  <div>
      <h3>OHP Take Home Project</h3>
      <p>Michael McDermott - 03/23/2022</p>

      <p>
      MBI: <input type='text' v-model='mbi'  />&nbsp;&nbsp;<span v-if="verified!==null">{{verified}}</span>
      </p>
      <p>
        <button @click="doGenerateMBI()">Generate MBI</button>&nbsp;&nbsp;<button @click="doVerifyMBI()">Verify MBI</button>
      </p>
    
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      mbi: null,
      verified: null,
    }
  },
  methods: {
      doGenerateMBI: function() {
        this.axios.get("http://localhost/generate").then((response) => {
           this.mbi=response.data;
           this.verified=null;
        })
      },
      doVerifyMBI: function() {
        this.axios.post("http://localhost/verify", {
          input_mbi: this.mbi
        }).then((response) => {
          this.verified=(response.data===true)?"Verified":"Did Not Verify"
        })
      }
  }
}
</script>
