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
        <div class="search-bar">
          <input type="text" placeholder="Search challenge">
        </div>
        <div class="meta">
          <div class="found">{{ challenges.length }} Challenges found</div>
          <div class="order">Order|</div>
        </div>
      </div>
      <div class="loading" v-if="loading">
        <scaling-squares-spinner
          :animation-duration="1250"
          :size="65"
          color="#ff1d5e"
        />
      </div>
      <div class="challenges" v-if="!loading">
        <div class="challenge" v-for="(challenge, index) in challenges" :key="challenge.id">
          <div class="info">
            <div class="title">{{ challenge.title }}</div>
            <div class="small">
              <div class="creator">{{ challenge.creator?.name }}</div>
              <div class="times-started"></div>
            </div>
          </div>
          <div class="languages">
            <div class="language">12</div>
            <div class="language">C</div>
            <div class="language">C#</div>
          </div>
          <div class="tags">
            <div class="tag" v-for="tag in challenge.tags">{{ tag }}</div>
          </div>
        </div>
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
      margin-bottom: 16px;
      display: flex;

      .search-bar{
        width: 50%;
        input{
          background-color: rgba(40, 40, 40, 1);
          border: 2px solid rgba(14, 14, 14, 0.5);
          border-radius: 4px;
          width: 100%;
          height: 42px;
          color: var(--text-primary);
          padding: 0 8px;
        }
      }

      .meta{
        width: 50%;
        display: flex;
        padding: 0 8px;
        align-items: center;
        justify-content: space-between;
        .found{
          color: var(--text-primary);
        }

        .order{

        }
      }
    }

    .challenges{
      display: grid;
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      grid-auto-rows: 200px;  

      .challenge{
        display: grid;
        background-color: #363636;
        border-radius: 5px;
        padding: 12px;
        grid-template:  'info info info langs langs'
                        'tags tags tags tags tags';
        

        .info{
          grid-area: info;
          display: flex;
          flex-direction: column;
          .title{
            grid-area: info;
            color: aliceblue;
            font-size: 24px;
          }
          .small{
            display: flex;
            flex-wrap: wrap;
            .creator{
              color: rgb(184, 184, 184);
              font-size: 14px;
            }
          }
          
        }
        .languages{
          grid-area: langs;
          display: flex;
          flex-direction: column;
          margin-left: auto;

          .language{
            width: 38px;
            height: 38px;
            margin-bottom: 6px;

            display: grid;
            place-content: center;
            border: 1px solid #ccc;
            color: #ccc;

            border-radius: 5px;
          }
        }
        .tags{
          grid-area: tags;
          display: flex;
          flex-wrap: wrap;
          margin-top: auto;
          .tag{
            background-color: #1c1c1c;
            color: rgb(255, 255, 255);
            border-radius: 5px;
            padding: 3px 8px;
            margin: 2px 4px;

            font-size: 12px;
          }
        }
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
