<template>
  <div>
		<h1>Les routes dynamiques</h1>

    <h3 v-if="selectedRoom.name">
      Salle choisie : {{ selectedRoom.name }}
    </h3>

    <h3 v-else>
      Pas de correspondance
    </h3>

    <br><br>

    <h3>Salles disponibles</h3>

    <ul>
      <li
        v-for="room in rooms"
        :key="room.id"
      >
        <router-link :to="`/routing/${room.id.toString()}`">{{ room.name }}</router-link>
      </li>
    </ul>

    <br><br>

    <h3>Salles inexistantes</h3>

    <ul>
      <li>
        <router-link to="/routing/45">Salle Panthéon</router-link>
      </li>

      <li>
        <router-link to="/routing/zzz">Salle Cathédrale</router-link>
      </li>
    </ul>
	</div>
</template>

<script>
export default {
  name: 'Routing',

  components: {
    //
  },

  computed: {
    //
  },

	data: () => ({
    selectedRoom: {},
    rooms: [
      {
        id: 0,
        name: 'W49 - Weldom'
      },
      {
        id: 1,
        name: 'W47 - Zodio'
      },
      {
        id: 2,
        name: 'Le Patio - Dexter Power'
      }
    ]
	}),

  created() {
    this.selectRoom();
  },

  watch: {
    '$route.params.id': function () {
      this.selectRoom();
    }
  },

	methods: {
    selectRoom() {
      this.selectedRoom = {};
      const id = this.$route.params.id;
      if (id) {
        const selectedRoom = this.rooms.find(room => {
          return room.id === parseInt(id, 10);
        });
        if (selectedRoom && selectedRoom.name) {
          this.selectedRoom = selectedRoom;
        }
      }
    }
	}
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin-left: 0;
}
</style>
