<template>
  <div class="row m-0 h-100">
    <div class="col-8 table-responsive">
      <h1>Server Browser</h1>
      <div class="overflow-auto border">
        <table class="table table-borderless table-hover">
          <thead class="thead-light">
            <tr>
              <th>#</th><th>Name</th><th>Mode</th><th>Players</th>
            </tr>
          </thead>
          <tbody>
            <ServerBrowserItem 
              v-for="(item, index) in serverList" 
              v-bind:data="Object.assign({ID: index}, item)" 
              :key="item.Name"
              @click="setActive($event)"
              @dblclick="connect(item.Name)"/>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-4">
      <div class="h-100 d-flex flex-column">
        <button class="btn btn-light btn-lg mt-3" @click="connect(currentServerName)">Подключиться</button>
        <button class="btn btn-light btn-lg mt-3" @click="createGame">Создать</button>
        <button class="btn btn-light btn-lg mt-3">Поиск</button>
        <button class="btn btn-light btn-lg mt-auto" @click="refresh">Обновить</button>
      </div>
    </div>
  </div>
</template>

<script>
  //import AWS from "aws-sdk";
  import ServerBrowserItem from "@/components/ServerBrowserItem.vue";

  export default {
    name: 'ServerBrowser',
    data() { 
      return {
        currentRow: null,
      }
    },
    computed: {
      currentServerName() {
        return this.currentRow ? this.currentRow.children[1].innerHTML : null;
      },
      serverList() {
        return this.$store.state.serverList;
      }
    },
    methods: {
      createGame() {
        var params = {
          MaximumPlayerSessionCount: '2', /* required */
          AliasId: 'fleet-0e6eddb0-ee80-43dc-b6aa-57d78f9f36a6',
        };
        this.$store.state.gameLift.createGameSession(params, function(err, data) {
          if (err) console.log(err, err.stack); // an error occurred
          else     console.log(data);           // successful response
        });
      },
      refresh() {
        this.currentRow = null;
        console.log("refreshing...")
        //TODO:
        /*
        var gamelift = new AWS.GameLift();
        console.log(gamelift.config);
        var params1 = {
          "AliasId": "string",
          "FleetId": "fleet-1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
          "Limit": 10,
          "NextToken": "",
        };/*
        var params = {
          AliasId: 'STRING_VALUE',
          FleetId: 'fleet-1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
          Limit: '10',
          NextToken: '',
        };
        gamelift.describeGameSessions(params1, (err, data) => {
          if (err) console.log(err)
          else console.log(data)
        });*/
        //console.log(gamelift);
        //var res = gamelift.searchGameSessions({});
        this.$store.dispatch("refreshServerList");
        /*
        this.$store.commit("setServerList", [{
            Name: 123,
            Mode: "Custom",
            Slots: 0,
            Players: 0
          },
          {
            Name: 4576,
            Mode: "Custom",
            Slots: 0,
            Players: 0
          },
          {
            Name: 4124,
            Mode: "Custom",
            Slots: 0,
            Players: 0
          },
          {
            Name: 4543,
            Mode: "Custom",
            Slots: 0,
            Players: 0
          }
        ]);*/
      },
      connect(item) {
        if (item != null)
        {
          console.log("trying to connect to " + item)
        }
      },
      setActive(event) {
        if (this.currentRow != null)
        {
          this.currentRow.classList.toggle("table-active");
        }
        if (this.currentRow == event.target.parentNode)
        {
          this.currentRow = null;
        }
        else
        {
          this.currentRow = event.target.parentNode;
          this.currentRow.classList.toggle("table-active");
        }
      }
    },
    components: {
      ServerBrowserItem,
    }
  }
</script>