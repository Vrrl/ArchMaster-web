<template>
  <div class="explore">
    <div class="left">
      <div class="filter">
        <div class="option">
          opt
        </div>
        <div class="option">
          opt
        </div>
      </div>
    </div>

    <div class="right">
      <div class="search">
        search
      </div>

      <div class="challenges">
        10 found
        <div class="challenge" v-for="(challenge, index) in challenges" :key="index">{{ challenge }}challege</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ChallengeClient } from '@/infra/api/ChallengeClient';
import { ref, computed, onMounted } from 'vue'

const challengeClient: ChallengeClient = new ChallengeClient()

const double = computed<string>(() => 'teste')

export default defineComponent({
  data() {
    return {
      message: 'Hello!',
      challenges: [] as string[]
    }
  },
  methods: {
    fillList(): void {
      this.challenges.push('ola')
    }
  },
  computed: {
    greeting() {
      return this.message + '!'
    }
  },
  mounted() {
    this.greeting // type: string
    this.fillList()
  }
})


</script>

<style scoped lang="scss">
.explore{
  display: flex;

  .left{
    display: block;
  }

  .right{
    display: flex;
    flex-direction: column;
    margin: 0 24px;

    .search{
      width: 100%;
      margin: 0 24px 24px 24px;

    }

    .challenges{

      display: flex;
      

    }
  }
}

.filter{
  background-color: rgb(79, 79, 79);
  border-radius: 15px;
  width: 300px;
  display: flex;
  flex-direction: column;

}
</style>
