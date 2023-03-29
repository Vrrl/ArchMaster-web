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
        10 found
      </div>
      <div class="loading" v-if="loading">
        <scaling-squares-spinner
          :animation-duration="1250"
          :size="65"
          color="#ff1d5e"
        />
      </div>
      <div class="challenges" v-if="!loading">
        <div class="challenge" v-for="(challenge, index) in challenges" :key="index">{{ challenge }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ChallengeClient } from '@/infra/api/ChallengeClient';
import type { Challenge } from "@/models/challenge";
import { ScalingSquaresSpinner } from "epic-spinners"

const challengeClient: ChallengeClient = new ChallengeClient()


export default defineComponent({
  data() {
    return {
      loading: true as boolean,
      challenges: [] as Challenge[]
    }
  },
  methods: {
    async fillList(): Promise<void> {
      this.challenges = await challengeClient.list()
      this.loading = false
    }
  },
  computed: {
  },
  mounted() {
    this.fillList()
  },
  components: {
    ScalingSquaresSpinner
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
    margin: 0 8px;
    width: 100%;

    .loading{
      display: grid;
      place-content: center;
      margin: 150px auto;
    }
    .search{
      width: 100%;
      margin: 0 24px 24px 24px;

    }

    .challenges{
      display: flex;
      flex-wrap: wrap;
      .challenge{
        width: 250px;
        height: 200px;
        background-color: #fff;
        border-radius: 5px;
        padding: 12px;
        margin: 12px;
      }

    }
  }
}

.filter{
  background-color: rgb(40, 40, 40);
  border-radius: 5px;
  padding: 12px;
  width: 350px;
  display: flex;
  flex-direction: column;

}
</style>
